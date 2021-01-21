import Link from "next/link";

function Header(props) {
  let header = props.header[0];
  return (
    <div>
      <img src={header.header_logo.url} alt="Logo" />
      <p>{header.team_name}</p>
      <div>
        {header.navigation_links.map((link) => {
          return (
            <div>
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
