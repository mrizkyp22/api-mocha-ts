import { sendRequest } from '../../utils/apiHelpers';
import { codeAssertion, messageAssertion, fieldAssertion, valueFieldAssertion } from '../../utils/assertionHelpers';
import { BASEURl, saveToken, getToken, endPoint } from '../../utils/config';
import { validLoginData, invalidLoginData } from '../../testcases/cms/login.testcases';
import { expect } from 'chai';

export function loginRunner() {
    describe(`PATH: ${endPoint.login}`, () => {

        context(validLoginData.testcase, () => {
            let response: any;

            before(async () => {
                const tokenBeforeLogin = getToken()
                const BASE_URL = BASEURl(endPoint.login);
                response = await sendRequest(BASE_URL, validLoginData.payload, tokenBeforeLogin);
                const accessToken = response.data.data.accessToken;
                saveToken(accessToken)
            });

            it('should return code 200', () => {
                codeAssertion(response.data.code, validLoginData.code)
            });

            it(`should return message ${validLoginData.message}`, () => {
                messageAssertion(response.data.message, validLoginData.message)
            });
            for (const field of validLoginData.metaAssertion) {
                it(`should return have field "${field}"`, () => {
                    fieldAssertion(response.data.data, field)
                });
            }
        });

        context(invalidLoginData.testcase, () => {
            let response: any;

            before(async () => {
                const tokenBeforeLogin = getToken()
                const BASE_URL = BASEURl(endPoint.login);
                response = await sendRequest(BASE_URL, invalidLoginData.payload, tokenBeforeLogin);
            });

            it('should return code 400', () => {
                codeAssertion(response.data.code, invalidLoginData.code)
            });

            it(`should return message ${invalidLoginData.message}`, () => {
                messageAssertion(response.data.message, invalidLoginData.message)
            });

            it(`should return have detail message "${invalidLoginData.details.message}"`, () => {
                expect(response.data.details.message).to.equal(invalidLoginData.details.message);
            });
        });
    });

}