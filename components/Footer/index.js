import styles from "./index.module.css";

function Footer(props) {
  let footer = props.footer[0];
  return (
    <div className={styles["footer-container"]}>
      <p>{footer.footer_title}</p>
      <p>{footer.copyright_text}</p>
    </div>
  );
}

export default Footer;
