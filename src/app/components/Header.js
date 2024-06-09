import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="bg-white lg:px-6 dark:bg-gray-800 shadow-md">
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center text-2xl py-4">
            <Link href="/">
              <span className="text-orange-400 font-medium">PocketDrive</span>
            </Link>
            
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 items-center">
            <li className="px-4 py-2 mx-2 hover:text-orange-500 cursor-pointer animation-hover inline-block relative">
              <a href="/#about">About</a>
            </li>
            <li className="px-4 py-2 mx-2 hover:text-orange-500 cursor-pointer animation-hover inline-block relative">
              <a href="/#feature">Feature</a>
            </li>
            <li className="px-4 py-2 mx-2 hover:text-orange-500 cursor-pointer animation-hover inline-block relative">
              <a href="/#pricing">Pricing</a>
            </li>
            <li className="px-4 py-2 mx-2 hover:text-orange-400 cursor-pointer animation-hover inline-block relative">
              <a href="/#testimonial">Testimonial</a>
            </li>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            
            <Link href="/signup">
                <button className="font-medium tracking-wide py-3 px-5 sm:px-8 bg-black border border-white-500 text-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-white hover:text-black hover:border-black transition-all hover:shadow-orange">Get Started</button>
            </Link>
          </div>
        </nav>
       
      </header>
    </>
  );
};

export default Header;
