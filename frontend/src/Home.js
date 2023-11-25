import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:5000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && blogs.length > 0 && <BlogList blogs={blogs} /> }
      {blogs && blogs.length == 0 && <p>No blog found</p>} 
    </div>
  );
}
 
export default Home;
