"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup, validateSingup } from "@/actions/AuthActions";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export default function SignUpComponent() {
  const { toast } = useToast();
  async function clientAction(formData: FormData) {
    const validate = await validateSingup(formData);
    if (validate !== null) {
      console.log("not valid",validate);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: validate,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    const result = await signup(formData);
    if (result) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    else{
      toast({
        variant: "default",
        title: "Account Created",
        description: "Go check your email to verify your account.",
        action: <ToastAction altText="Try again">Ok</ToastAction>,
      });
    }
    
  }

  return (
    <Card className="mx-auto max-w-sm ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={clientAction}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
              />
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
