import { Navbar } from 'components/molecules';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './about';
import { FileResponse } from './file-response';
import { FileUpload } from './file-upload';
import { QuestionSimilarity } from './main/components';

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
        </Routes>
      </main>
    </Router>
  );
}

export default App;
