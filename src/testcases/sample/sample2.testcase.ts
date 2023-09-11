import { generateRandomString } from "../../utils/randomInput";

export class LoginTestCase {

    static path = '/users-management/v3/auth/login';

    static validData = {
        testcase: 'Verify user can login with valid data',
        method: 'POST',
        payload: {
            body:{
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            }
        },
        code: 200,
        message: 'Your Request Has Been Processed',
        metaAssertion: 
        {
          data:['accessToken','role','jobTitle','nik']
        }
      };
      
      static invalidData = {
        testcase: 'Verify user cannot login with invalid data',
        method: 'POST',
        payload: {
          body:{
            username: generateRandomString(6),
            password: generateRandomString(6)
          }
        },
        code: 400,
        message: 'NIK / Email / Password Salah',
        details: {
          message: "NIK / Email / Password yang anda masukan salah. <br />Silakan coba lagi atau cek masa kedaluwarsa password anda di Portal Telkom"
        }
      };
}
