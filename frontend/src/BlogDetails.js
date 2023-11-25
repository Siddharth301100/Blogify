import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch("http://localhost:5000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    axios
      .delete("http://localhost:5000/blogs/" + blog._id)
      .then(() => {
        alert("Blog deleted successfully");
        history.push("/");
      })
      .catch((error) => {
        alert("Error deleting blog");
      });
    // fetch("http://localhost:5000/blogs/" + blog._id, {
    //   method: "DELETE",
    // }).then((res) => {
    //   alert("Blog deleted successfully");
    //
    // });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
