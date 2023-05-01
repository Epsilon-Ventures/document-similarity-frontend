/* eslint-disable @typescript-eslint/indent */
import axios from 'axios';
import { PayloadModel, QuestionPaperModel } from 'pages/models';

const postData = (
  url: string,
  data:
    | FormData
    | PayloadModel
    | { subject: string; file: FormData }
    | QuestionPaperModel,
) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios.post(url, data);

export const getData = (url: string) => axios.get(url);

export default postData;
