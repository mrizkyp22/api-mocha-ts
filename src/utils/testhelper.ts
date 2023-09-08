import { getRequest, sendRequest } from '../utils/apiHelpers';
import { codeAssertion, messageAssertion, fieldAssertion, valueFieldAssertion } from '../utils/assertionHelpers';
import { BASEURl, saveToken, getToken } from '../utils/config';
import { expect } from 'chai';

export class TestHelpers {
    static post(endPoints: any, data: any | null = null, conditionalAssertion: (() => void) | null = null) {

        context(data.testcase, () => {
            let response: any;

            before(async () => {
                const BASE_URL = BASEURl(endPoints);
                const token = getToken()
                response = await sendRequest(BASE_URL, data.payload, token);
                const accessToken = response.data.data?.accessToken;
                if (accessToken) {
                    saveToken(accessToken);
                }
            });

            it(`should return code ${data.code}`, () => {
                codeAssertion(response.data.code, data.code)
            });

            it(`should return message ${data.message}`, () => {
                messageAssertion(response.data.message, data.message)
            });

            if (data.metaAssertion && data.metaAssertion.length > 0) {
                for (const field of data.metaAssertion) {
                    it(`should have field "${field}"`, () => {
                        fieldAssertion(response.data.data, field);
                    });
                }
            }

            if (data.details?.message) {
                it(`should have detail message "${data.details.message}"`, () => {
                    expect(response.data.details.message).to.equal(data.details.message);
                });
            }

            // Call the conditional assertion function if provided
            if (conditionalAssertion) {
                conditionalAssertion();
            }

        });
    }
    static get(endPoints: any, data: any, conditionalAssertion: (() => void) | null = null) {

        context(data.testcase, () => {
            let response: any;

            before(async () => {
                const BASE_URL = BASEURl(endPoints);
                const accessToken = getToken()
                response = await getRequest(BASE_URL, accessToken, data.payload);
            });

            it(`should return code ${data.code}`, () => {
                codeAssertion(response.data.code, data.code)
            });

            it(`should return message ${data.message}`, () => {
                messageAssertion(response.data.message, data.message)
            });

            if (data.metaAssertion && data.metaAssertion.length > 0) {
                for (const field of data.metaAssertion) {
                    it(`should have field "${field}"`, () => {
                        fieldAssertion(response.data.data, field);
                    });
                }
            }

            if (data.details?.message) {
                it(`should have detail message "${data.details.message}"`, () => {
                    expect(response.data.details.message).to.equal(data.details.message);
                });
            }

            // Call the conditional assertion function if provided
            if (conditionalAssertion) {
                conditionalAssertion();
            }

        });
    }
}