export const BASEURl = (path:any) =>{
    return process.env.BASE_URL+path
}

export const endPoint = {
    login: '/users-management/v3/auth/login',
    generateToken: '/users-management/v3/auth/generatetoken',
    approverList: '/apm/v1/approver'
}


let savedResponse: string | null = null;

export function saveToken(response: string): void {
    savedResponse = response;
  }
  
  export function getToken(): string | null {
    return savedResponse;
  }