import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import './Drawer.scss';


function Model (props){

  let { children, visvble, onCancel, zIndex, maskClosable = false, position = 'top' } = props;

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
    <div ref={modelDom} className={`cr-drawer cr-drawer-${position}`} style={{zIndex}}>
      <div ref={maskDom} className={`cr-drawer-mask fade-into`} onClick={ () => !maskClosable && onCancel()}></div>
      <div ref={conterDom} className="cr-drawer-conter" >
        <div className="cr-drawer-body" onClick={stop}>
          <span className="cr-drawer-close" onClick={onCancel}>x</span>
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
          modelDom.current.classList.add('cr-drawer-open');
        }, 100)
      }else {
        // maskDom.current.classList.remove('cr-modal-mask-hidden');
        modelDom.current.classList.add('cr-drawer-open');
        setTimeout( () => {
          maskDom.current.classList.add('fade-out');
        }, 100)
      }
    }else{
      if(ref.current){
        maskDom.current.classList.remove('fade-out');
        modelDom.current.classList.remove('cr-drawer-open');
        setTimeout( () => {
          // maskDom.current.classList.add('cr-modal-mask-hidden');
          modelDom.current.classList.remove('cr-drawer-open');
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