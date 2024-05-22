import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

import Image from "next/image";
import { Community } from "@/utils/types/community";
import { Button } from "./button";
import { createClient } from "@/utils/supabase/server";

interface CommunityCardProps {
  community: Community;
}

const CommunityCard: FC<CommunityCardProps> = async ({ community }) => {
  const supabase = createClient();
  const { data } = await supabase.storage
    .from("community")
    .getPublicUrl(community.id);
  console.log(data);
  return (
    <Card className="w-[400px] min-w-[400px] flex flex-col justify-between ">
      <CardHeader className="gap-4 h-[350px] ">
        <CardTitle>{community.name}</CardTitle>
        <Image src={data.publicUrl} alt={"test"} width={400} height={400} />
      </CardHeader>
      <CardContent>
        <CardDescription className="text-justify overflow-hidden h-[75px] line-clamp-3">
          {community.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Join</Button>
      </CardFooter>
    </Card>
  );
};

export default CommunityCard;
