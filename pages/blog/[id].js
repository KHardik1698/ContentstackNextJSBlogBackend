import Link from "next/link";
import fetchData from "../../fetchData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./index.module.css";

function blogs(props) {
  let blog = props.singleBlog;
  return (
    <div>
      <Header header={props.header} />
      <h1 className={styles["blog-header"]}>Sports Blog</h1>
      <div className={styles["container"]}>
        <p className={styles["blog-title"]}>{blog.blog_title}</p>
        <div className={styles["blog-image-container"]}>
          <img className={styles["blog-image"]} src={blog.blog_image.url} alt={blog.blog_title} />
        </div>
        <p className={styles["blog-content"]}>{blog.blog_content}</p>
        <aside className={styles["related-blogs-container"]}>
          <p>Related to this...</p>
          {blog.related_blogs.map((blog, i) => {
            return (
              <div key={i}>
                <Link href={blog.related_blog[0].uid}>
                  <p className={styles["related-blog"]}>{blog.blog_title}</p>
                </Link>
              </div>
            );
          })}
        </aside>
      </div>
      <Footer footer={props.footer} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  let singleBlog = await fetchData({
    entryId: `${context.params.id}`,
    contentType: "blog_rendering_backend",
  });
  let header = await fetchData({ contentType: "hardik_blog_rendering_header" });
  let footer = await fetchData({ contentType: "hardik_blog_rendering_footer" });
  return {
    props: {
      singleBlog: { ...singleBlog },
      header: [...header],
      footer: [...footer],
    },
  };
};

export const getStaticPaths = async () => {
  let allBlogs = await fetchData({ contentType: "blog_rendering_backend" });
  let paths = allBlogs.map((blog) => {
    return {
      params: {
        id: blog.uid,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default blogs;
