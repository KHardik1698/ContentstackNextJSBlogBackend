import Link from "next/link";
import fetchData from "../../fetchData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./index.module.css";

function blogs(props) {
  let blogs = props.allBlogs;
  return (
    <div>
      <Header header={props.header} />
      <h1 className={styles["blog-header"]}>Sports Blog</h1>
      <div className={styles["container"]}>
        {blogs.map((blog, i) => {
          return (
            <div key={i}>
              <Link href={`/blog/${blog.uid}`}>
                <div className={styles["card-container"]}>
                  <p className={styles["blog-title"]}>{blog.blog_title}</p>
                  <div className={styles["blog-image-container"]}>
                    <img
                      className={styles["blog-image"]}
                      src={blog.blog_image.url}
                      alt={blog.blog_title}
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer footer={props.footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  let allBlogs = await fetchData({ contentType: "blog_rendering_backend" });
  let header = await fetchData({ contentType: "hardik_blog_rendering_header" });
  let footer = await fetchData({ contentType: "hardik_blog_rendering_footer" });
  return {
    props: {
      allBlogs: [...allBlogs],
      header: [...header],
      footer: [...footer],
    },
  };
};

export default blogs;
