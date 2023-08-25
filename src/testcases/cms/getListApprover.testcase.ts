import { schema_approver_list_200_search_not_found } from "../../schema/cms/getListApprover.schema"
const pathEndpoint =  '/apm/v1/approver'
const endpoints = `${process.env.BASE_URL}${pathEndpoint}`

const jsonStructAPI = {
    payload:{
        page: 1,
        size: 10,
    },
    testcase:"Verify the JSON structure on the API is appropriate ",
    schema: schema_approver_list_200_search_not_found
}

const queryListPageAndSize = {
    payload:{
        page: 2,
        size: 10,
    },
    testcase:"Get List all Approver with query page 1 and size 10",
    message:"Success!",
    sourceData: "HC EBIS"
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
    message:"Success!",
    sourceData: "HC EBIS"
  };

export {
    endpoints,
    pathEndpoint,
    jsonStructAPI,
    queryListPageAndSize,
    queryListWithSQLInject,
    getListApproverWithoutAuth
};