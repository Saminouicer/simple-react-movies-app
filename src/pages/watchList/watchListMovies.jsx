import React,{useContext} from 'react'
import MovieControler from '../../components/movieControler';
import {actionType} from'../../context/actionType'



const WatchListMovies = (props) => {

    const {Poster,Title,Type,Year,imdbID}=props.data;

  return (
    <div className=' movie relative'>
        <img src={Poster} alt="" className='h-[350px] w-full rounded-t-md object-cover' />
       <h1 className='p-2 font-bold text-center'>{Title}</h1>
       <MovieControler type={props.type} data={props.data}/>
    </div>
  )
}

export default WatchListMovies