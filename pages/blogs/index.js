import Link from "next/link";
import fetchData from "../../fetchData";

function blogs(props) {
  let blogs = props.allBlogs;
  return (
    <div>
      <h1>Sports Blog</h1>
      {/* all cards container */}
      <div>
        {blogs.map((blog, i) => {
          return (
            // individual cards container
            <div key={i}>
              <p>
                {i + 1} ---> {blog.blog_title}
              </p>
              <img src={blog.blog_image.url} alt="Sport" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  let allBlogs = await fetchData({ contentType: "blog_rendering_backend" });
  return {
    props: {
      allBlogs: [...allBlogs],
    },
  };
};

export default blogs;
