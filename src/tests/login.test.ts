import 'mocha';
import { expect } from 'chai';
import { login } from '../api/login';
import {
  loginInvalid,
  loginValid,
  loginInvalid3times,
  loginEmptyField
} from '../data/login.data';

export function loginTestRunner() {
  describe('API LOGIN Test Suite', () => {
    describe('Positive Cases', () => {
      it(loginValid.testcase, async () => {
        const response = await login(loginValid.loginData);

        expect(response.data).to.have.property('code', 200);
        expect(response.data).to.have.property('message', loginValid.message);
        expect(response.data.data).to.have.property('accessToken').that.is.a('string');
      });
    });

    describe('Negative Cases', () => {
      it(loginInvalid.testcase, async () => {
        const response = await login(loginInvalid.loginData);
        expect(response.data).to.have.property('code', 400);
        expect(response.data).to.have.property('message', loginInvalid.message);
        expect(response.data).to.not.have.property('data');
      });

      it(loginInvalid3times.testcase, async () => {
        let response;
        for (let i = 0; i < 3; i++) {
          response = await login(loginInvalid.loginData);
        }
        expect(response.data).to.have.property('code', 400);
        expect(response.data).to.have.property('message', loginInvalid3times.message);
        expect(response.data.details).to.have.property('message', loginInvalid3times.errorDetails);
      });

      it(loginEmptyField.testcase, async () => {
        const response = await login(loginEmptyField.loginData);
        expect(response.data).to.have.property('code', 400);
        expect(response.data).to.have.property('message', loginEmptyField.message);
        expect(response.data.details).to.have.property('message', loginEmptyField.errorDetails);
      });
    });
  });
}
