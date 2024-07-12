import { Construct } from 'constructs';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { LayerVersion, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Topic } from "aws-cdk-lib/aws-sns";
import { Fn } from "aws-cdk-lib";
import { join } from 'path';

/**
 * Create Lambda Function for backend
 */

export const createLambdaFunctions = (scope: Construct, createFn: any, layers: LayerVersion[]) => {
    const apiGatewayUrl = Fn.importValue('ApiGatewayUrlOutput');

  const createFnWithLayers = (args: Record<string, any>) => {
    return createFn({...args, layers });
  };

  // Lambda
  const backendServerlessLambda = createFnWithLayers({ scope, id: 'backendServerlessLambdaHandler', handler: 'backend/index.ts', tables: [] });

  return {
    backendServerlessLambda
  };
};

/**
 * Utility method to create Lambda blueprint
 * @param scope
 * @param id
 * @param handler
 * @param table
 * @param layers
 */

export const createLambda = ({ scope, id, handler, environment, tables, layers }: {
  scope: Construct;
  id: string;
  handler: string;
  environment: Record<string, any>,
  tables: Table[] | null;
  layers?: LayerVersion[] | undefined;
}) => {
  const fn = new NodejsFunction(scope, id, {
    runtime: Runtime.NODEJS_20_X,
    entry: join('src', 'functions', handler),
    environment: {
      ...(environment && { ...environment }),
      TABLE_NAME: tables?.length ? tables[0]?.tableName : 'none'
    },
    ...(layers && { layers })
  });

  // Give Lambda permissions to read and write data from the DynamoDB table
  if (tables) {
    tables.forEach(table => {
      if (table) {
        table.grantReadWriteData(fn);
      }
    });
  }

  return fn;
};
