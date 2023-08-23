import 'mocha';
import { expect, assert } from 'chai';
import { generateToken } from '../../api/cms/generateToken';
import Ajv from 'ajv';
import { generateToken_schema } from '../../schema/cms/generateToken.schema';
import { generateTokenData } from '../../testcases/cms/generateToken.testcase';

export function generateTokenTestRunner() {
  describe('API Generate Token Before Login', () => {
    describe('Positive Cases', () => {
      let response: any;

      before(async () => {
        response = await generateToken();
      });

      it(generateTokenData.testcase,async () => {
        expect(response.data.code).to.equal(200, 'Expected status code to be 200');
        expect(response.data.message).to.equal('Your Request Has Been Processed', 'Unexpected message');
        assert.containsAllKeys(response.data.data, ['accessToken'], 'accessToken field missing');
        const ajv = new Ajv();
        const validate = ajv.compile(generateToken_schema);

        const isValid = validate(response.data);
        expect(isValid).to.be.true;
      });
    })
  });
}