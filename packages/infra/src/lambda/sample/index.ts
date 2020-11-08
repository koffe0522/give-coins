import * as AWS from "aws-sdk";
exports.handler = async () => {
  const dynamodbOption = process.env.ENV === "local" ? {
    endpoint: "http://dynamodb:8000",
    region: "local",
    accessKeyId: "local",
    secretAccessKey: "local"
  } : {};
  const docClient = new AWS.DynamoDB.DocumentClient(dynamodbOption);
  const scanResult = await docClient.scan({
    TableName: "samples"
  }).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      samples: scanResult.Items
    })
  };
  return response;
};