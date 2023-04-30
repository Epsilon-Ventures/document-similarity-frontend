import { Navbar } from 'components/molecules';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './about';
import { FileResponse } from './file-response';
import { FileUpload } from './file-upload';
import { QuestionSimilarity } from './main/components';
import TwoFileUpload from './twoFileUpload';
import TwoFileResponse from './twoFileResponse';

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
        </Routes>
      </main>
    </Router>
  );
}

export default App;
