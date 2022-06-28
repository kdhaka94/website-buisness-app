export const SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3300'
    : 'https://buisness-app-server-production.up.railway.app';

export const TOKEN = 'access_token';
