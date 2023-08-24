import 'mocha';
import { expect } from 'chai';
import { endpoint, loginValid } from '../../testcases/cms/login.testcase';
import { login } from '../../api/cms/login';
import { getInformation } from '../../api/cms/getInformation';
import { pathEndpoint,getInformationNoAuth,getInformationSuccess } from '../../testcases/cms/getinformation.testcase';

export function getInformationRunner() {
    describe(pathEndpoint, () => {
        let accessToken: any ; // Declare a variable to store the access token
    
        // Run before each test case in this suite
        before(async () => {
            const loginResponse = await login(endpoint,loginValid.loginData);
            accessToken = loginResponse.data.data.accessToken; // Store the access token
        });
    
        describe('Positive Cases', () => {
            it(getInformationSuccess.testcase, async () => {
                const response = await getInformation(accessToken);

                expect(response.data).to.have.property('code', 200);
                expect(response.data).to.have.property('message', getInformationSuccess.message);
                expect(response.data.data).to.have.property('message', "Klik tombol di samping untuk melihat definisi approver personal & workgroup");
                expect(response.data.data.detail).to.have.property('title')
                expect(response.data.data.detail).to.have.property('description')
            });
        });
    
        describe('Negative Cases', () => {
            it(getInformationNoAuth.testcase, async () => {
                const response = await getInformation("accessToken");

                expect(response.data).to.have.property('code', 401);
                expect(response.data).to.have.property('message', getInformationNoAuth.message);
                expect(response.data.meta).to.have.property('message', getInformationNoAuth.errorDetails);
            });
        });
    });
}