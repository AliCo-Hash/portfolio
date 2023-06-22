import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import vGameStorePic from "../public/vgamestorepics/Screenshot from 2023-06-22 19-43-20.png";
import gamePic from "../public/escaperoompics/Screenshot from 2023-06-22 19-40-53.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-zinc-900">
      <Head>
        <title>Ali Cocelli Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="skills" className="text-center mt-16">
        <h1 className="text-2xl">Skills</h1>
        <div className="flex flex-wrap justify-center mt-2">
          <div className="w-full sm:w-1/2">
            <p>
              <strong>Programming Languages & Tools:</strong> JavaScript,
              TypeScript, Ruby, Node.js, React.js, Next.js, NextAuth.js,
              Handlebars, Express, MongoDB, PostgreSQL, HTML, CSS, Git
            </p>
            <p>
              <strong>Testing:</strong> Jest, RSpec, Cypress, Capybara
            </p>
            <p>
              <strong>Agile Methodologies:</strong> Scrum, Kanban
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="flex flex-col items-center space-y-4 mt-16"
      >
        <h1 className="text-3xl">Projects</h1>
        <div className="text-center space-y-8 sm:space-y-20">
          <div id="vgamestore">
            <h1 className="text-xl underline rounded-md">
              <strong>Video Game Store</strong>
            </h1>
            <p className="text-sm mt-2">
              An e-commerce store which sells PC games. Built using Next.js.
            </p>

            <div className="flex justify-center mb-2">
              <Image
                src={vGameStorePic}
                alt="Store Home"
                className="w-1/2 md:w-1/3"
              />
            </div>
            <div id="storeLinks">
              <span className="mr-2">
                <Link href="https://vgamestore.vercel.app/">
                  <button className="rounded-md bg-gradient-to-r from-pink-500 to-violet-500 text-black px-4 py-2 hover:from-pink-700 hover:to-violet-700">
                    Website
                  </button>
                </Link>
              </span>
              <span>
                <Link href="https://github.com/AliCo-Hash/vgamestore">
                  <button className="rounded-md bg-gradient-to-r from-pink-500 to-violet-500 text-black px-4 py-2 hover:from-pink-700 hover:to-violet-700">
                    Code
                  </button>
                </Link>
              </span>
            </div>
          </div>
          <div id="escaperoom">
            <h1 className="text-xl underline rounded-md">
              <strong>Get Me Out Of Here!</strong>
            </h1>
            <div className="flex justify-center mt-2">
              <div className="max-w-xl">
                <p className="text-center">
                  An escape room game where you collect clues and solve puzzles
                  to complete the mystery, within a limited timeframe
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-2">
              <Image
                src={gamePic}
                alt="Escape Room Home"
                className="w-1/2 md:w-1/3"
              />
            </div>
            <div id="gameLinks">
              <span className="mr-2">
                <Link href="https://escape-room-snowy.vercel.app/">
                  <button className="rounded-md bg-gradient-to-r from-pink-500 to-violet-500 text-black px-4 py-2 hover:from-pink-700 hover:to-violet-700">
                    Website
                  </button>
                </Link>
              </span>
              <span>
                <Link href="https://github.com/AliCo-Hash/escape-room">
                  <button className="rounded-md bg-gradient-to-r from-pink-500 to-violet-500 text-black px-4 py-2 hover:from-pink-700 hover:to-violet-700">
                    Code
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
