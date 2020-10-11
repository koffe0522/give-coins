import * as cdk from '@aws-cdk/core';
import dynamodb = require("@aws-cdk/aws-dynamodb");

/**
 * Create DynamoDB Table
 */
const dynamodbStack = (scope: cdk.Construct, id: string) => new dynamodb.Table(scope, id, {
  tableName: "tableName",
  partitionKey: {
    name: "HashKey",
    type: dynamodb.AttributeType.STRING
  },
  sortKey: {
    name: "SortKey",
    type: dynamodb.AttributeType.STRING
  }
})

export default dynamodbStack;

