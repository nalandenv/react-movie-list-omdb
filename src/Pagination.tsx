export const Pagination = ({postsPerPage, totalPosts, paginate}:any) => {
    const pageNumber = [];
    for(let i = 1; i <= Math.round(totalPosts/postsPerPage); i++){
        pageNumber.push(i);
    }
    return(
        <nav>
            <div>
            {pageNumber.map((number:any)=>{
                return <button key={number} onClick={()=> paginate(number)} >{number}</button>
            })}
            </div>
        </nav>
    )
}