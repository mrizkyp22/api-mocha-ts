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
            it(queryListPageAndSize.testcase, async () => {
                const response = await getListApprover(accessToken,
                    {
                        ...queryListPageAndSize.payload
                    }
                );

                expect(response.data).to.have.property('code', 200);
                expect(response.data).to.have.property('message', queryListPageAndSize.message);
                expect(response.data.meta).to.have.property('page', queryListPageAndSize.payload.page);
                expect(response.data.meta).to.have.property('size', queryListPageAndSize.payload.size);
            });
        });

        describe('Negative Cases', () => {
            it(getListApproverWithoutAuth.testcase, async () => {
                const response = await getListApprover("accessToken");

                expect(response.data).to.have.property('code', 401);
                expect(response.data).to.have.property('message', getListApproverWithoutAuth.message);
                expect(response.data.meta).to.have.property('message', getListApproverWithoutAuth.errorDetails);
            });
            it(queryListWithSQLInject.testcase, async () => {
                const response = await getListApprover(accessToken,
                    {
                        ...queryListWithSQLInject.payload
                    }
                );

                expect(response.data).to.have.property('code', 200);
                expect(response.data).to.have.property('message', queryListWithSQLInject.message);
                expect(response.data.meta).to.have.property('page', queryListWithSQLInject.payload.page);
                expect(response.data.meta).to.have.property('size', queryListWithSQLInject.payload.size);
            });

        });
    });
}