export const Thumbnail = ({Title, Year, imdbID, Poster}:any) =>{
    return(
        <div key={imdbID} className="card" style={{width:"200px"}}>
            <img className="card-img-top" style={{width:"90%"}} src={Poster} alt="" />
            <div className="card-body">
            <p>{Title}</p>
            <p>{Year}</p>
            </div>
        </div>
    )
}