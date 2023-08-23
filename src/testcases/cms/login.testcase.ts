import {nullValues,booleanValues,HTMLValues}from '../../testcases/general.testcase';

function generateRandomString(length: number): string {
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
      result += alphanumericChars.charAt(randomIndex);
    }
  
    return result;
  }
  
  const randomString = generateRandomString(6);

const endpoint = `${process.env.BASE_URL}/users-management/v3/auth/login`

const loginValid = {
    loginData : {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    },
    testcase: 'Verify user can login with valid data',
    message: 'Your Request Has Been Processed'
};

const loginInvalid = {
    loginData: {
        username: randomString,
        password: randomString
    },
    testcase: 'Verify user cant login with invalid data',
    message:  'NIK / Email / Password Salah'
};

const loginInvalid3times = {
    loginData: {
        username: randomString,
        password: randomString
    },
    testcase: 'Verify user can see error message whe login with invalid data 3 Times',
    message:  'Siahkan Coba Lagi Dalam 30 Detik',
    errorDetails: "Anda telah 3 kali salah memasukkan NIK/ Email / Password. Silakan coba lagi setelah 31 detik."
};

const loginEmptyField = {
    loginData: {
        username: "",
        password: ""
    },
    testcase: 'Verify user cant login with empty field',
    message:  'Failed to validate request data',
    errorDetails: "NIK/Password tidak sesuai."
};

const loginNULLValue = {
    loginData: {
        username: nullValues,
        password: nullValues
    },
    testcase: 'Verify user cant login with null values',
    message:  'Failed to validate request data',
    errorDetails: "NIK/Password tidak sesuai."
};

const loginSQLInject = {
    loginData:{
        username: "' OR '1'='1",
        password: "' OR '1'='1"
    },
    testcase: 'Verify user cant login with SQL Injection data',
    message:  'NIK / Email / Password Salah'
};

const loginBooleanValues = {
    loginData:{
        username: booleanValues,
        password: booleanValues
    },
    testcase: 'Verify user cant login with boolean values',
    message:  'Failed to validate request data',
    errorDetails: "NIK/Password tidak sesuai."
};

const loginHTMLValues = {
    loginData:{
        username: HTMLValues,
        password: HTMLValues
    },
    testcase: 'Verify user cant login with HTML values',
    message:  'NIK / Email / Password Salah'
};

// Export the objects
export { 
    endpoint,
    loginValid, 
    loginInvalid, 
    loginInvalid3times, 
    loginEmptyField, 
    loginNULLValue,
    loginSQLInject,
    loginBooleanValues,
    loginHTMLValues
};
