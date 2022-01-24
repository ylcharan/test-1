import gsap from "gsap/all";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(SplitText);
const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const links = document.querySelectorAll(".header-subs");
    const handleHower = (el) => {
      const tl = gsap.timeline({ ease: "power2.inOut" });
      const splitChars = new SplitText(el, { type: "chars" });
      tl.to(splitChars.chars, {
        y: "-100%",
        duration: 0.15,
        stagger: 0.02,
        ease: "M0,0 C0.024,0.073 0.107,-0.028 0.134,0.038 0.244,0.317 0.238,0.682 0.366,0.802 0.517,0.943 0.825,0.868 0.97,0.874 1.009,0.875 0.961,1 1,1 ",
      })
        .set(splitChars.chars, {
          y: "100%",
        })
        .to(splitChars.chars, {
          y: "0",
          duration: 0.15,
          stagger: 0.04,
          ease: "M0,0 C0.024,0.073 0.107,-0.028 0.134,0.038 0.244,0.317 0.238,0.682 0.366,0.802 0.517,0.943 0.825,0.868 0.97,0.874 1.009,0.875 0.961,1 1,1 ",
        });
    };
    links.forEach((el) => {
      el.addEventListener("mouseenter", () => handleHower(el));
    });
  }, []);

  return (
    <div className="header">
      <h1 className="header-main" onClick={() => navigate("/")}>
        ylcharan
      </h1>
      <div className="header-list">
        <h3 className="header-subs" onClick={() => navigate("/about")}>
          About
        </h3>
        <h3 className="header-subs" onClick={() => navigate("/resume")}>
          resume
        </h3>
        <h3 className="header-subs" onClick={() => navigate("/projects")}>
          projects
        </h3>
        <h3 className="header-subs" onClick={() => navigate("/contact")}>
          contact
        </h3>
      </div>
    </div>
  );
};

export default Header;
