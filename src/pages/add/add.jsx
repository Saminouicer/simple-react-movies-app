import React ,{useEffect, useState} from 'react'
import Moviecard from'./moviecard'

const Add = () => {

  const [searchValue, setsearchValue]=useState('')
  const [movies,setmovies]=useState([])
  const handleSearchValue=(e)=> {
    setsearchValue(e.target.value)
  }
  
  useEffect(()=>{fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=b49ed427`).then(res=>res.json())
  .then(data=>{
    if(data.Search) {
      setmovies(data.Search)
    }
  })}
  ,[searchValue])
  
  return (
    <div className='container mx-auto p-10'>
      <div className='mx-auto mb-4 w-[400px]'>
          <input onChange={handleSearchValue}  type="text" placeholder='search for movies' className='text-white p-4 bg-slate-600 w-full focus:outline-none rounded-lg'/>
      </div>
      {movies.length > 0 && <ul className='w-[400px] mx-auto  '>
          {movies.map((movie)=> {
            return <li key={movie.imdbID}><Moviecard data={movie}/></li>
          })}
        </ul>}
    </div>
  )
}

export default Add