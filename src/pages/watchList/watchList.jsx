import React, { useContext } from 'react'
import WatchListMovies from './watchListMovies'
import { ContextMovies } from '../../context/context'

const WatchList = () => {

  const contextProvider=useContext(ContextMovies)

  return (
    <div className='container mx-auto py-6 '>
      <div className='flex justify-between pb-10'>
        <h1 className='font-bold text-3xl'>Your Movies List</h1>
        <span className='bg-green-500 font-bold p-2 rounded-full'>
          {contextProvider.watchlist.length} {contextProvider.watchlist.length ===1?'movie':'movies'}
          </span>
      </div>
      {
        contextProvider.watchlist.length > 0 ?
        (<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {contextProvider.watchlist.map((movie)=> {
            return <li key={movie.imdbID} className='shadow-xl rounded-md '><WatchListMovies data={movie} type='watchlist'/></li>
          })}
        </ul>): (<h1 className='text-center text-2xl '>Your movies list is empty</h1>)
      }
    </div>
  )
}

export default WatchList