import { generateToken_schema } from "../../schema/cms/sample.schema";

export class generateTokenTestCase {
    static path = '/users-management/v3/auth/generatetoken'
    
    static validData = {
        testcase: "Verify system can generate a token for the authentication API before login",
        method: 'POST',
        payload: {
          body: {
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
          }
        },
        code: 200,
        message: 'Your Request Has Been Processed',
        metaAssertion: ['accessToken'],
        schema: generateToken_schema
    }
}