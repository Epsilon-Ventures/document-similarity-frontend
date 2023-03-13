import { postData } from '../lib';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'localhost:8000';

const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = postData(`${BASE_URL}/api/file-upload/`, formData);
  return (await response).data;
};

export default uploadFile;
