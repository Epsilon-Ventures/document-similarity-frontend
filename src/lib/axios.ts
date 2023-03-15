import axios from 'axios';
import { PayloadModel } from 'pages/models';

const postData = (url: string, data: FormData | PayloadModel) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios.post(url, data);

export const getData = (url: string) => axios.get(url);

export default postData;
