import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
export default function Navbar() {
  return (
    <nav className="max-w-[1440px] mx-auto justify-center items-center shadow-md">
      <div className="hidden md:flex items-center py-10 justify-around text-black">
        <div>
          <h2 className="text-2xl font-bold">UMM-E-HANI</h2>
        </div>
        <div className="flex gap-x-5 text-lg">
          <Link
            className="hover:text-gray-900 hover:underline underline-offset-4 focus:underline"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-900 hover:underline underline-offset-4 focus:underline"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-gray-900 hover:underline underline-offset-4 focus:underline"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="hover:text-gray-900 hover:underline underline-offset-4 focus:underline"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Responsive Navbar for mobile screens */}
      <div className="flex md:hidden justify-around items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter">UMM-E-HANI</h2>
        </div>
        {/* <div> */}
        <Sheet>
          <SheetTrigger>
            <Image src="/display/logo.png" alt="logo" width={90} height={90} />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-y-5 text-lg pt-12">
              <Link
                className="hover:text-gray-900 hover:underline underline-offset-4 focus:underline"
                href="/"
              >
                Home
              </Link>
              <Link
                className="hover:text-gray-900 hover:underline underline-offset-4 focus:underline"
                href="/about"
              >
                About
              </Link>
              <Link
                className="hover:text-gray-900 hover:underline underline-offset-4 focus:underline"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="hover:text-gray-900 hover:underline underline-offset-4 focus:underline"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        {/* </div> */}
      </div>
    </nav>
  );
}
