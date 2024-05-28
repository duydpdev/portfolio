import { TypeAnimation } from "react-type-animation";

export default function ListJob() {
  return (
    <>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Freelancer",
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "UI/UX Designer",
          2000,
          "Web Developer",
          2000,
        ]}
        wrapper="span"
        speed={50}
        // style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </>
  );
}
