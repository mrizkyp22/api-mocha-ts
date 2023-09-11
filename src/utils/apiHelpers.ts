import axios from 'axios';

export async function sendRequest(
  endpoint: any,
  accessToken: any | null = null,
  payload: any | null = null,
) {
  try {
    let params;
    if (payload?.params) {
      params = payload.params;
    }
    
    const response = await axios.post(
      endpoint,
      payload.body,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        params: params,
      }
    );

    return response;
  } catch (error: any) {
    return error.response;
  }
}

export async function getRequest(
  endpoint: any,
  accessToken: any | null = null,
  payload: any | null = null
) {
  try {
    const response = await axios.get(
      endpoint,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        params: payload.params
      }
    );

    return response;
  } catch (error: any) {
    return error.response;
  }
}