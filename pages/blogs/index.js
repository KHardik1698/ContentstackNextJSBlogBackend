import fetchData from "../../fetchData";

function blogs(props) {
  //   console.log(props.blogs);
  return (
    <div>
      <h1>All Blogs</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  let allBlogs = await fetchData({ contentType: "" });
  return {
    props: {
      allBlogs: { ...allBlogs },
    },
  };
};

export default blogs;
