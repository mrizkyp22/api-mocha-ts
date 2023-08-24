import 'mocha';
import { expect, assert } from 'chai';
import { generateToken } from '../../api/cms/generateToken';
import Ajv from 'ajv';
import { generateToken_schema } from '../../schema/cms/generateToken.schema';
import { pathEndpoint, generateTokenData } from '../../testcases/cms/generateToken.testcase';

export function generateTokenTestRunner() {
  describe(pathEndpoint, () => {
    describe('Positive Cases', () => {
      let response: any;

      before(async () => {
        response = await generateToken();
      });

      context(generateTokenData.testcase, () => {
        it('should return code 200', async () => {
          expect(response.data.code).to.equal(200, 'Expected status code to be 200');
        });
        it('should return message "Your Request Has Been Processed"', async () => {
          expect(response.data.message).to.equal('Your Request Has Been Processed', 'Unexpected message');
        });
        it('should return have field "accessToken"', async () => {
          assert.containsAllKeys(response.data.data, ['accessToken'], 'accessToken field missing');
        });
        it('should return the same JSON structure as the contract"', async () => {
          const ajv = new Ajv();
          const validate = ajv.compile(generateToken_schema);

          const isValid = validate(response.data);
          expect(isValid).to.be.true;
        });
      });
    });
  });
}

