# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
  - `cdk deploy [StackName]` deploy only stack
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
  - `cdk synth --output ./output` output CloudFormation template output dir
- `cdk destroy` destroy resouces

# ローカル開発環境構築

## 事前準備

- [Installing the AWS SAM CLI on macOS](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-mac.html)
- [Installing the AWS SAM CLI on Windows](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-windows.html)

1. `$ docker network create sam-cli`
2. `docker-compose up -d`
3. 環境変数の設定

```bash
$ export AWS_SECRET_ACCESS_KEY=local
$ export AWS_ACCESS_KEY_ID=local
$ export AWS_DEFAULT_REGION=local
```

4. dynamodb のテーブル作成とデータ作成

```bash
$ aws dynamodb create-table --endpoint-url http://localhost:8000 --cli-input-json file://dynamodb/samples.json
$ aws dynamodb batch-write-item --endpoint-url http://localhost:8000 --request-items file://dynamodb/samples_data.json
```

5. CloudFormation のテンプレートファイルを作成

```bash
$ cdk synth --no-staging > template.yaml
```

6. API Gateway を実行

```bash
sam local start-api -t template.yaml --docker-network sam-cli
```
