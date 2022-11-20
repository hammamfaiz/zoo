import Link from "next/link";
import Image from "next/image";
import icon from "../../public/assets/icon.png";

export default function Header() {
  return (
    <header className="sticky top-0 text-gray-600 body-font z-50 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <Image alt="icon" src={icon} width="40" height="40" />
          <span className="ml-3 text-xl">Zoo</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href="/">
            Our List
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/references">
            References
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/faq">
            FAQ
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/about">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
