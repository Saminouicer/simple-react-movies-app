import React, { useContext } from 'react'
import { ContextMovies } from '../../context/context'
import {actionType} from'../../context/actionType'



const Moviecard = (props) => {

    const {Poster,Title,Type,Year,imdbID}=props.data;
    const contextProvider=useContext(ContextMovies)


    const addtowatched=(movie)=> {
        contextProvider.action({
          type:actionType.add_to_watched,
          payload:movie,
        })
    }
    
    const addtowatchlist=(movie)=> {
        contextProvider.action({
          type:actionType.add_to_watchlist,
          payload:movie,
        })
    }

    let watchedDisable=contextProvider.watched.find((movie)=> {
      return movie.imdbID===props.data.imdbID 
    })
    
    let watchlistDisaple=contextProvider.watchlist.find((movie)=> {
      return movie.imdbID===props.data.imdbID 
    })
    
     watchedDisable=watchedDisable?true:false
     watchlistDisaple=watchedDisable?true:watchlistDisaple?true:false
    

  return (
    <div className='mb-4 flex gap-4 shadow-lg bg-[#eee]' >
        <img className='w-[90px] h-[120px] object-cover' src={Poster} alt="" />
        <div className='flex-1'>
            <p className='font-bold text-md'>{Title}</p>
            <span className='text-gray-500'>{Year}</span>
            <div className='flex gap-4 mt-4'>
                <button disabled={watchlistDisaple} onClick={()=>{addtowatchlist(props.data)}} className='text-white hover:bg-green-800 disabled:bg-green-300 duration-300 text-sm bg-green-700 px-2 py-2 rounded-lg'>Add to watchList</button>
                <button disabled={watchedDisable} onClick={()=>{addtowatched(props.data)}} className='text-white hover:bg-green-800 disabled:bg-green-300 duration-300 text-sm bg-green-700 px-2 py-2 rounded-lg'>Add to watched</button>
            </div>
        </div>
    </div>
  )
}

export default Moviecard