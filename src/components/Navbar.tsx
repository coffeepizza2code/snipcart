import Container from "@components/Container";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <Container className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={"/"}
            className="cursor-pointer text-2xl font-semibold text-yellow-600 transition duration-150 ease-in-out hover:border-b hover:border-yellow-300"
          >
            🐱 Cat Commerce
          </Link>
          <div className="flex space-x-4 text-orange-500">
            <NavLinks />
          </div>
        </div>
      </Container>
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <Link
        className="transition duration-150 ease-in-out hover:border-b hover:border-orange-500"
        href="#"
      >
        DashBoard
      </Link>
      <Link
        className="transition duration-150 ease-in-out hover:border-b hover:border-orange-500"
        href="#"
      >
        About
      </Link>
      <Link
        className="transition duration-150 ease-in-out hover:border-b hover:border-orange-500"
        href="#"
      >
        Projects
      </Link>
      <Link
        className="transition duration-150 ease-in-out hover:border-b hover:border-orange-500"
        href="#"
      >
        Contact
      </Link>
    </>
  );
}

export default Navbar;
