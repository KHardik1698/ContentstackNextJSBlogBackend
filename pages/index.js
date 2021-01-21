import fetchData from "../fetchData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";
import styles from "../styles/index.module.css";

function Home(props) {
  return (
    <div>
      <Header header={props.header} />
      <div className={styles["home-container"]}>
        <h1>We Love Sports</h1>
        <div className={styles["typewriter"]}>
          <Typewriter
            options={{
              strings: [
                "Hello",
                "Welcome to Sports Blogs",
                "Get ready to read some fascinating Blogs about Sports",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
              pauseFor: 1000,
            }}
          />
        </div>
        <ParticlesBg type="cobweb" bg={true} />
      </div>
      <Footer footer={props.footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  let header = await fetchData({ contentType: "hardik_blog_rendering_header" });
  let footer = await fetchData({ contentType: "hardik_blog_rendering_footer" });
  return {
    props: {
      header: [...header],
      footer: [...footer],
    },
  };
};

export default Home;
