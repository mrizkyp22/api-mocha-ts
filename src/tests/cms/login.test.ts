import 'mocha';
import { expect } from 'chai';
import { login } from '../../api/cms/login';
import {
  endpoint,
  loginInvalid,
  loginValid,
  loginInvalid3times,
  loginEmptyField,
  loginSQLInject
} from '../../testcases/cms/login.testcase';

export function loginTestRunner() {
  describe('API LOGIN Test Suite', () => {
    describe('Positive Cases', () => {
      it(loginValid.testcase, async () => {
        const response = await login(endpoint,loginValid.loginData);

        expect(response.data).to.have.property('code', 200);
        expect(response.data).to.have.property('message', loginValid.message);
        expect(response.data.data).to.have.property('accessToken').that.is.a('string');
      });
    });

    describe('Negative Cases', () => {
      it(loginInvalid.testcase, async () => {
        const response = await login(endpoint, loginInvalid.loginData);
        expect(response.data).to.have.property('code', 400);
        expect(response.data).to.have.property('message', loginInvalid.message);
        expect(response.data).to.not.have.property('data');
      });

      it(loginInvalid3times.testcase, async () => {
        let response;
        for (let i = 0; i < 3; i++) {
          response = await login(endpoint,loginInvalid.loginData);
        }
        expect(response.data).to.have.property('code', 400);
        expect(response.data).to.have.property('message', loginInvalid3times.message);
        expect(response.data.details).to.have.property('message', loginInvalid3times.errorDetails);
      });

      it(loginEmptyField.testcase, async () => {
        const response = await login(endpoint,loginEmptyField.loginData);
        expect(response.data).to.have.property('code', 400);
        expect(response.data).to.have.property('message', loginEmptyField.message);
        expect(response.data.details).to.have.property('message', loginEmptyField.errorDetails);
      });
      
      it(loginSQLInject.testcase, async () => {
        const response = await login(endpoint,loginSQLInject.loginData);
        expect(response.data).to.have.property('code', 400);
        expect(response.data).to.have.property('message', loginSQLInject.message);
        expect(response.data).to.not.have.property('data');
      });
    });
  });
}
