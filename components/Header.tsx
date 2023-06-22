import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <Link
            href="/projects"
            className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
          >
            Projects
          </Link>
        </div>
        <div className="space-x-1">
          <SocialIcon url="https://github.com/AliCo-Hash" />
          <SocialIcon network="email" className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
