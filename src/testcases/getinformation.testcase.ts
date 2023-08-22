const getInformationNoAuth = {
    testcase: 'When user Get Information with invalid authorization',
    message:  'Access Token Expired or in Invalid Format',
    errorDetails: "User tidak terotorisasi!",
};

const getInformationSuccess = {
    testcase: 'When user Get Information success',
    message:  'Success!',
};

// Export the objects
export { getInformationNoAuth,getInformationSuccess };