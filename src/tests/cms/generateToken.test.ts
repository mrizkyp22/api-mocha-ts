import { sendRequest, getRequest } from '../../utils/apiHelpers';
import { generateTokenData } from '../../testcases/cms/generateToken.testcases' ;
import { codeAssertion,messageAssertion, fieldAssertion, schemaAssertion } from '../../utils/assertionHelpers';
import { BASEURl } from '../../utils/config';

export let tokenForLogin: any;

export function generateTokenRunner() {
    describe(`PATH: ${generateTokenData.path}`, () => {
        let response: any;

        before(async () => {
            const BASE_URL = BASEURl(generateTokenData.path);
            response = await sendRequest(BASE_URL, generateTokenData.payload);
            tokenForLogin = response.data.data.accessToken;
        });

        context(generateTokenData.testcase, () => {
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