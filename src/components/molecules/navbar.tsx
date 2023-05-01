import { Link } from 'react-router-dom';
import { Button } from '../atoms';
import projectLogo from '../../assets/logo2.png';
import styles from './navbar.module.css';

function Navbar() {
  const { li, navbar } = styles;
  return (
    <header>
      <nav className={`h-4 ${navbar}`}>
        <div className="m-auto container flex items-center gap-2">
          <div className="cursor-pointer">
            <img
              // src="https://s3-alpha.figma.com/hub/file/2818204262/2f8ce70c-70be-4439-86e9-d20a3824289e-cover.png"
              src={projectLogo}
              alt="Document Similarity logo"
              className="h-[4.2rem] w-[4.2rem]"
            />
          </div>
          <nav className="flex items-center flex-1">
            <ul className="flex text-title-medium cursor-pointer">
              <li className={`${li}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`${li}`}>
                <Link to="/file-upload">Analyze</Link>
              </li>
              <li className={`${li}`}>
                <Link to="/two-file-upload">Compare Paper</Link>
              </li>
              <li className={`${li}`}>
                <Link to="/question-paper-upload">Question Paper Upload</Link>
              </li>
              <li className={`${li}`}>
                <Link to="/about-page">About Project</Link>
              </li>
            </ul>
            <Button className="rounded-full text-title-medium ml-auto">
              Admin
            </Button>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
