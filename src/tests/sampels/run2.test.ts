import { sendRequest, getRequest } from '../../utils/apiHelpers';
import { codeAssertion,messageAssertion, fieldAssertion, valueFieldAssertion } from '../../utils/assertionHelpers';
import { BASEURl } from '../../utils/config';
import { testCasesData } from "../../testcases/samples/sampel2.testcase";
import { tokenForLogin } from './run.test';

export let accessToken: any;

export function testRunner2() {
    describe(`PATH: ${testCasesData.path}`, () => {
        let response: any;

        before(async () => {
            const BASE_URL = BASEURl(testCasesData.path);
            response = await sendRequest(BASE_URL, testCasesData.payload, tokenForLogin);
            accessToken = response.data.data.accessToken;
        });
    
        context(testCasesData.testcase, () => {
            it('should return code 200', () => {
                codeAssertion(response.data.code, testCasesData.code)
            });
    
            it(`should return message ${testCasesData.message}`, () => {
                messageAssertion(response.data.message, testCasesData.message)
            });
    
            it(`should return have field "${testCasesData.metaAssertion}"`, () => {
                fieldAssertion(response.data.data, testCasesData.metaAssertion)
            });
        });
    });
}