import { endPoint } from "../../utils/config"

export const listApproverPagination = {
    testcase:"Verify user can get list approver with based on pagination",
    path: endPoint.approverList,
    method: 'GET',
    payload:{
        page: 2,
        size: 10,
    },
    code: 200,
    message:"Success!",
    sourceData: "HC EBIS"
  }