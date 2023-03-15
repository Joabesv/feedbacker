import type { AxiosInstance } from 'axios';

export function AuthService(httpClient: AxiosInstance) {
  async function login({ email, password }: { email: string; password: string }) {
    const response = await httpClient.post('/auth/login', {
      email,
      password,
    });
    let errors = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }

    return {
      data: response.data,
      errors,
    };
  }

  return {
    login,
  };
}
