import {jest} from '@jest/globals';
import {  act, fireEvent, render } from '@testing-library/react';
import { LettersList } from './LettersList';
import { useContext } from 'react';
import React from 'react';
import { AppState } from './AppState';
import { GameContext, IAppContext } from './AppContext';


describe("Letter list componenet",()=>{
    let containerNew:any;
    let appState = Object.assign({},{...AppState,letterChoices:['A']})
    let mockContext = {appState,onLetterClicked:jest.fn((letter:string)=>{appState.letterChoices.push(letter)})};
    beforeEach(async ()=>{
        jest.spyOn(React,"useContext").mockImplementationOnce(()=>{
            return mockContext;
        })
        await act(async ()=>{
            let {container,debug}= render(<LettersList/>);
            containerNew = container;
           }) 
        
    })
    test("all alphabets are rendered",()=>{
        appState.letterChoices =[];
           let result =  containerNew.getElementsByClassName("btn primary");
           expect(result.length).toBe(26);
    })

    test("button click bubbles to parent div event",async()=>{
        appState.letterChoices =[];
        let result =  containerNew.getElementsByClassName("btn primary");
        await act(async()=>{
                fireEvent(result[0],new MouseEvent("click",{bubbles:true}))
        })
        expect(mockContext.onLetterClicked.mock.calls).toHaveLength(1);
        expect(mockContext.onLetterClicked.mock.calls[0][0]).toBe("A");
    })

    test("button button disabled if clicked",async()=>{
        let result =  containerNew.getElementsByClassName("btn primary");
        await act(async()=>{
                fireEvent(result[0],new MouseEvent("click",{bubbles:true}))
        })
        result =containerNew.getElementsByClassName("btn primary");
        expect(result[0].disabled).toBe(true);
        
    })
})