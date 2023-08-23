import axios from 'axios';

export async function createTokenExt(endpoint:any ,accessToken: any, payload:any) {

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
