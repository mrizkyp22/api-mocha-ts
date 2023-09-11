import { getRequest, sendRequest } from '../utils/apiHelpers';
import { codeAssertion, messageAssertion, fieldAssertion, valueFieldAssertion } from '../utils/assertionHelpers';
import { saveToken, getToken } from '../utils/config';
import { expect } from 'chai';

export class TestHelpers {
  static async post(endPoints:any, data:any) {
    context(data.testcase, () => {
      let response:any;

      before(async () => {
        const BASE_URL = process.env.BASE_URL + endPoints;
        const token = getToken();
        response = await sendRequest(BASE_URL, token, data.payload);

        if (response.data.data?.accessToken) {
          saveToken(response.data.data.accessToken);
        }
      });

      it(`should return code ${data.code}`, () => {
        codeAssertion(response.data.code, data.code);
      });

      it(`should return message ${data.message}`, () => {
        messageAssertion(response.data.message, data.message);
      });

    if (data.metaAssertion) {
        for (const key in data.metaAssertion) {
          if (data.metaAssertion.hasOwnProperty(key)) {
            const fields = data.metaAssertion[key];
      
            fields.forEach((field:any) => {
              it(`should have field "${field}" in "${key}"`, () => {
                fieldAssertion(response.data[key], field);
              });
            });
          }
        }
      }

      if (data.details?.message) {
        it(`should have detail message "${data.details.message}"`, () => {
          expect(response.data.details.message).to.equal(data.details.message);
        });
      }

      // Call the conditional assertion function if provided
      if (data.conditionalAssertion) {
        data.conditionalAssertion();
      }
    });
  }

  static async get(endPoints:any, data:any) {
    context(data.testcase, () => {
      let response:any;

      before(async () => {
        const BASE_URL = process.env.BASE_URL + endPoints;
        const accessToken = getToken();
        response = await getRequest(BASE_URL, accessToken, data.payload);
      });

      it(`should return code ${data.code}`, () => {
        codeAssertion(response.data.code, data.code);
      });

      it(`should return message ${data.message}`, () => {
        messageAssertion(response.data.message, data.message);
      });

      if (data.metaAssertion) {
        for (const key in data.metaAssertion) {
          if (data.metaAssertion.hasOwnProperty(key)) {
            const fields = data.metaAssertion[key];
      
            fields.forEach((field:any) => {
              it(`should have field "${field}" in "${key}"`, () => {
                fieldAssertion(response.data[key], field);
              });
            });
          }
        }
      }

      if (data.responses) {
        for (const key in data.responses) {
          if (data.responses.hasOwnProperty(key)) {
            const fields = data.responses[key];
      
            fields.forEach((field:any) => {
              it(`should have value "${data.payload.params.search}" in "${key}"`, () => {
                valueFieldAssertion(response.data.data[0][key], field, data.payload.params.search)
              });
            });
          }
        }
      }

      if (data.details?.message) {
        it(`should have detail message "${data.details.message}"`, () => {
          expect(response.data.details.message).to.equal(data.details.message);
        });
      }

      // Call the conditional assertion function if provided
      if (data.conditionalAssertion) {
        data.conditionalAssertion();
      }
    });
  }
}
