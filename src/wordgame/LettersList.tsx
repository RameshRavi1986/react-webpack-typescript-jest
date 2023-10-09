import React, { ReactElement,MouseEventHandler } from "react";
import { GameContext, IAppContext } from "./AppContext";
let uniqueKey = Math.random();
export const LettersList:React.FC = ():ReactElement =>{
let letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let {appState,onLetterClicked} = React.useContext<IAppContext>(GameContext)
 const onClicked = (event:any):void =>{
    onLetterClicked(event.target.innerHTML)
}
let results =letters.split('').map((letter:string,index:number):ReactElement=>{
    return <button className="btn primary small" disabled ={appState.letterChoices.includes(letter)} key={uniqueKey+index}>{letter}</button>
})
return <div className="block" onClick={(e)=>{onClicked(e)}}>{results}</div>
}