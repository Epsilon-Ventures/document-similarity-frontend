import { Navbar } from 'components/molecules';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './about';
import { FileResponse } from './file-response';
import { FileUpload } from './file-upload';
import { QuestionSimilarity } from './main/components';
import TwoFileUpload from './twoFileUpload';
import { TwoFileResponse } from './two-file-response';
import { TopTwoQuestion } from './top-two-question';
import { MultiQuestionUpload } from './multi-question-upload';
import { TopTwoQuestionResponse } from './top-two-question-response';

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<QuestionSimilarity />} />
          <Route path="/file-upload" element={<FileUpload />} />
          <Route path="/file-response" element={<FileResponse />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/two-file-upload" element={<TwoFileUpload />} />
          <Route path="/two-file-response" element={<TwoFileResponse />} />
          <Route path="/top-two-question" element={<TopTwoQuestion />} />
          <Route
            path="/question-paper-upload"
            element={<MultiQuestionUpload />}
          />
          <Route
            path="/top-two-question-response"
            element={<TopTwoQuestionResponse />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
