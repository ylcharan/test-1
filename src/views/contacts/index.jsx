import Intro from "../../components/intro";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Contacts = () => {
  return (
    <Intro title="contacts">
      <div className="contacts">
        <h1>Contact</h1>
        <div className="divider"></div>
        <p>
          contact me:{" "}
          <a href="mailto:ylcharanofficial@gmail.com">
            ylcharanofficial@gmail.com
          </a>
        </p>
        <div className="icons">
          <a href="https://github.com/ylcharan" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://instagram.com/ylcharan" target="_blank">
            <AiOutlineInstagram />
          </a>
          <a href="https://twitter.com/ylcharan" target="_blank">
            <AiFillTwitterSquare />
          </a>
        </div>
      </div>
    </Intro>
  );
};

export default Contacts;
