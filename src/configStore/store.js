import { createStore, combineReducers ,applyMiddleware} from 'redux' 
import thunk from 'redux-thunk'
import postReducer from '../reducer/postReducer'
// import taskReducer from '../reducers/taskReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        posts:postReducer,
    }),applyMiddleware(thunk))
    return store
}
export  default configureStore