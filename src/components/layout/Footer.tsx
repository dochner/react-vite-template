import { Link } from 'react-router-dom';

import useDarkMode from '../../hooks/useDarkMode';

export default function Footer() {
  const { toggleDark } = useDarkMode();
  return (
    <footer className="flex justify-center w-full pb-4 text-white footer">
      <nav className="flex text-xl">
        <button
          onClick={toggleDark}
          className="cursor-pointer bg-transparent  transition-colors duration-300 flex space-x-2 items-center border-none  decoration-none text-primary hover:bg-accent hover:text-white font-light p-2 rounded-full !outline-none text-xl"
        >
          <div className="i-carbon-sun dark:i-carbon-moon " />
        </button>
      </nav>
    </footer>
  );
}
