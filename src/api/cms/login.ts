import axios from 'axios';
import { generateToken } from './generateToken';

export async function login(endpoint:any, payload: any) {
  const tokenResponse = await generateToken();
  const accessToken = tokenResponse.data.data.accessToken;

  try {
    const response = await axios.post(
      endpoint,
      payload,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type":  "application/json"
        },
      }
    );

    return response;
  } catch (error:any) {
    return  error.response ;
  }
}
