import * as s3 from "@aws-cdk/aws-s3";
import * as cdk from '@aws-cdk/core';

/**
 * Create S3 bucket
 */
const s3Stack = (scope: cdk.Construct, id: string) => new s3.Bucket(scope, id, {
  bucketName: "sample-bucket-19920522"
})

export default s3Stack;