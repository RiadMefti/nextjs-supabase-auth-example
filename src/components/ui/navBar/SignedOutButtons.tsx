import React from "react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../button";

const SignedOutButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <ModeToggle />
      <Button size="sm" variant="outline">
        Sign in
      </Button>
      <Button size="sm">Sign up</Button>
    </div>
  );
};

export default SignedOutButtons;
