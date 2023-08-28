import {actionType} from'./actionType'


export const reduce=(state,action)=> {

    switch(action.type){
        case(actionType.add_to_watchlist):
            return{
                ...state,
                watchlist:[...state.watchlist,action.payload]
            }
        case(actionType.add_to_watched):
            return{
                watched:[...state.watched,action.payload],
                watchlist:state.watchlist.filter((movie)=> {
                    return movie.imdbID!==action.payload.imdbID
                })
            }
            case(actionType.remove_from_watched):
            return{
                ...state,
                watched:state.watched.filter((movie)=> {
                    return movie.imdbID!==action.payload.imdbID
                })
            }
            case(actionType.remove_from_watchlist):
            return{
                ...state,
                watchlist:state.watchlist.filter((movie)=> {
                    return movie.imdbID!==action.payload.imdbID
                })
            }
            case(actionType.remove_from_watched_and_add_to_watchlist):
            return {
                watched:state.watched.filter((movie)=> {
                    return movie.imdbID!==action.payload.imdbID
                }),
                watchlist:[...state.watchlist,action.payload]
            }
            default:
                return state;
    }

}