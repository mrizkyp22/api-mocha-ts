// login.ts
import axios from 'axios';

export async function getInformation(accessToken:any) {

  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/apm/v1/approver/information`,
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
