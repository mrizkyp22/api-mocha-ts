import { sendRequest } from '../../utils/apiHelpers';
import { generateTokenData } from '../../testcases/cms/generateToken.testcases';
import { codeAssertion, messageAssertion, fieldAssertion, schemaAssertion } from '../../utils/assertionHelpers';
import { BASEURl, saveToken, endPoint } from '../../utils/config';

export function generateTokenRunner() {
    describe(`PATH: ${endPoint.generateToken}`, () => {

        context(generateTokenData.testcase, () => {
            let response: any;

            before(async () => {
                const BASE_URL = BASEURl(endPoint.generateToken);
                response = await sendRequest(BASE_URL, generateTokenData.payload);
                const tokenForLogin = response.data.data.accessToken;
                saveToken(tokenForLogin)
            });

            it('should return valid schema', () => {
                schemaAssertion(response.data, generateTokenData.schema);
            });

            it('should return code 200', () => {
                codeAssertion(response.data.code, generateTokenData.code)
            });

            it(`should return message ${generateTokenData.message}`, () => {
                messageAssertion(response.data.message, generateTokenData.message)
            });

            for (const field of generateTokenData.metaAssertion) {
                it(`should return have field "${field}"`, () => {
                    fieldAssertion(response.data.data, field)
                });
            }
        });
    });
}