import axios from 'axios';
import {
  requestErrorInterceptor,
  requestSuccessInterceptor,
  responseErrorInterceptor,
  responseSuccessInterceptor,
} from './interceptors';

export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});

api.interceptors.request.use(requestSuccessInterceptor, requestErrorInterceptor);
api.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);
