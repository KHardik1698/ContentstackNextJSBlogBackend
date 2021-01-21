import Link from "next/link";
import fetchData from "../../fetchData";

function blogs(props) {
  // console.log(props.singleBlog);
  let blog = props.singleBlog;
  return (
    <div>
      <h1>A Blog</h1>
      <div>
        <h1>{blog.blog_title}</h1>
        <img src={blog.blog_image.url} alt="" />
        <p>{blog.blog_content}</p>
        <div>
          {blog.related_blogs.map((blog) => {
            return (
              <div>
                <Link href={blog.related_blog[0].uid}>
                  <a>{blog.blog_title}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let singleBlog = await fetchData({
    entryId: `${context.params.id}`,
    contentType: "blog_rendering_backend",
  });
  return {
    props: {
      singleBlog: { ...singleBlog },
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
