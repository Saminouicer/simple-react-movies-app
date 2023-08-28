import React, { useContext } from 'react'
import { ContextMovies } from '../../context/context'
import WatchedMovie from '../watched/watchedMovie'

const Watched = () => {

  const contextProvider=useContext(ContextMovies)

  return (
    <div className='container mx-auto py-6 '>
    <div className='flex justify-between pb-10'>
      <h1 className='font-bold text-3xl'>Your Movies List</h1>
      <span className='bg-green-500 font-bold p-2 rounded-full'>
        {contextProvider.watched.length} {contextProvider.watched.length === 1 ?"movie":"movies"} 
      </span>
    </div>
    {
      contextProvider.watched.length > 0 ?
      (<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {contextProvider.watched.map((movie)=> {
          return <li key={movie.imdbID} className='shadow-xl rounded-md '><WatchedMovie data={movie} type='watched'/></li>
        })}
      </ul>): (<h1 className='text-center text-2xl '>Your watched movies list is empty</h1>)
    }
  </div>
  )
}

export default Watched