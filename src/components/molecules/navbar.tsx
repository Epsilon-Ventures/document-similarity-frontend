import { Button } from '../atoms';
import styles from './navbar.module.css';
import projectLogo from '../../assets/logo2.png';

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
                <a href="/">Home</a>
              </li>
              <li className={`${li}`}>
                <a href="https://localhost:3000/file-upload">Analyze</a>
              </li>
              <li className={`${li}`}>
                <a href="/about">About Our Project</a>
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
