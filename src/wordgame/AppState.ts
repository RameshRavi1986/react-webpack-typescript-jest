import React, { useMemo } from 'react';
export interface IAppState{
    word:string,
    letterChoices:Array<string>,
    guesses:number,
    message:string
}

export const AppState:IAppState={
    word:'',
    letterChoices:[],
    guesses:3,
    message:''
}