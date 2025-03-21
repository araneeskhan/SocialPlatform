import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 flex justify-between items-center bg-purple-100 px-8 my-5 rounded-4xl">
      {/* Left  */}
      <div className=" lg:flex">
        <Link
          href="/"
          className="font-bold text-3xl text-purple-500 font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0.5,0,0.9)]"
        >
          AR Social
        </Link>
      </div>

      {/* Center  */}

      <div className="hidden md:flex gap-8 font-mono font-bold text-lg text-purple-600">
        <Link href="/">Home</Link>
        <Link href="/">Friends</Link>
        <Link href="/">Stories</Link>
      </div>

      <div>
        <input type="text" placeholder="Search" className="hidden md:flex bg-transparent border-2 rounded-2xl px-3 border-purple-600" />
      </div>

      {/* <div className="hidden md:flex gap-4 font-mono  font-bold text-lg text-purple-600">
        
      </div> */}

      {/* Right  */}
      <div className="font-mono font-bold text-lg text-purple-600">
        <ClerkLoading>
          <div className="hidden md:flex gap-4">
            <button type="button" className="bg-purple-500 text-white px-4 py-2 rounded-2xl flex items-center" disabled>
              <svg
                className="mr-3 h-5 w-5 animate-spin text-white font-bold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Authenticating…
            </button>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
            <SignedIn>
                <div className="hidden md:flex gap-4">
                <div className="cursor-pointer">
                    <Image src="/profile.png" alt="" width={26} height={26} />
                </div>
                <div className="cursor-pointer">
                    <Image src="/message.png" alt="" width={26} height={26} />
                </div>
                <div className="cursor-pointer">
                    <Image src="/notification.png" alt="" width={26} height={26} />
                </div>
                <Link href="/sign-out" className="rounded-xl px-2  hover:bg-purple-500 hover:text-white">LogOut</Link>
                </div>
            </SignedIn>
            <SignedOut>
                <div>
                    <div className="hidden md:flex justify-center items-center font-mono text-lg text-purple-600 gap-4">
                    <Image src="/login.png" alt="" width={24} height={24} />
                <Link href="/sign-in" className="rounded-xl px-2 hover:bg-purple-500 hover:text-white">Login</Link>
                <h1>/</h1>
                <Link href="/sign-up" className="rounded-xl px-2  hover:bg-purple-500 hover:text-white">Register</Link>
                </div>
                </div>
                </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
