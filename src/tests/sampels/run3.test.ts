import { sendRequest, getRequest } from '../../utils/apiHelpers';
import { codeAssertion,messageAssertion, fieldAssertion, valueFieldAssertion } from '../../utils/assertionHelpers';
import { BASEURl } from '../../utils/config';
import { testCasesData3 } from '../../testcases/samples/sample1.testcase';
import { accessToken } from './run2.test';


export function testRunner3() {
    describe(`PATH: ${testCasesData3.path}`, () => {
        let response: any;

        before(async () => {
            const BASE_URL = BASEURl(testCasesData3.path);
            response = await getRequest(BASE_URL, accessToken, testCasesData3.payload);
        });

        context(testCasesData3.testcase, () => {
            it('should return code 200', () => {
                codeAssertion(response.data.code, testCasesData3.code)
            });

            it(`should return message ${testCasesData3.message}`, () => {
                messageAssertion(response.data.message, testCasesData3.message)
            });

            it(`should return meta page. value is ${testCasesData3.payload.page}`, () => {
                valueFieldAssertion(response.data.meta, 'page', testCasesData3.payload.page)
            })
            it(`should return meta size. value is ${testCasesData3.payload.size}`, () => {
                valueFieldAssertion(response.data.meta, 'size', testCasesData3.payload.size)
            });
            it(`should return meta data Source. value is ${testCasesData3.sourceData}`, () => {
                valueFieldAssertion(response.data.meta, 'sourceData', testCasesData3.sourceData)
            });
        });
    });
}