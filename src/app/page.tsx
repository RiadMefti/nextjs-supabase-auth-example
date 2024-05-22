import CommunityCard from "@/components/ui/CommunityCard";
import SearchBar from "@/components/ui/SearchBar";
import { createClient } from "@/utils/supabase/server";
import { Community } from "@/utils/types/community";
import Link from "next/link";
export default async function Home() {
  const supabase = createClient();

  const { data } = await supabase.from("community").select("*");

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div
        className="home-container flex gap-14 flex-col items-center justify-center"
        style={{ width: "100%" }}
      >
        <div className="home-title flex gap-8 flex-col">
          <h1 className="text-4xl font-bold text-center leading-tight md:text-6xl">
            Community Central
          </h1>
          <div className="text-gray-800 text-base font-bold text-center leading-tight md:text-lg dark:text-gray-300">
            <p>Discover communities or</p>
            <Link href="/create-community">
              <p className="text-blue-600 underline dark:text-yellow-400 cursor-pointer">
                create your own
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md">
          <SearchBar />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {data?.map((community: Community, index) => (
            <CommunityCard key={index} community={community} />
          ))}
        </div>
      </div>
    </main>
  );
}
