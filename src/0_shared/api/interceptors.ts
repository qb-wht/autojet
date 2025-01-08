import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Request
export const requestSuccessInterceptor = async (
  clientConfig: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const clientConfigCopy = clientConfig;

  return clientConfigCopy;
};

export const requestErrorInterceptor = (error: unknown) => {
  return Promise.reject(error);
};

// Response
export const responseSuccessInterceptor = async (response: AxiosResponse): Promise<AxiosResponse> => response;

export const responseErrorInterceptor = (e: AxiosError): Promise<AxiosResponse> => {
  throw e;
};
