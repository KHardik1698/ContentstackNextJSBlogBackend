import fetchData from "../fetchData";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home(props) {
  return (
    <div>
      <Header header={props.header} />
      <h1>Home</h1>
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
