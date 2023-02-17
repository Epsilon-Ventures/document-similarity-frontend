import { Button } from '../atoms';
import styles from './navbar.module.css';

function Navbar() {
  const { li, navbar } = styles;
  return (
    <header>
      <nav className={`h-4 ${navbar}`}>
        <div className="m-auto container flex items-center gap-2">
          <div className="cursor-pointer">
            <img
              src="https://s3-alpha.figma.com/hub/file/2818204262/2f8ce70c-70be-4439-86e9-d20a3824289e-cover.png"
              alt="Document Similarity logo"
              className="h-[3.2rem] w-[3.2rem]"
            />
          </div>
          <nav className="flex items-center flex-1">
            <ul className="flex text-title-medium cursor-pointer">
              <li className={`${li}`}>
                <a href="https://www.google.com">Home</a>
              </li>
              <li className={`${li}`}>
                <a href="https://www.google.com">Analyze</a>
              </li>
              <li className={`${li}`}>
                <a href="https://www.google.com">About Our Project</a>
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
