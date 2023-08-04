

const FilmYear = ({data, setInfo}) => {

  // console.log(data);
  return (
    <div className="d-flex flex-column" >
            {
                data.map(item=> 
                <button onClick={()=>setInfo(item.data)} type="button" className=" border-4   bg-info mb-2 p-1 rounded-2 fs-4 fw-bold text-secondary border-bottom border-warning " key={item.id}>{item.date}</button> )
            }
        </div>
  )
}

export default FilmYear