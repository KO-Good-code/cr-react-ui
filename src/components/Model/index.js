import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import './model.scss';


function Model (props){

  let { children, visvble, onCancel, zIndex, maskClosable } = props;

  let ref = useRef(null);

  const stop = e => {
    e.stopPropagation()
  }

  const modal = (
    <div className="cr-Model" style={{zIndex}}>
      <div className={`cr-model-mask fade-into`}></div>
      <div className="cr-model-conter fade-into" onClick={ maskClosable && onCancel}>
        <div className="cr-model-body" onClick={stop}>
          <span className="cr-model-close" onClick={onCancel}>x</span>
          {children}
        </div>
      </div>
    </div>
  );

  useEffect( () => {
    let mask = document.querySelector('.cr-model-mask');
    let conter = document.querySelector('.cr-model-conter');
    if(visvble) {
      if(!ref.current){
        ref.current = document.createElement("div");
        document.body.appendChild(ref.current);
        ReactDom.render(modal, ref.current);
        setTimeout(() => {
          document.querySelector('.cr-model-mask').classList.add('fade-out');
          document.querySelector('.cr-model-conter').classList.add('fade-out');
        }, 100)
      }else {
        mask.classList.remove('cr-modal-mask-hidden');
        conter.classList.remove('cr-modal-mask-hidden');
        setTimeout( () => {
          mask.classList.add('fade-out');
          conter.classList.add('fade-out');
        }, 100)
      }
    }else{
      if(ref.current){
        mask.classList.remove('fade-out');
        conter.classList.remove('fade-out');
        setTimeout( () => {
          mask.classList.add('cr-modal-mask-hidden');
          conter.classList.add('cr-modal-mask-hidden');
        }, 500)
      }
    }
  },[visvble])

return null;

}
export default Model