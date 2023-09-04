import 'mocha';
import { expect } from 'chai';
import { schemaChecker } from './schemaChecker';

export function schemaAssertion(response: any, schema: any) {
    schemaChecker(response, schema);
}

export function codeAssertion(response: any, code: any) {
    expect(response).to.equal(code, 'Expected status code to be 200');
}

export function messageAssertion(response: any, message: any) {
    expect(response).to.equal(message, 'Unexpected message');
}

export function fieldAssertion(response: any, meta: any) {
    expect(response).to.have.ownProperty(meta);
}

export function valueFieldAssertion(response: any, field:any, value: any) {
    expect(response).to.have.property(field, value);
}
