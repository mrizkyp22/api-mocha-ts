import { sendRequest } from '../../utils/apiHelpers';
import { codeAssertion,messageAssertion, fieldAssertion, valueFieldAssertion } from '../../utils/assertionHelpers';
import { BASEURl,saveToken,getToken } from '../../utils/config';
import { loginValidData } from '../../testcases/cms/login.testcases';

export function loginRunner() {
    describe(`PATH: ${loginValidData.path}`, () => {
        let response: any;

        before(async () => {
            const tokenBeforeLogin = getToken()
            const BASE_URL = BASEURl(loginValidData.path);
            response = await sendRequest(BASE_URL, loginValidData.payload, tokenBeforeLogin);
            const accessToken = response.data.data.accessToken;
            saveToken(accessToken)
        });
    
        context(loginValidData.testcase, () => {
            it('should return code 200', () => {
                codeAssertion(response.data.code, loginValidData.code)
            });
    
            it(`should return message ${loginValidData.message}`, () => {
                messageAssertion(response.data.message, loginValidData.message)
            });
    
            it(`should return have field "${loginValidData.metaAssertion}"`, () => {
                fieldAssertion(response.data.data, loginValidData.metaAssertion)
            });
        });
    });
}