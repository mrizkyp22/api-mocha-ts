import axios from 'axios';
import { generateTokenData } from '../testcases/generateToken.testcase';

export async function generateToken() {

  const response = await axios.post(process.env.BASE_URL + '/users-management/v3/auth/generatetoken',generateTokenData);
  if (response.status === 200) {
    return response;
  } else {
    throw new Error('Token generation failed');
  }
}