function generateRandomString(length: number): string {
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
      result += alphanumericChars.charAt(randomIndex);
    }
  
    return result;
  }
  
  const randomString = generateRandomString(4);

const pathEndpoint = '/apm/v1/token'
const endpoints = `${process.env.BASE_URL}${pathEndpoint}`

const createTokenExtDataValid = {
    payload: {
        product: `automationCreate-${randomString}`,
        email: `emailQA.${randomString}@gmail.com`,
        module: ["QA"]
    },
    testcase:"Verify user can create token authorization from mytens amp cms",
    message:"create token succeed"
  };

  const createTokenExtEmptyField = {
    payload: {
        product: "",
        email: "",
        module: ["QA"]
    },
    testcase: "Verify user can't submit create access token when field is empty",
    message:"Invalid token request"
  };

  const createTokenExtSameData = {
    testcase:"Verify user cant create token when product already created",
    message:"Product already exist"
  };

  const createTokenAddSpace = {
    payload: {
      product: `automationCreate-${randomString} `,
      email: `emailQA.${randomString}@gmail.com`,
      module: ["QA"]
  },
    testcase:"Verify user cant create token when field has whitespace ",
    message:"Product already exist"
  };


  export { endpoints, pathEndpoint,createTokenExtDataValid, createTokenExtEmptyField,createTokenExtSameData, createTokenAddSpace };