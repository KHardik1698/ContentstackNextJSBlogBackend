import fetchData from "../../fetchData";

function blogs(props) {
  let blogs = props.allBlogs;
  return (
    <div>
      <h1>Sports Blog</h1>
      {blogs.map((blog, i) => {
        return (
          <div key={i}>
            <p>{blog.blog_title}</p>
          </div>
        );
      })}
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
