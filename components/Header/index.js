import Link from "next/link";
import styles from "./index.module.css";

function Header(props) {
  let header = props.header[0];
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-logo-container"]}>
        <img className={styles["header-logo"]} src={header.header_logo.url} alt="Logo" />
      </div>
      <p className={styles["team-name"]}>{header.team_name}</p>
      <div className={styles["navigation-links"]}>
        {header.navigation_links.map((link, i) => {
          return (
            <div key={i}>
              <Link href={link.href}>
                <p>{link.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
