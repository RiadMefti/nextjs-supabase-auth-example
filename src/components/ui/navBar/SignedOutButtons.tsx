import React from "react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../button";
import Link from "next/link";

const SignedOutButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <ModeToggle />
      <Button size="sm" variant="outline">
        <Link href={"/login"}> Sign in</Link>
      </Button>
      <Button size="sm">
        {" "}
        <Link href={"/signUp"}> Sign up</Link>
      </Button>
    </div>
  );
};

export default SignedOutButtons;
