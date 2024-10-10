// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav >
      <div className="flex items-center justify-between py-4  ">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#21d90d] text-4xl font-bold">
            Rajesh Shrestha.
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-90 font-semibold" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-blue-400">ABOUT</div>
            </Link>
          </li>
        
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
            <div className="text-sm text-white transition-colors duration-300 hover:text-blue-600 ">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
            <div className="text-sm text-white transition-colors duration-300 hover:text-blue-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
            <div className="text-sm text-white transition-colors duration-300 hover:text-blue-600">EDUCATION</div></Link>
          </li>
          <li>
            {/* <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-blue-600">PROJECTS</div></Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;