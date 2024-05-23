import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <div className="max-w-md w-full shadow-2xl rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">User Profile</h1>

        <div className="flex flex-col items-center gap-3">
          <h3 className="text-lg font-bold ">{data.user.user_metadata["username"]}</h3>

          <div className="text-lg font-medium ">{data.user.email}</div>

          <div className="text-sm text-gray-600">{data.user.id}</div>
        </div>
      </div>
    </div>
  );
};

export default page;
