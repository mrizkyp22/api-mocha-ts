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

const loginValid = {
    loginData : {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    },
    testcase: 'When user login with valid data',
    message: 'Your Request Has Been Processed'
};

const loginInvalid = {
    loginData: {
        username: randomString,
        password: randomString
    },
    testcase: 'When user login with invalid data once',
    message:  'NIK / Email / Password Salah'
};

const loginInvalid3times = {
    loginData: {
        username: randomString,
        password: randomString
    },
    testcase: 'When user login with invalid data 3 Times',
    message:  'Siahkan Coba Lagi Dalam 30 Detik',
    errorDetails: "Anda telah 3 kali salah memasukkan NIK/ Email / Password. Silakan coba lagi setelah 31 detik."
};

const loginEmptyField = {
    loginData: {
        username: "",
        password: ""
    },
    testcase: 'When user login with empty field',
    message:  'Failed to validate request data',
    errorDetails: "NIK/Password tidak sesuai."
};

const loginSQLInject = {
    loginData:{
        username: "' OR '1'='1",
        password: "' OR '1'='1"
    },
    testcase: 'When user login with SQL Injection data',
    message:  'NIK / Email / Password Salah'
};

// Export the objects
export { loginValid, loginInvalid, loginInvalid3times, loginEmptyField, loginSQLInject };
