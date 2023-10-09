import React, { ReactElement, useEffect } from 'react';
import { AppState,IAppState } from './AppState';
import axios from 'axios';

export interface IAppContext{
    appState:IAppState,
    onLetterClicked:Function,
    restart:Function
}
export let GameContext = React.createContext<IAppContext>({appState:AppState,onLetterClicked:()=>{},restart:()=>{}})
export const GameContextProvider:React.FC<{children:ReactElement}> = ({children}):ReactElement =>{
    let [appState,setAppState] = React.useState<IAppState>(AppState);
    useEffect(()=>{
      fetchNewWord();
    },[])
    const fetchNewWord = () =>{
        axios.get('https://random-word-api.herokuapp.com/word').then((data:any)=>{
            setAppState({...AppState,word:data.data[0].toUpperCase()})
        })
    }
    const getMessage = (letter:string):string =>{
        let message = '';
        let letterChoices = appState.letterChoices.slice(0);
        letterChoices.push(letter);
        let list = appState.word.split('').filter((letter:string)=>{
            return letterChoices.includes(letter);
    })
    if(list.length === appState.word.length){
        message = "Congratulations you completed the game";
    }   
    return message;
    }

    const getGuesses = (letter:string):number =>{
        let guesses = appState.guesses;
        if(!appState.word.includes(letter)){
                return guesses-1;
        }
        return guesses;
    }
    const restartGame = (event:any)=>{
        fetchNewWord();
    }
    const onLetterClicked = (letter:string) =>{
        let message =getMessage(letter);
        let guesses = getGuesses(letter);
        message = (guesses < 1) ? "hints are expired":message;
        setAppState({...appState,letterChoices:[...appState.letterChoices,letter],message:message,guesses:guesses}) 
    }

    return <GameContext.Provider value={{appState,onLetterClicked,restart:restartGame}}>
        {children}
    </GameContext.Provider>
}


