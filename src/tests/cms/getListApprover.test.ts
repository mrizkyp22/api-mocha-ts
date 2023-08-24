import 'mocha';
import { expect } from 'chai';
import { endpoint,loginValid } from '../../testcases/cms/login.testcase';
import { login } from '../../api/cms/login';
import { getListApprover } from '../../api/cms/getListApprover';
import {
    queryListPageAndSize,
    getListApproverWithoutAuth,
    queryListWithSQLInject
} from '../../testcases/cms/getListApprover.testcase';

export function getListApproverRunner() {
    describe('API Get Information Test Suite', () => {
        let accessToken: any; // Declare a variable to store the access token
        let params: Record<string, any>

        // Run before each test case in this suite
        before(async () => {
            const loginResponse = await login(endpoint, loginValid.loginData);
            accessToken = loginResponse.data.data.accessToken; // Store the access token
        });

        describe('Positive Cases', () => {
            context(queryListPageAndSize.testcase,() => {
                let response:any;
                before(async() => {
                    response = await getListApprover(accessToken,
                        {
                            ...queryListPageAndSize.payload
                        });
                });
                it('should return 200', () => {
                    expect(response.data).to.have.property('code', 200);
                });
                it(`should return message ${queryListPageAndSize.message}`,() => {
                    expect(response.data).to.have.property('message', queryListPageAndSize.message);
                });
                it(`should return meta page. value is ${queryListPageAndSize.payload.page}`,() => {
                    expect(response.data.meta).to.have.property('page', queryListPageAndSize.payload.page);
                })
                it(`should return meta size. value is ${queryListPageAndSize.payload.size}`,() => {
                    expect(response.data.meta).to.have.property('size', queryListPageAndSize.payload.size);
                });
                it(`should return meta data Source. value is ${queryListPageAndSize.payload}`,() => {
                    expect(response.data.meta).to.have.property('sourceData', queryListPageAndSize.sourceData);
                });
            });
        });

        describe('Negative Cases', () => {
            context(getListApproverWithoutAuth.testcase,() => {
                let response:any;

                before(async() => {
                    response = await getListApprover("accessToken");
                });
                it('should return 401', () => {
                    expect(response.data).to.have.property('code', 401);
                });
                it(`should return message ${getListApproverWithoutAuth.message}`, () => {
                    expect(response.data).to.have.property('message', getListApproverWithoutAuth.message);
                });
                it(`should return meta message ${getListApproverWithoutAuth.errorDetails}`, () => {
                    expect(response.data.meta).to.have.property('message', getListApproverWithoutAuth.errorDetails);
                });
            });
        //     it(queryListWithSQLInject.testcase, async () => {
        //         const response = await getListApprover(accessToken,
        //             {
        //                 ...queryListWithSQLInject.payload
        //             }
        //         );

        //         expect(response.data).to.have.property('code', 200);
        //         expect(response.data).to.have.property('message', queryListWithSQLInject.message);
        //         expect(response.data.meta).to.have.property('page', queryListWithSQLInject.payload.page);
        //         expect(response.data.meta).to.have.property('size', queryListWithSQLInject.payload.size);
        //     });
        });
    });
}