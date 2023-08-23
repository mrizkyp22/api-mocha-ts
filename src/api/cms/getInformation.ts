import axios from 'axios';
import { endpoint } from '../../testcases/cms/getinformation.testcase';

export async function getInformation(accessToken:any) {

  try {
    const response = await axios.get(
      endpoint,
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
