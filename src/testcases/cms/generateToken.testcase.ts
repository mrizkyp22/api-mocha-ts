const pathEndpoint = '/users-management/v3/auth/generatetoken'
const endpoint = `${process.env.BASE_URL}${pathEndpoint}`

const generateTokenData = {
  payload: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  },
  testcase: "Verify system can generate a token for the authentication API before login"

};

export { endpoint,pathEndpoint, generateTokenData };