import React, { ReactElement, useEffect } from "react";
import { GameContext, IAppContext } from "./AppContext";
import {Points} from './Points';
export const WordDisplay:React.FC = ():ReactElement =>{


let {appState,restart} = React.useContext<IAppContext>(GameContext); 

let result =appState.word.split('').map((letter:string,index:number)=>{
    return <span key={index} className={`not-revealed small ${ 
        appState.letterChoices.includes(letter) ? "reveal-anim" : ""
    }`} >{appState.letterChoices.includes(letter) ? letter : ''}</span>
})
return <div className="block flex-center">{result}<Points points={appState.guesses}></Points> <button onClick={()=>{restart()}} className='btn primary large'>RESTART</button></div>
}

