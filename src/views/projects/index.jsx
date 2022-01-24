import Intro from "../../components/intro";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../images/road_final.png";

gsap.registerPlugin(SplitText);
const Project = () => {
  useEffect(() => {
    const tl = gsap.timeline({ ease: "power2.inOut", delay: 4.9 });
    const linespilter = document.querySelectorAll(".ls");

    console.log(linespilter);
    const splitChars = new SplitText(linespilter, {
      type: "lines",
    });
    tl.from(".project .divider", { width: 0 }).from(splitChars.lines, {
      x: "-150%",
      duration: 0.8,
      stagger: 0.02,
      ease: "power2.out",
    });
  }, []);
  return (
    <Intro title="projects">
      <div className="project">
        <h1 className="ls">Projects</h1>
        <div className="divider"></div>
        <div className="project-image-contaier">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="swiper-slide wrapper">
                <img src={img1} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide wrapper">
                <img src={img1} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide wrapper">
                <img src={img1} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide wrapper">
                <img src={img1} alt="img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Intro>
  );
};

export default Project;
