import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import styles from "./index.module.css";

function Footer(props) {
  let footer = props.footer[0];
  return (
    <div className={styles["footer-container"]}>
      <p>{footer.footer_title}</p>
      <p>{footer.copyright_text}</p>
      <div>
        <FaLinkedin className={styles["icon"]} size="5vh" color="black" />
        <FaTwitterSquare className={styles["icon"]} size="5vh" color="black" />
        <FaGithubSquare className={styles["icon"]} size="5vh" color="black" />
      </div>
    </div>
  );
}

export default Footer;
