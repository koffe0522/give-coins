import * as cdk from '@aws-cdk/core';
import * as cognito from "@aws-cdk/aws-cognito";

const cognitoStack = (scope: cdk.Construct, id: string) => {
  /**
   * Create Cognito UserPool
   */
  return new cognito.UserPool(scope, "UserPool");

  /*
  const userPool = new cognito.CfnUserPool(scope, id, {
    userPoolName: "UserPoolName",
    // パスワードポリシー
    policies: {
      passwordPolicy: {
        minimumLength: 8,
        requireLowercase: true,
        requireNumbers: true,
        requireUppercase: true,
        requireSymbols: false
      }
    },
    // 必須の標準属性やカスタム属性
    schema: [
      {
        name: "email",
        attributeDataType: "String",
        required: true
      }
    ],
    // 自動検証する項目
    autoVerifiedAttributes: ["email"],
    // Eメール検証メッセージの件名
    emailVerificationSubject: "Your verification code",
    // Eメール検証メッセージの内容
    emailVerificationMessage: "Your verification code is {####}"
  });

  return new cognito.CfnUserPoolClient(scope, id, {
    clientName: "UserPoolClientName",
    userPoolId: "UserPoolId"
  });
  */
}

export default cognitoStack;