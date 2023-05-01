export interface PayloadModel {
  question: string;
  subject: string;
}

export interface TopTwoQuestionModel {
  subject: string;
  file: File;
}

export interface MultiQuestionUploadProps {
  question: string;
  mark: string;
  id: number;
}

export interface PaperMetaDataModel {
  subject: string;
  year: string;
  sem: string;
}
export interface QuestionPaperModel extends PaperMetaDataModel {
  payload: MultiQuestionUploadProps[];
}
