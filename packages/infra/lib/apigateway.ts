
import * as cdk from '@aws-cdk/core';
import * as apigateway from "@aws-cdk/aws-apigateway";

const apigatewayStack = (scope: cdk.Construct, id: string) => {
  /**
   * Create APIGateway
   */
  const api: apigateway.RestApi = new apigateway.RestApi(scope, id, {
    restApiName: "apiName",
    description: "apiDescription"
  });

  /**
   * Create APIGateway Authorizer
   * Cognito認証の設定
   */
  const apiAuthorizer: apigateway.CfnAuthorizer = new apigateway.CfnAuthorizer(scope, id, {
    restApiId: api.restApiId,
    name: "authorizerName",
    identitySource: "method.request.header.Authorization",
    providerArns: ["cognitoArn"],
    type: "COGNITO_USER_POOLS"
  });

  return { apigateway, apiAuthorizer, api };
}


export default apigatewayStack