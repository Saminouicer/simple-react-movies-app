import React, { createContext, useEffect, useReducer } from 'react'
import {reduce} from'./reduce.js'

export const ContextMovies=createContext(null)


const Context = (props) => {

  const initialstate={
    watchlist:localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')):[],
    watched:localStorage.getItem('watched')?JSON.parse(localStorage.getItem('watched')):[]
  }


  const [state,dispatch]=useReducer(reduce,initialstate)
  useEffect(()=> {
    localStorage.setItem('watched',JSON.stringify(state.watched))
    localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
  },[state])

  return (
   <ContextMovies.Provider value={{watched:state.watched,watchlist:state.watchlist,action:dispatch}}>{props.children}</ContextMovies.Provider >
  )
}

export default Context