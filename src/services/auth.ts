import type { AxiosInstance } from 'axios';

export function AuthService(httpClient: AxiosInstance) {
  async function register({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const response = await httpClient.post('/auth/register', {
      name,
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
    register,
  };
}
