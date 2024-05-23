import { Github } from "lucide-react";
import Link from "next/link";
export default async function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",

        width: "100%",
      }}
    >
      <div
        className="home-container flex gap-14 flex-col items-center justify-center"
        style={{ width: "100%" }}
      >
        <div className="home-title flex gap-8 flex-col h-[50vh] justify-center align-middle">
          <h1 className="text-4xl font-bold text-center leading-tight md:text-6xl">
            This is a mock App
          </h1>
          <div className="text-gray-800 text-base font-bold text-center leading-tight md:text-lg dark:text-gray-300">
            <p>To demo email authentification with supabase</p>
            <Link href="/settings">
              <p className="text-blue-600 underline dark:text-yellow-400 cursor-pointer">
                Try going into the settings page
              </p>
            </Link>
          </div>{" "}
          <a
            href="https://github.com/RiadMefti/nextjs-supabase-auth-example"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center align-middle gap-2"
          >
            <p>Check the repository on GitHub</p>
            <Github />
          </a>
        </div>
      </div>
    </main>
  );
}
