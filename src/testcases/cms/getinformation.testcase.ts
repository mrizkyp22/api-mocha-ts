const pathEndpoint = '/apm/v1/approver/information`'
const endpoint = `${process.env.BASE_URL}${pathEndpoint}`

const getInformationNoAuth = {
    testcase: 'Verify user can see invalid authorization message and Information data is not appears',
    message:  'Access Token Expired or in Invalid Format',
    errorDetails: "User tidak terotorisasi!",
};

const getInformationSuccess = {
    testcase: 'Verify user can see information data',
    message:  'Success!',
};

// Export the objects
export { endpoint,pathEndpoint,getInformationNoAuth,getInformationSuccess };