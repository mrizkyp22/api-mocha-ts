let path = '/users-management/v3/auth/login';

export const loginValidData = {
    testcase: 'Verify user can login with valid data',
    method: 'POST',
    path: path,
    payload: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    },
    code: 200,

    message: 'Your Request Has Been Processed',
    metaAssertion: 'accessToken',
  }