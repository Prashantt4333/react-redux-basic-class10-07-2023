import {legacy_createStore as createStore, applyMiddleware  } from "redux"
import thunk from "redux-thunk";

let initialData =[
   
]


let rootReducer = (oldState=initialData,action)=>{
    let newState = oldState;
    switch(action.type){
        
        case'ADD_USER_DATA':
            return[
                ...newState,
                ...action.payload
            ]
            break;
        default:
            return newState;
    }
}


export const store = createStore(rootReducer,initialData,applyMiddleware(thunk));