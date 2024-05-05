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
import { resetPassword } from "@/actions/AuthActions";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
export default function ResetPasswordComponent() {
  const { toast } = useToast();


  async function clientAction(formData: FormData) {


    const redirectUrl = window.location.origin +"/reset"
    console.log(redirectUrl)
    const result = await resetPassword(formData,  redirectUrl)


    if (result) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    else {
        toast({
            variant: "default",
            title: "Success",
            description: "Password reset link sent to your email",
            action: <ToastAction altText="Ok">Ok</ToastAction>,
        });
    }
  }

  return (
    <Card className="mx-auto max-w-sm ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>
          Enter your email and we will send you a link to reset your password.
        </CardDescription>
      </CardHeader>
      <form action={clientAction}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input id="email" name="email" required type="email" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2">
          <Button className="w-full" type="submit">
            Reset Password
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
