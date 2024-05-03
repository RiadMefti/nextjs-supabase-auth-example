import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

export default function NavBar() {
  return (
    <nav className="fixed p-2 inset-x-0 top-0 z-50 bg-white shadow-xl border-b border-gray-200 dark:bg-gray-950  dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="#">
            <Icon className="h-8 w-8" />
            <span className="text-gray-900 dark:text-white">Community</span>
          </Link>
          {/* <div className="hidden md:flex gap-4">
            <Link
              className="font-medium flex items-center text-sm text-gray-900 dark:text-gray-100 transition-colors hover:underline"
              href="#"
            >
              Home
            </Link>
            <Link
              className="font-medium flex items-center text-sm text-gray-900 dark:text-gray-100 transition-colors hover:underline"
              href="#"
            >
              About
            </Link>
            <Link
              className="font-medium flex items-center text-sm text-gray-900 dark:text-gray-100 transition-colors hover:underline"
              href="#"
            >
              Services
            </Link>
            <Link
              className="font-medium flex items-center text-sm text-gray-900 dark:text-gray-100 transition-colors hover:underline"
              href="#"
            >
              Contact
            </Link>
          </div> */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button size="sm" variant="outline">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.29 8.09 7.54 8.86.58.11.79-.25.79-.57v-1.87c-3.01-.55-4.58-1.74-4.58-3.29 0-1.95 1.57-3.54 3.54-3.54 1.85 0 3.35 1.38 3.51 3.13.03.23.23.41.47.41H19c.27 0 .52-.22.52-.49V12c0-5.52-4.48-10-10-10zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
    </svg>
  );
}
