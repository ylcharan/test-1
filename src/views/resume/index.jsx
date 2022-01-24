import Intro from "../../components/intro";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);
const Resume = () => {
  useEffect(() => {
    const tl = gsap.timeline({ ease: "power2.inOut", delay: 4.9 });
    const linespilter = document.querySelectorAll(".ls");

    console.log(linespilter);
    const splitChars = new SplitText(linespilter, {
      type: "lines",
    });
    tl.from(".resume .divider", { width: 0 }).from(splitChars.lines, {
      x: "-150%",
      duration: 0.8,
      stagger: 0.02,
      ease: "power2.out",
    });
  }, []);
  return (
    <Intro title="resume">
      <div className="resume">
        <h1 className="ls">Resume</h1>
        <div className="divider"></div>
      </div>
    </Intro>
  );
};

export default Resume;
