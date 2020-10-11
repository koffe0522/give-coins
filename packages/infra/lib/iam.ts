import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';

/**
 * Create IAM Policy Statement
 * 
 * @returns iam.PolicyStatement
 */
const iamStack = (scope: cdk.Construct, id: string): iam.PolicyStatement => {
  const statement: iam.PolicyStatement = new iam.PolicyStatement();
  statement.addActions(
    "dynamodb:PutItem",
    "dynamodb:UpdateItem",
    "dynamodb:Query",
    "dynamodb:Scan"
  );
  statement.addResources(
    "DynamoDBTableARN" // 操作の対象となるDynamoDBTableのARN
  );

  return statement;
}

export default iamStack;