import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(SplitText);
const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const t1 = gsap.timeline({ delay: 0.3, ease: "Power2.inOut" });
    const introChars = new SplitText(".hero-intro h1", { type: "chars" });
    t1.from(introChars.chars, { y: "150%", stagger: 0.05, duration: 0.8 })
      .to(introChars.chars, {
        y: "0",
        duration: 2,
        stagger: 0.04,
      })
      .to(".hero-intro h1", {
        y: "-100%",
        duration: 0.2,
      })
      .to(".hero-intro", { y: "-100%", ease: "circ.inOut", duration: 1.4 });
    const tl = gsap.timeline({ ease: "power2.inOut", delay: 4.9 });
    const linespilter = document.querySelectorAll(".ls");

    console.log(linespilter);
    const splitChars = new SplitText(linespilter, {
      type: "lines",
    });
    tl.from(".hero .divider", { width: 0 }).from(splitChars.lines, {
      x: "-150%",
      duration: 0.8,
      stagger: 0.02,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="hero">
      <div className="hero-intro">
        <div className="wrapper">
          <h1>YLCHARAN.</h1>
        </div>
      </div>
      <div className="wrapper">
        <h1 className="ls">ylcharan</h1>
      </div>
      <div className="wrapper">
        <div className="divider"></div>
      </div>
      <div className="wrapper">
        <p className="ls">
          Hello I'm ylcharan a Full stack Developer who loves building Amazing
          things with Code. I am currently pursuing 11th grade. I've serious
          passion for UI effects, animations and creating intuitive, dynamic
          user experiences.
        </p>
      </div>
      <div className="wrapper">
        <div className="ls">
          <div className="btn" onClick={() => navigate("/about")}>
            learn more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
