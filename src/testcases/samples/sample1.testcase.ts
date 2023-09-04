const testCasesData = {
  testcase: "Verify system can generate a token for the authentication API before login",
  path: '/users-management/v3/auth/generatetoken',
  method: 'POST',
  payload: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  },
  code: 200,
  message: 'Your Request Has Been Processed',
  metaAssertion: ['accessToken']
};

const testCasesData3 = {
  testcase:"Verify user can get list approver with basedon pagination",
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

export { testCasesData, testCasesData3 };