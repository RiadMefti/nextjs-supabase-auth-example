import { FC } from "react";
import { ModeToggle } from "../ModeToggle";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { logout } from "@/actions/AuthActions";
import Link from "next/link";

interface SignedInButtonProps {}

const SignedInButton: FC<SignedInButtonProps> = ({}) => {
  return (
    <div className="flex items-center gap-4">
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Button variant={"ghost"}>
              <Settings className="mr-2 h-4 w-4" />
              <span>
                {" "}
                <Link href="/settings">Settings</Link>
              </span>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <form>
              {" "}
              <Button formAction={logout} variant={"ghost"}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SignedInButton;
