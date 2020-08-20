import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import './model.scss';


function Model (props){

  let { children, visvble, onCancel, zIndex, maskClosable = false, destroy = false } = props;

  //  主要div
  let ref = useRef(null);
  
  let modelDom = useRef(null);
  //  遮罩
  let maskDom = useRef(null);
  //  内容
  let conterDom = useRef(null);

  // 阻止事件捕获
  const stop = e => {
    e.stopPropagation()
  }


  const modal = (
    <div ref={modelDom} className="cr-Model" style={{zIndex}}>
      <div ref={maskDom} className={`cr-model-mask fade-into`}></div>
      <div ref={conterDom} className="cr-model-conter fade-into" onClick={ () => maskClosable && onCancel()}>
        <div className="cr-model-body" onClick={stop}>
          <span className="cr-model-close" onClick={onCancel}>x</span>
          {children}
        </div>
      </div>
    </div>
  );

  useEffect( () => {
    if(visvble) {
      if(!ref.current){
        ref.current = document.createElement("div");
        document.body.appendChild(ref.current);
        ReactDom.render(modal, ref.current);
        setTimeout(() => {
          maskDom.current.classList.add('fade-out');
          conterDom.current.classList.add('fade-out');
        }, 100)
      }else {
        ReactDom.render(modal, ref.current);
        maskDom.current.classList.remove('cr-modal-mask-hidden');
        conterDom.current.classList.remove('cr-modal-mask-hidden');
        setTimeout( () => {
          maskDom.current.classList.add('fade-out');
          conterDom.current.classList.add('fade-out');
        }, 100)
      }
    }else{
      if(ref.current){
        maskDom.current.classList.remove('fade-out');
        conterDom.current.classList.remove('fade-out');
        setTimeout( () => {
          maskDom.current.classList.add('cr-modal-mask-hidden');
          conterDom.current.classList.add('cr-modal-mask-hidden');
          if(destroy){
            document.body.removeChild(ref.current);
            ref.current = null;
          }
        }, 500)
      }
    }
  },[visvble])

  // 组件销毁时删除弹窗dom
  useEffect(() =>{
    return () => {
      if(ref.current){
        document.body.removeChild(ref.current);
        ref.current = null
      }
    }
  },[])

return null;

}
export default Model