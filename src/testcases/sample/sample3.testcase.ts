export class getListApproverTestcase {
    static path = "/apm/v1/approver"

    static pagination = {
        testcase: "Verify user can get list approver with based on pagination",
        method: 'GET',
        payload: {
            params: {
                page: 2,
                size: 10,
            }
        },
        code: 200,
        message: "Success!",
        sourceData: "HC EBIS"
    }

    static search = {
        testcase: "Verify user can get list approver with based on search",
        method: 'GET',
        payload: {
            params: {
                search: "955845",
                page: 1,
                size: 10,
            }
        },
        code: 200,
        responses: {
            user: ['nik']
        },
        message: "Success!",
        sourceData: "HC EBIS",
        metaAssertion: {
            meta: ['totalData']
        }
    }
}