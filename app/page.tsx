import { Inter } from "next/font/google";
import Posts from "./components/Posts";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center text-white">
        Hello and Welcome 👏🏽&nbsp;{" "}
        <span className="whitespace-nowrap">
          I am <span className="font-bold">Nasir</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
