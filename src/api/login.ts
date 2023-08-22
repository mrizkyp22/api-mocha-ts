// login.ts
import axios from 'axios';
import { generateToken } from './generateToken';

export async function login(data: any) {
  const tokenResponse = await generateToken();
  const accessToken = tokenResponse.data.data.accessToken;

  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/users-management/v3/auth/login`,
      data,
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
