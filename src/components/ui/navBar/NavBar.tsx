import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ModeToggle";

import { createClient } from "@/utils/supabase/server";
import Icon from "@/components/ui/Icon";
import SignedInButton from "./SignedInButton";
import SignedOutButtons from "./SignedOutButtons";

export default async function NavBar() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <nav className="fixed p-2 inset-x-0 top-0 z-50 bg-white shadow-xl border-b border-gray-200 dark:bg-gray-950  dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="/">
            <Icon className="h-8 w-8" />
            <span className="text-gray-900 dark:text-white">Auth-Demo</span>
          </Link>
          {data?.user ? <SignedInButton /> : <SignedOutButtons />}
        </div>
      </div>
    </nav>
  );
}
