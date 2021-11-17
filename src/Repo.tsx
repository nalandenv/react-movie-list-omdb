import React from "react";
export const Repo = ({posts, loading}:any) => {
    if(loading){
        return <h2>Loading...</h2>;
    }
    return(
        <ul>
            {
                posts.map((post:any) =>{
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>
    )
}