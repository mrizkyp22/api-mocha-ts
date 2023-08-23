const endpoint = process.env.BASE_URL + '/users-management/v3/auth/generatetoken'

const generateTokenData = {
  payload: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  },
  testcase: "Verify system can generate a token for the authentication API before login"

};

export { endpoint, generateTokenData };