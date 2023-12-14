import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import helloSchema from "../validations/hello";
import { validate } from "../utils/validate";
import { headers } from "../constant";
import { handleError } from "../utils/error";
export const sayHello = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const reqBody = JSON.parse(event.body as string);

    await validate(helloSchema, reqBody);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: `Hello ${reqBody.name}` }),
    };
  } catch (e) {
    return handleError(e);
  }
};
