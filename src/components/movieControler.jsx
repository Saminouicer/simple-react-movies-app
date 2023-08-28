import React, { useContext } from 'react'
import {AiFillEye} from'react-icons/ai'
import {AiFillEyeInvisible} from'react-icons/ai'
import {CiCircleRemove} from'react-icons/ci'
import { ContextMovies } from '../context/context'
import { actionType } from '../context/actionType'

const MovieControler = (props) => {

    const contextProvider=useContext(ContextMovies)
  return (
    props.type==='watched'?
    (
     
        <div className='bg-black/40 p-2 w-[90px] left-1/2 translate-x-[-50%] top-[200px] rounded-lg hidden absolute btnControler justify-between'>
        <button  onClick={()=> {contextProvider.action({type:actionType.remove_from_watched_and_add_to_watchlist,payload:props.data})}}><AiFillEyeInvisible className='text-white hover:text-green-500 duration-300' size={25}/></button>
        <button onClick={()=>{contextProvider.action({type:actionType.remove_from_watched,payload:props.data})}}><CiCircleRemove className='text-white hover:text-green-500 duration-300' size={25}/></button>
       </div>
  
    ):
  (
  
        <div className='bg-black/40 p-2 w-[90px] left-1/2 translate-x-[-50%] top-[200px] rounded-lg  hidden absolute btnControler justify-between'>
        <button onClick={()=>{contextProvider.action({type:actionType.add_to_watched,payload:props.data})}}><AiFillEye className='text-white hover:text-green-500 duration-300' size={25}/></button>
        <button onClick={()=>{contextProvider.action({type:actionType.remove_from_watchlist,payload:props.data})}}><CiCircleRemove className='text-white hover:text-green-500 duration-300' size={25}/></button>
       </div>
 
  )
  )
}

export default MovieControler