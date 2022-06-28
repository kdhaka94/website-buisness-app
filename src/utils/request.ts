import { toast } from 'react-toastify';
import { SERVER_URL, TOKEN } from './constants';

interface IProps {
  uri: string;
  requestMethod?: string;
  body?: any;
}

export const request = async ({
  uri,
  requestMethod = 'POST',
  body = {},
}: IProps) => {
  try {
    const token = localStorage.getItem(TOKEN) ?? '';
    const options = {
      method: requestMethod,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const url = SERVER_URL + uri;
    const data = await fetch(url, options);
    const response = await data.json();
    console.log({ response });
    if (response.error) {
      toast.error(response.message);
    }
    return response;
  } catch (error: any) {
    console.log({ error });
    toast.error(error.message);
    throw new Error(error.message);
  }
};
