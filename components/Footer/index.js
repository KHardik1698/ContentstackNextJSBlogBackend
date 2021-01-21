import Link from "next/link";

function Footer(props) {
  let footer = props.footer[0];
  return (
    <div>
      <p>{footer.footer_title}</p>
      <p>{footer.copyright_text}</p>
    </div>
  );
}

export default Footer;
