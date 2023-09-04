import { sendRequest, getRequest } from '../../utils/apiHelpers';
import { testCasesData } from '../../testcases/samples/sample1.testcase';
import { codeAssertion,messageAssertion, fieldAssertion, schemaAssertion } from '../../utils/assertionHelpers';
import { BASEURl } from '../../utils/config';
import { generateToken_schema } from '../../schema/samples/schema1.schema';

export let tokenForLogin: any;

export function testRunner() {
    describe(`PATH: ${testCasesData.path}`, () => {
        let response: any;

        before(async () => {
            const BASE_URL = BASEURl(testCasesData.path);
            response = await sendRequest(BASE_URL, testCasesData.payload);
            tokenForLogin = response.data.data.accessToken;
        });

        context(testCasesData.testcase, () => {
            it('should return valid schema', () => {
                schemaAssertion(response.data, generateToken_schema);
            });

            it('should return code 200', () => {
                codeAssertion(response.data.code, testCasesData.code)
            });

            it(`should return message ${testCasesData.message}`, () => {
                messageAssertion(response.data.message, testCasesData.message)
            });

            for (const field of testCasesData.metaAssertion) {
                it(`should return have field "${field}"`, () => {
                    fieldAssertion(response.data.data, field)
                });
            }
        });
    });
}