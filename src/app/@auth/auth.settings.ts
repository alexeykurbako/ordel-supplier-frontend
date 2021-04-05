import { NbAuthOAuth2JWTToken, NbPasswordAuthStrategy } from '@nebular/auth';
import { environment } from '../../environments/environment';

export const authOptions = {
  strategies: [
    NbPasswordAuthStrategy.setup({
      name: 'email',
      baseEndpoint: environment.apiUrl,
      token: {
        class: NbAuthOAuth2JWTToken,
        key: 'token',
      },
      login: {
        endpoint: `/${environment.type}/auth/login`,
        method: 'post',
      },
      register: {
        endpoint: `/${environment.type}/auth/sign-up`,
        method: 'post',
      },
      logout: {
        endpoint: `/${environment.type}/auth/sign-out`,
        method: 'post',
      },
      requestPass: {
        endpoint: `/${environment.type}/auth/request-pass`,
        method: 'post',
      },
      resetPass: {
        endpoint: `/${environment.type}/auth/reset-pass`,
        method: 'post',
      },
      refreshToken: {
        endpoint: `/${environment.type}/auth/refresh-token`,
        method: 'post',
      },
    }),
  ],
  forms: {
    validation: {
      fullName: {
        required: true,
        minLength: 6,
        maxLength: 20,
      },
    },
  },
};
