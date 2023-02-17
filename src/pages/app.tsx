import { Navbar } from 'components/index';
import { QuestionSimilarity } from './main/components';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <QuestionSimilarity />
      </main>
    </>
  );
}

export default App;
