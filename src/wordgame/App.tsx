import React, { ReactElement } from 'react';
import { GameContext, GameContextProvider } from './AppContext';
import { AppState, IAppState } from './AppState';
import { WordDisplay } from './WordDisplay';
import {Modal} from './modal'
import { LettersList } from './LettersList';



export const App:React.FC = ():ReactElement =>{


        return(<GameContextProvider>
            <div>
            <WordDisplay/>
            <LettersList/>
            <Modal/>
            </div>
        </GameContextProvider>)
}