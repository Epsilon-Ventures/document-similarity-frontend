import { TopTwoQuestionModel } from 'pages/models';
import { postData, getData as getQuestion } from '../lib';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'localhost:8000';

interface TwoFile {
  file1: File;
  file2: File;
}

const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = postData(`${BASE_URL}/api/file-upload/`, formData);
  return (await response).data;
};

export const checkTwoFile = async (payload: TopTwoQuestionModel) => {
  const formData = new FormData();
  formData.append('file', payload.file);
  formData.append('subject', payload.subject);

  const response = postData(`${BASE_URL}/api/top-two-file/`, formData);
  return (await response).data;
};

export const getFileQuestions = async () => {
  const response = getQuestion(`${BASE_URL}/api/file-upload/`);
  return (await response).data;
};

export const uploadTwoFile = async (files: TwoFile) => {
  const formData = new FormData();
  formData.append('file1', files.file1);
  formData.append('file2', files.file2);
  const response = postData(`${BASE_URL}/api/two-file-upload/`, formData);
  return (await response).data;
};

export default uploadFile;
