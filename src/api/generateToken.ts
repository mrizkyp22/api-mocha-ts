import axios from 'axios';

export async function generateToken() {
    const data = {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    };
  
    const response = await axios.post(process.env.BASE_URL + '/users-management/v3/auth/generatetoken', data);
    if (response.status === 200) {
      return response;
    } else {
      throw new Error('Token generation failed');
    }
  }