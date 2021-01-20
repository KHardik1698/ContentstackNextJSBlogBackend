import fetchData from "../../fetchData";

function blogs(props) {
  //   console.log(props.singleBlog);
  return (
    <div>
      <h1>A Blog</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  let singleBlog = await fetchData({ entryId: "", contentType: "" });
  return {
    props: {
      singleBlog: { ...singleBlog },
    },
  };
};

export default blogs;
