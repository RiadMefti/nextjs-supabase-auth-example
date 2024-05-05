"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { revalidate } from "@/actions/AuthActions";

import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function ResetComponent() {
  const { toast } = useToast();

  const router = useRouter();
  const supabase = createClient();
  async function clientAction(formData: FormData) {
    const result = await supabase.auth.updateUser({
      password: formData.get("password") as string,
    });

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.error.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
      toast({
        variant: "default",
        title: "Success",
        description: "Your password has been reset.",
        action: <ToastAction altText="Ok">Ok</ToastAction>,
      });
      await revalidate();
    }
  }

  return (
    <Card className="mx-auto max-w-sm ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>
          Enter your new password to reset your account.
        </CardDescription>
      </CardHeader>
      <form action={clientAction}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input id="password" name="password" required type="password" />
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
