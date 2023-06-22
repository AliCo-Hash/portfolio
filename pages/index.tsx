import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen text-white bg-zinc-900		">
      <Head>
        <title>Ali Cocelli Portfolio</title>
      </Head>

      <Header />
      <section>about me</section>
      <section>short project description</section>
    </div>
  );
}
