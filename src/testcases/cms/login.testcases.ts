import { endPoint } from "../../utils/config"

export const loginValidData = {
    testcase: 'Verify user can login with valid data',
    method: 'POST',
    path: endPoint.login,
    payload: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    },
    code: 200,

    message: 'Your Request Has Been Processed',
    metaAssertion: 'accessToken',
  }