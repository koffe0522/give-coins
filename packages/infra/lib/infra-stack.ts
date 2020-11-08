import * as cdk from '@aws-cdk/core';
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
    const env = process.env.ENV || "local";
    // DynamoDBテーブル
    const sampleTable = new dynamodb.Table(this, "sampleTable", {
      tableName: "samples",
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING }
    });

    // Lambda関数
    const sampleLambda = new lambda.Function(this, "sampleLambda", {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("src/lambda/sample"),
      timeout: cdk.Duration.seconds(60),
      environment: {
        ENV: env
      }
    });
    sampleTable.grantReadWriteData(sampleLambda);

    // API Gateway
    const sampleApi = new apigateway.RestApi(this, "sampleApi", {
      restApiName: "sampleApi"
    });

    const samplesResource = sampleApi.root.addResource("samples");
    const getSamplesIntegration = new apigateway.LambdaIntegration(sampleLambda);
    samplesResource.addMethod("GET", getSamplesIntegration);


    /*
    s3Stack(this, id);
    // The code that defines your stack goes here
    cognitoStack(this, id);

    dynamodbStack(this, id)
    const getHandler = lambdaStack(this, id);
    const statement = iamStack(this, id);
    const { apigateway, apiAuthorizer, api } = apigatewayStack(this, id);
    // Attach role to Lambda
    getHandler.addToRolePolicy(statement);
    // Add GET method to APIGateway
    const integration = new apigateway.LambdaIntegration(getHandler);
    const option: MethodOptions = {
      authorizationType: apigateway.AuthorizationType.COGNITO,
      // authorizer: apiAuthorizer.authorizerUri
    }
    api.root.addMethod("GET", integration, option);

    // Active APIGateway CORS Setting
    // CORSの設定をするために OPTION メソッドを追加します
    const options = api.root.addMethod("OPTIONS", new apigateway.MockIntegration({
      integrationResponses: [{
        statusCode: "200",
        responseParameters: {
          "method.response.header.Access-Control-Allow-Headers": "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
          "method.response.header.Access-Control-Allow-Origin": "'*'",
          "method.response.header.Access-Control-Allow-Credentials": "'false'",
          "method.response.header.Access-Control-Allow-Methods": "'OPTIONS,GET,PUT,POST,DELETE'",
        }
      }],
      passthroughBehavior: apigateway.PassthroughBehavior.NEVER,
      requestTemplates: {
        "application/json": "{\"statusCode\": 200}"
      }
    }));
    const methodResource = (options as cdk.Construct).node.findChild("Resource") as CfnMethod;
    methodResource.methodResponses = [{
      statusCode: "200",
      responseModels: {
        "application/json": "Empty"
      },
      responseParameters: {
        "method.response.header.Access-Control-Allow-Headers": true,
        "method.response.header.Access-Control-Allow-Origin": true,
        "method.response.header.Access-Control-Allow-Credentials": true,
        "method.response.header.Access-Control-Allow-Methods": true,
      }
    }];
    */
  }
}
