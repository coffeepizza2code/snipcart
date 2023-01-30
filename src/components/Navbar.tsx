import Container from "@components/Container";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href={"/"}
            className="cursor-pointer text-2xl font-semibold text-slate-600 transition duration-150 ease-in-out hover:border-b hover:border-yellow-300"
          >
            🐱 Cat Commerce
          </Link>
          <div className="flex items-center space-x-4 text-slate-700">
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
        href="/about"
      >
        About
      </Link>
      <Link
        className="transition duration-150 ease-in-out hover:border-b hover:border-orange-500"
        href="#"
      >
        <span className="snipcart-checkout">checkout</span>
      </Link>
      <Link
        className="transition duration-150 ease-in-out hover:border-b hover:border-orange-500 flex items-center gap-2"
        href="#"
      >
        <FaShoppingCart />
        <span className="snipcart-total-price">00</span>
      </Link>
    </>
  );
}

export default Navbar;
