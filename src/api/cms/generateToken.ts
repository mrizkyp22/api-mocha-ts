import axios from 'axios';
import { endpoint,generateTokenData } from '../../testcases/cms/generateToken.testcase';

export async function generateToken() {

  const response = await axios.post(endpoint,generateTokenData.payload);
  if (response.status === 200) {
    return response;
  } else {
    throw new Error('Token generation failed');
  }
}