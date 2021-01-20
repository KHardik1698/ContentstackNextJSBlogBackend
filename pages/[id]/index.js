import fetchData from "../../fetchData";

function blogs(props) {
  //   console.log(props.singleBlog);
  return (
    <div>
      <h1>A Blog</h1>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let singleBlog = await fetchData({
    entryId: `${context.params.id}`,
    contentType: "",
  });
  return {
    props: {
      singleBlog: { ...singleBlog },
    },
  };
};

export const getStaticPaths = async () => {
  let allBlogs = await fetchData({ contentType: "" });
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
