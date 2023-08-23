import 'mocha';
import { expect, assert } from 'chai';
import { createTokenExt } from '../../api/external/createTokenExt';
import { login } from '../../api/cms/login';
import { endpoint,loginValid } from '../../testcases/cms/login.testcase';
import { 
    endpoints,
    createTokenExtDataValid, 
    createTokenExtEmptyField, 
    createTokenExtSameData
} from '../../testcases/external/createTokenExt.testcase';

export function createTokenExtTestRunner() {
    describe('API Generate Token Before Login', () => {
        let accessToken: any;
        let payload: any;
        let token: any;

        before(async () => {
            const loginResponse = await login(endpoint,loginValid.loginData);
            accessToken = loginResponse.data.data.accessToken; // Store the access token
        });
        describe('Positive Cases', () => {

            it(createTokenExtDataValid.testcase, async () => {
                const response = await createTokenExt(endpoints,accessToken, createTokenExtDataValid.payload);
                payload = response.config.data
                token = response.data.data.accessToken
                expect(response.data.code).to.equal(201);
                expect(response.data.message).to.equal(createTokenExtDataValid.message);
                expect(response.data.data).to.have.property('accessToken').that.is.a('string');
            });
        })

        describe('Negative Cases', () => {

            it(createTokenExtEmptyField.testcase, async () => {
                const response = await createTokenExt(endpoints,accessToken, createTokenExtEmptyField.payload);
                expect(response.data.code).to.equal(400);
                expect(response.data.message).to.equal(createTokenExtEmptyField.message);
            });
            it(createTokenExtSameData.testcase, async () => {
                const response = await createTokenExt(endpoints,accessToken, payload);
                expect(response.data.code).to.equal(400);
                expect(response.data.message).to.equal(createTokenExtSameData.message);
            });
                it(createTokenExtSameData.testcase, async () => {
                const response = await createTokenExt(endpoints,accessToken, payload);
                expect(response.data.code).to.equal(400);
                expect(response.data.message).to.equal(createTokenExtSameData.message);
            });

        })
    });
}