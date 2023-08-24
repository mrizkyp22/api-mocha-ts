import 'mocha';
import { expect, assert } from 'chai';
import { createTokenExt } from '../../api/external/createTokenExt';
import { login } from '../../api/cms/login';
import { endpoint, loginValid } from '../../testcases/cms/login.testcase';
import {
    endpoints,
    pathEndpoint,
    createTokenExtDataValid,
    createTokenExtEmptyField,
    createTokenExtSameData,
    createTokenAddSpace
} from '../../testcases/external/createTokenExt.testcase';

export function createTokenExtTestRunner() {
    describe(pathEndpoint, () => {
        let accessToken: any;
        let payload: any;
        let token: any;

        before(async () => {
            const loginResponse = await login(endpoint, loginValid.loginData);
            accessToken = loginResponse.data.data.accessToken; // Store the access token
        });
        describe('Positive Cases', () => {

            context(createTokenExtDataValid.testcase, () => {

                let response: any;
                before(async () => {
                    response = await createTokenExt(endpoints, accessToken, createTokenExtDataValid.payload);
                    payload = response.config.data
                    token = response.data.data.accessToken
                });
                it('should return 201', () => {
                    expect(response.data.code).to.equal(201);
                    expect(response.data.message).to.equal(createTokenExtDataValid.message);
                    expect(response.data.data).to.have.property('accessToken').that.is.a('string');
                });
                it(`should return message "${createTokenExtDataValid.message}"`, () => {
                    expect(response.data).to.have.property('message', createTokenExtDataValid.message);
                });

                it('should have field "accessToken"', async () => {
                    expect(response.data.data).to.have.property('accessToken').that.is.a('string');
                });
            });
        })

        describe('Negative Cases', () => {

            context(createTokenExtEmptyField.testcase,()=>{
                let response:any;
                before(async()=>{
                    response = await createTokenExt(endpoints,accessToken, createTokenExtEmptyField.payload);
                })
                it('should return 400', async () => {
                    expect(response.data.code).to.equal(400);
                });
                it(`should return message ${createTokenExtEmptyField.message}`, async () => {
                    expect(response.data.message).to.equal(createTokenExtEmptyField.message);
                });
            })

            context(createTokenExtSameData.testcase,()=>{
                let response:any;
                before(async()=>{
                    response = await createTokenExt(endpoints,accessToken,payload);
                })
                it('should return 400', async () => {
                    expect(response.data.code).to.equal(400);
                });
                it(`should return message ${createTokenExtSameData.message}`, async () => {
                    expect(response.data.message).to.equal(createTokenExtSameData.message);
                });
            })
        })
    });
}