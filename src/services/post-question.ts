import { PayloadModel } from 'pages/models';
import { postData } from '../lib';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'localhost:8000';

export const postQuestionForSimilarity = async (payload: PayloadModel) => {
  const response = postData(`${BASE_URL}/api/database-connection/`, payload);
  return (await response).data;
};

export const addQuestionToDatabase = async (payload: PayloadModel) => {
  const response = postData(`${BASE_URL}/api/add-question/`, { ...payload });
  return (await response).data;
};
