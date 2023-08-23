const endpoint =  `${process.env.BASE_URL}/apm/v1/approver`

const queryListPageAndSize = {
    payload:{
        search: null,
        page: 1,
        size: 10,
        sortBy: null,
        sort: null,
        exclude: null
    },
    testcase:"Get List all Approver with query page 1 and size 10",
    message:"Success!"
}

const getListApproverWithoutAuth = {
    testcase:"Verify user can see invalid authorization message and list approver data is not appears",
    message:  'Access Token Expired or in Invalid Format',
    errorDetails: "User tidak terotorisasi!",
}

const queryListWithSQLInject = {
    payload: {
      search: "' OR '1'='1",
      page: 1,
      size: 10,
      sortBy: "' OR '1'='1",
      sort: "' OR '1'='1",
      exclude: "' OR '1'='1"
  },
    testcase:"Verify user cant get list approver when SQL Inject Inputted",
    message:"Success!"
  };

export {
    endpoint,
    queryListPageAndSize,
    queryListWithSQLInject,
    getListApproverWithoutAuth
};