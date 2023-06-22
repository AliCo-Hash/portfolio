import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="min-h-screen text-white bg-zinc-900">
      <Head>
        <title>About Me - Ali Cocelli</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <section id="about" className="text-center mt-16">
        <h1 className="text-3xl">About Me</h1>
        <div className="flex flex-col items-center space-y-4 mt-8">
          <div className="max-w-2xl">
            <p>
              Hey there! I&apos;m Ali Cocelli, a career changer who recently
              made the exciting leap from the optical industry to pursue my true
              passion as a software developer. I&apos;ve embarked on an
              incredible journey of self-discovery and skill-building, driven by
              my love for coding and problem-solving.
            </p>
            <br />
            <p>
              Through personal projects and completing the Makers Academy
              bootcamp, I&apos;ve immersed myself in the world of web
              development. I&apos;ve dived deep into JavaScript, TypeScript,
              Ruby, Node.js, React.js, Next.js, and more, honing my abilities to
              create intuitive and impactful applications.
            </p>
            <br />
            <p>
              When I&apos;m not coding, I find joy in rock climbing. It&apos;s
              my escape, a chance to challenge myself physically and mentally.
              Climbing fuels my creativity and hones my adaptability, making me
              a better developer.
            </p>
            <br />
            <p>
              I thrive in collaborative environments and approach every project
              with dedication and attention to detail. As I continue this
              exciting journey, I&apos;m eager to contribute my diverse
              background, adaptability, and relentless drive for growth to make
              a positive impact in the world of software development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
