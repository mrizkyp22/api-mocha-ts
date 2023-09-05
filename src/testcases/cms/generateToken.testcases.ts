import { generateToken_schema } from "../../schema/cms/generateToken.schema";
import { endPoint } from "../../utils/config";

export const generateTokenData = {
    testcase: "Verify system can generate a token for the authentication API before login",
    path: endPoint.generateToken,
    method: 'POST',
    payload: {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    },
    code: 200,
    message: 'Your Request Has Been Processed',
    metaAssertion: ['accessToken'],
    schema: generateToken_schema
  };