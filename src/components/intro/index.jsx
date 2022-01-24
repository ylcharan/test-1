import gsap from "gsap/all";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);
const Intro = (props) => {
  useEffect(() => {
    const t1 = gsap.timeline({ delay: 0.3, ease: "Power2.inOut" });
    const introChars = new SplitText(".intro h1", { type: "chars" });
    t1.from(introChars.chars, { y: "150%", stagger: 0.05, duration: 0.8 })
      .to(introChars.chars, {
        y: "0",
        duration: 2,
        stagger: 0.04,
      })
      .to(".intro h1", {
        y: "-100%",
        duration: 0.2,
      })
      .to(".intro", { y: "-100%", ease: "circ.inOut", duration: 1.4 });
  }, []);
  return (
    <>
      <div className="intro">
        <div className="wrapper">
          <h1>{props.title}</h1>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Intro;
