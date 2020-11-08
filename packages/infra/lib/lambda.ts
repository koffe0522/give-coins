import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

const lambdaStack = (scope: cdk.Construct, id: string): lambda.Function => {
  return new lambda.Function(scope, id, {
    functionName: "functionName",
    runtime: lambda.Runtime.NODEJS_10_X, // Lambdaのランタイム
    code: lambda.Code.fromAsset('path'), // Lambdaのソースコードを置いているディレクトリ
    handler: "handler", // Lambdaのハンドラー
    environment: {
      TZ: "Asia/Tokyo" // 環境変数
    }
  });
}

export default lambdaStack;