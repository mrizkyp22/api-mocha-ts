export const listApproverPagination = {
    testcase:"Verify user can get list approver with based on pagination",
    path: '/apm/v1/approver',
    method: 'GET',
    payload:{
        page: 2,
        size: 10,
    },
    code: 200,
    message:"Success!",
    sourceData: "HC EBIS"
  }