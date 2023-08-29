import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="flex justify-between p-4 sm:p-10">
        <div className="flex items-center space-x-4 uppercase">
          <Link
            href="/"
            className="text-xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          >
            About me
          </Link>
        </div>
        <div className="space-x-1">
          <SocialIcon url="https://github.com/AliCo-Hash" />
          <SocialIcon
            network="email"
            url="mailto:ali.cocelli@outlook.com"
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
