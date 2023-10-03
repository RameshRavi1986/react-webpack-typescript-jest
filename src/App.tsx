import React, { useReducer} from "react";
import {State,StateType} from "./state";
import {counterReducer} from './reducers'
import {ActionTypes} from "./actionTypes";

const App:React.FC = () =>{
    const [testValue, setTestValue] = React.useState<string>('');
    let changeTestValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTestValue('hello'+e.currentTarget.value);
    }
    return (
        <div>
            <input onChange={changeTestValue} value={testValue}/>
        </div>
    )
}
export default App;