import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black pr-8 py-6">
      <div className="flex flex-col sm:flex-row justify-end">
        <ul className="text-white flex font-Poppins font-semibold text-lg sm:gap-10 sm:ml-auto">
          <li className="my-2">
            <Link to="/">HOME</Link>
          </li>
          <li className="my-2">
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className="my-2">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="my-2">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
