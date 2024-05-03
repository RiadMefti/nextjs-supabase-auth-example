import SearchBar from "@/components/ui/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex gap-14 flex-col items-center justify-center">
        <div className="flex gap-8 flex-col">
          <h1 className="text-4xl font-bold text-center leading-tight md:text-6xl">
            Community Central
          </h1>
          <div className="text-gray-800 text-base font-bold text-center leading-tight md:text-lg dark:text-gray-300">
            <p>Discover communities or</p>
            <p className=" text-blue-600 underline dark:text-yellow-400">
              create your own
            </p>{" "}
            {/* Highlighted in yellow */}
          </div>
        </div>
        <div className="w-full max-w-md">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
