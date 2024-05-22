"use client";

import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { createClient } from "@/utils/supabase/client";
import { createCommunity } from "@/actions/CommunityActions";
interface CreateCommunityFormProps {}

const CreateCommunityForm: FC<CreateCommunityFormProps> = ({}) => {
  const supabase = createClient();
  const { toast } = useToast();
  async function clientAction(formData: FormData) {
    const validate = await createCommunity(formData);

    const file = formData.get("communityImage") as File;

    if (validate !== null) {
      console.log("not valid", validate);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: validate,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
  }

  const validateIfInputsAreEmpty = (formData: FormData) => {
    const communityName = formData.get("communityName") as string;
    const communityDescription = formData.get("communityDescription") as string;
    const communityImage = formData.get("communityImage") as File;

    if (!communityName || !communityDescription || !communityImage) {
      return "Please fill in all fields";
    }
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Create a New Community</h2>
        <form action={clientAction} className="space-y-4">
          <div>
            <Label htmlFor="communityName">Community Name</Label>
            <Input
              id="communityName"
              name="communityName"
              placeholder="Enter community name"
            />
          </div>
          <div>
            <Label htmlFor="communityDescription">Community Description</Label>
            <Textarea
              className="resize-none"
              id="communityDescription"
              name="communityDescription"
              maxLength={255}
              placeholder="Enter community description"
            />
          </div>
          <div>
            <Label htmlFor="communityImage">Image</Label>
            <div className="flex items-center space-x-2">
              <Input id="communityImage" name="communityImage" type="file" />
            </div>
          </div>
          <Button className="w-full" type="submit">
            Create Community
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateCommunityForm;
