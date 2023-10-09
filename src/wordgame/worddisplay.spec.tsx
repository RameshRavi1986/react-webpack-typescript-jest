import React from 'react';
import {act, render,screen,cleanup, fireEvent} from '@testing-library/react'
import { WordDisplay } from './WordDisplay';
import {jest} from '@jest/globals'
import axios from 'axios';
import { AppState } from './AppState';

describe("App display letters",()=>{
    let containerNew:any;
    beforeEach(()=>{
       // jest.spyOn(axios,'get').mockResolvedValueOnce({data:["hello"]});
      
    })
    afterEach(()=>{
        cleanup();
    })
    
    const renderComponent = async()=>{
        await act(async ()=>{
            let {container,debug}= render(<WordDisplay/>);
            containerNew = container;
           }) 
    }
    test("check all letters are hidden",async()=>{
        jest.spyOn(React,"useContext").mockImplementationOnce(()=>{
            let appState = Object.assign({},AppState);
            appState.letterChoices =[];
            appState.word ="HELLO";
            return {appState:appState}
        })
       await renderComponent();
        let result =  containerNew.getElementsByClassName("not-revealed");
        expect(result.length).toBe(5)
    })

    test("check if a letter revealed",async()=>{
        jest.spyOn(React,"useContext").mockImplementationOnce(()=>{
            let appState = Object.assign({},AppState);
            appState.letterChoices =[];
            appState.word ="HELLO";
            appState.letterChoices.push('E');
            return {appState:appState}
        })
       await renderComponent(); 
         let result =  containerNew.getElementsByClassName("not-revealed");
         expect(result.length).toBe(5);
         expect(result[1].className).toBe("not-revealed small reveal-anim");
         expect(result[1].innerHTML).toBe("E");
     })

     test("check if a restart works",async()=>{
        let restart = jest.fn();
        jest.spyOn(React,"useContext").mockImplementationOnce(()=>{
            let appState = Object.assign({},AppState);
            appState.letterChoices =[];
            appState.word = "HELLO";
            appState.letterChoices.push('E');
            return {appState:appState,restart:restart}
        })
       await renderComponent(); 
         let result =  containerNew.getElementsByClassName("reveal-anim");
         expect(result.length).toBe(1);
         expect(result[0].className).toBe("not-revealed small reveal-anim");
         expect(result[0].innerHTML).toBe("E");
         await act(async()=>{ fireEvent(containerNew.getElementsByTagName("button")[0],new MouseEvent("click",{cancelable:true,bubbles:true}))});
         result =containerNew.getElementsByClassName("reveal-anim");
         expect(restart).toHaveBeenCalled()
     })
})