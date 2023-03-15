import { Select } from 'components/atoms';
import { PayloadModel } from 'pages/models';
import { subject, year } from 'data/data.json';
import styles from './parameters.module.css';
import main from './index.module.css';

interface Props {
  setPayload: React.Dispatch<React.SetStateAction<PayloadModel>>;
}

function Parameters({ setPayload }: Props) {
  const { parameters } = styles;
  const { shadow } = main;
  return (
    <div className={`flex flex-col gap-3 ${parameters} ${shadow}`}>
      <h2>Parameters</h2>
      <div className="flex flex-col gap-2 [&>h3]:text-source-primary">
        <Select
          id="subject"
          defaultValue="-- Select Subject --"
          optionList={subject}
          setPayload={setPayload}
        >
          Subject
        </Select>
        <Select id="year" defaultValue="-- Select year --" optionList={year}>
          Year
        </Select>
      </div>
    </div>
  );
}

export default Parameters;
