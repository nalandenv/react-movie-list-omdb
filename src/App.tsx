import axios from "axios";
import { useEffect, useState } from "react"
import { Repo } from "./Repo";
import { Pagination } from "./Pagination";

export const Paginate = () =>{
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(()=>{
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    },[]);

    //Logic for pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    //change page
    const paginate = (pageNumber:any) =>{
        setCurrentPage(pageNumber)
    }
    const prev = (pageNumber:any) => {
        if(currentPage == 1){
            return;
        }
        setCurrentPage(currentPage-1);
    }
    const next = (pageNumber:any) => {
        if(currentPage == Math.round(posts.length/postsPerPage)){
            return;
        }
        setCurrentPage(currentPage+1);
    }
    return(
        <div>
            <h1>List</h1>
            <Repo posts = {currentPosts} loading={loading}/>
            <div className="pagination" style={{display:"flex"}}>
            <button onClick={prev}>prev</button>
            <Pagination postsPerPage={postsPerPage} totalPosts= {posts.length} paginate={paginate}/>
            <button onClick={next}>next</button>
            </div>
        </div>
    )
}
