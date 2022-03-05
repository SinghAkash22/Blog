import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {useHistory} from "react-router-dom";

const BlogDetail=()=>
{
    const {id}=useParams()
    const {data:blog,error,isPending}=useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();
    const handleclick=()=>
    {
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
history.push('/');
        })
    }
    return(
        <div className='blog-details'>
            {isPending && <div>Loding...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by  {blog.aurthor}</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleclick}>Delete</button>
                </article>
            )}

        </div>
    );

}
export default BlogDetail;