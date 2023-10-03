import {ActionTypes} from "./actionTypes";
import {StateType,State} from "./state";

export  const counterReducer =(state:typeof State, action:ActionTypes):typeof State=>{
    switch(action.type){
        case "increment":
            return {count:state.count + action.step} as StateType
        case "decrement":
            return {count:state.count - action.step} as StateType
    }
    return {count:state.count} as StateType;
}