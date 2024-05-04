import CommunityCard from "@/components/ui/CommunityCard";
import SearchBar from "@/components/ui/SearchBar";
import Image from "next/image";

export default function Home() {
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
            <p className="text-blue-600 underline dark:text-yellow-400">
              create your own
            </p>
          </div>
        </div>
        <div className="w-full max-w-md">
          <SearchBar />
        </div>

        <div className="flex flex-wrap gap-4 ">
          {[0, 1, 2, 3, 4, 8, 9, 9, 0, 0, 0, 0, 0, 0].map((key) => (
            <CommunityCard key={key} />
          ))}
        </div>
      </div>
    </main>
  );
}
