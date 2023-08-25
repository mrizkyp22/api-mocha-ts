import Ajv from 'ajv';
import { expect } from 'chai';

export const schemaChecker = (schema:any, response:any) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const isValid = validate(response);
    expect(isValid).to.be.true;
}