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

  const HandleToggle = () => {
    const primaryNav = document.querySelector(".header-list");
    const visibility = primaryNav.getAttribute("toggle");
    const b1 = document.querySelector(".hame-line-1");
    const b2 = document.querySelector(".hame-line-2");
    console.log(visibility);
    if (visibility === "false") {
      primaryNav.setAttribute("toggle", "true");
      b1.setAttribute("toggle", "true");
      b2.setAttribute("toggle", "true");
    } else if (visibility === "true") {
      primaryNav.setAttribute("toggle", "false");
      b1.setAttribute("toggle", "false");
      b2.setAttribute("toggle", "false");
    }
  };
  return (
    <div className="header">
      <div className="header-main-con">
        <div className="empty"></div>
        <h1 className="header-main" onClick={() => navigate("/")}>
          ylcharan
        </h1>
        <div onClick={() => HandleToggle()} className="hambrgur">
          <div toggle="false" className="hame-line-1"></div>
          <div className="invis"></div>
          <div toggle="false" className="hame-line-2"></div>
        </div>
      </div>
      <div toggle="false" className="header-list">
        <h3
          className="header-subs"
          onClick={() => {
            HandleToggle();
            navigate("/about");
          }}
        >
          <div className="wrapper">About</div>
        </h3>
        <h3
          className="header-subs"
          onClick={() => {
            HandleToggle();
            navigate("/resume");
          }}
        >
          <div className="wrapper">resume</div>
        </h3>
        <h3
          className="header-subs"
          onClick={() => {
            HandleToggle();
            navigate("/projects");
          }}
        >
          <div className="wrapper">projects</div>
        </h3>
        <h3
          className="header-subs"
          onClick={() => {
            HandleToggle();
            navigate("/contact");
          }}
        >
          <div className="wrapper">contact</div>
        </h3>
      </div>
    </div>
  );
};

export default Header;
