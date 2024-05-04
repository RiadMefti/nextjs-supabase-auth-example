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

interface CommunityCardProps {}

const CommunityCard: FC<CommunityCardProps> = ({}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          <p className="text-justify">
            {" "}
            Digital Growth community provides step-by-step roadmap to attract
            daily pay customers digitally, build an impactful email list, create
            a well known brand, PROVEN 6-figures in 6 months formula, monthly
            zoom meet up events to help you grow your customer base.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={"/test.jpg"} alt={"test"} width={300} height={300} />
      </CardContent>
      <CardFooter className="flex justify-between">
        Private 22.7k Members
      </CardFooter>
    </Card>
  );
};

export default CommunityCard;
