import { BsFillMoonStarsFill } from "react-icons/bs";
<darkModeHandeler />;
function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <nav className="mb-10 flex justify-between py-10 md:mb-2">
        <h1 className="dark: font-burtons text-lg dark:text-slate-50">
          WingsWeb
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl delay-150 ease-in-out hover:scale-125 dark:text-slate-100"
            />
          </li>
          <li>
            <a
              className="transition-2s ml-8 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 px-4 py-3 text-white transition-all delay-75 hover:from-teal-400  hover:to-cyan-500 hover:delay-200"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
