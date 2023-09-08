import { generateToken_schema } from "../../schema/cms/generateToken.schema";

export const generateTokenData = {
    testcase: "Verify system can generate a token for the authentication API before login",
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