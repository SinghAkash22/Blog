
import BlogList from "./BlogList"
import useFetch from "./useFetch";


const Home=()=>{

    const {data:blogs,isPending,error}=useFetch( 'http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {/* eslint-disable-next-line array-callback-return */}
            {isPending && <div>Loding......</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!' />}

        </div>
    );
}
export  default  Home;