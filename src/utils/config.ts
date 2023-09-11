let savedResponse: string | null = null;

export function saveToken(response: string): void {
    savedResponse = response;
  }
  
  export function getToken(): string | null {
    return savedResponse;
  }