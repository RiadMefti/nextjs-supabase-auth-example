"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/AuthActions";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
export default function LoginComponent() {
  const { toast } = useToast();
  async function clientAction(formData: FormData) {
    const result = await login(formData);

    if (result) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <Card className="mx-auto max-w-sm ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>
          Enter your email and password to sign in to your account.
        </CardDescription>
      </CardHeader>
      <form action={clientAction}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              name="email"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link className="text-sm underline" href="#">
                Forgot password?
              </Link>
            </div>
            <Input id="password" name="password" required type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2">
          <Button className="w-full" type="submit">
            Sign in
          </Button>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?
            <Link className="font-medium underline" href="/signUp">
              Create one
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
