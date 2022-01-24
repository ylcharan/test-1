import gsap from "gsap/all";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);
const About = () => {
  useEffect(() => {
    const t1 = gsap.timeline({ delay: 0.3, ease: "Power2.inOut" });
    const introChars = new SplitText(".about-intro h1", { type: "chars" });
    t1.from(introChars.chars, { y: "150%", stagger: 0.05, duration: 0.8 })
      .to(introChars.chars, {
        y: "0",
        duration: 2,
        stagger: 0.04,
      })
      .to(".about-intro h1", {
        y: "-100%",
        duration: 0.2,
      })
      .to(".about-intro", { y: "-100%", ease: "circ.inOut", duration: 1.4 });
    const tl = gsap.timeline({ ease: "power2.inOut", delay: 4.9 });
    const linespilter = document.querySelectorAll(".ls");
    const splitChars = new SplitText(linespilter, {
      type: "lines",
    });
    tl.from(".about .divider", { width: 0 }).from(splitChars.lines, {
      x: "-150%",
      duration: 0.8,
      stagger: 0.02,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="about">
      <div className="about-intro">
        <div className="wrapper">
          <h1>ABOUT</h1>
        </div>
      </div>
      <h1 className="ls">About</h1>
      <div className="divider"></div>
      <h2 className="ls">INTRO</h2>
      <p className="ls">
        Hi I'm ylcharan a Full stack Web Developer focused on great web
        experiences. Designing and Coding have been my passion since the days I
        started working with computers but I found myself into web
        design/development since 2019. I enjoy creating beautifully designed,
        intuitive and functional websites.
      </p>
      <p className="ls">
        I am available to discuss or consult on interesting projects. I am
        particularly interested in social impact, education, inclusivity, and
        space. I enjoy advising companies and may even be available for pro-bono
        work depending on the time commitment and the project. If you would like
        to arrange a meeting, I am based in Kaithal, Haryana INDIA.
      </p>
      <h2 className="ls">CURRENTLY</h2>
      <p className="ls">I'm pursuing 11th grade</p>
      {/* <h2>I LIKE</h2>
      <ul>
        <li>Skiing</li>
        <li>listening music</li>
        <li>Sailing and the sea</li>
        <li>Space</li>
        <li>Winter</li>
      </ul> */}
    </div>
  );
};

export default About;
