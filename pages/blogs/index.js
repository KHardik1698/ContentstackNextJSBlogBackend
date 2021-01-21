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
              <Link href={`/blog/${blog.uid}`}>
                <div>
                  <p>
                    {i + 1} ---> {blog.blog_title}
                  </p>
                  <img src={blog.blog_image.url} alt={blog.blog_title} />
                </div>
              </Link>
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
