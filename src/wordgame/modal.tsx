import React, { useEffect } from 'react';
import { GameContext, IAppContext } from './AppContext';

export const Modal:React.FC = () =>{
    let {appState} = React.useContext<IAppContext>(GameContext);
    let refv = React.useRef<HTMLDivElement>(null);
    const onClose = ()=>{
        if(refv && refv.current){
            refv.current.className="modal";
        }
    }
    return (<div id="myModal" ref= {refv} className={`modal ${appState.message ? " display":''}`}>
    <div className="modal-content">
      <span className="close"  onClick={onClose}>&times;</span>
      <p>{appState.message}</p>
    </div>
  </div>)
}