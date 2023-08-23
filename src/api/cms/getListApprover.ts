import axios from 'axios';
import { endpoint } from '../../testcases/cms/getListApprover.testcase';

export async function getListApprover(
    accessToken: any | null = null,
    params: any | null = null
) {

  try {
    const response = await axios.get(
     endpoint,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type":  "application/json"
        },
        params:params
      }
    );

    return response;
  } catch (error:any) {
    return  error.response ;
  }
}
