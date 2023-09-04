import axios from 'axios';

export async function sendRequest(
  endpoint: any,
  payload: any | null = null,
  accessToken: any | null = null) {
  try {
    const response = await axios.post(
      endpoint,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
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
  params: any | null = null
) {

  try {
    const response = await axios.get(
      endpoint,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        params: params
      }
    );

    return response;
  } catch (error: any) {
    return error.response;
  }
}