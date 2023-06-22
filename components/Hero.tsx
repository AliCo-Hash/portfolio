import { Typewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="text-xl text-center">
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
        Software Developer
      </h2>
      <span>
        <Typewriter
          words={[
            "Hi, I'm Ali Cocelli",
            "Passionate Software Developer",
            "If I'm not coding, then I'm probably climbing",
            "Let's work together",
          ]}
          loop={true}
          cursor
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
}

export default Hero;
