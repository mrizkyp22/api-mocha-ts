import { getRequest } from '../../utils/apiHelpers';
import { codeAssertion, messageAssertion, fieldAssertion, valueFieldAssertion } from '../../utils/assertionHelpers';
import { BASEURl, getToken } from '../../utils/config';
import { listApproverPagination } from '../../testcases/cms/listApprover.testcase';

export function listApproverRunner() {
    describe(`PATH: ${listApproverPagination.path}`, () => {

        context(listApproverPagination.testcase, () => {
            let response: any;

            before(async () => {
                const BASE_URL = BASEURl(listApproverPagination.path);
                const accessToken = getToken()
                response = await getRequest(BASE_URL, accessToken, listApproverPagination.payload);
            });

            it('should return code 200', () => {
                codeAssertion(response.data.code, listApproverPagination.code)
            });

            it(`should return message ${listApproverPagination.message}`, () => {
                messageAssertion(response.data.message, listApproverPagination.message)
            });

            it(`should return meta page. value is ${listApproverPagination.payload.page}`, () => {
                valueFieldAssertion(response.data.meta, 'page', listApproverPagination.payload.page)
            })
            it(`should return meta size. value is ${listApproverPagination.payload.size}`, () => {
                valueFieldAssertion(response.data.meta, 'size', listApproverPagination.payload.size)
            });
            it(`should return meta data Source. value is ${listApproverPagination.sourceData}`, () => {
                valueFieldAssertion(response.data.meta, 'sourceData', listApproverPagination.sourceData)
            });
        });
    });
}