import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import { Model, Drawer } from './src';
import '@/assets/scss/main.scss'
// import  {Model}  from 'cr-react-ui';

function App(param) { 

  const [visvble, set ] = useState(false)
  const [visvble1, set1 ] = useState(false)

  return (
    <div className="main">
      <div onClick={() => set(true)}>click</div>
      <div onClick={() => set1(true)}>click</div>
      <Model  visvble={visvble} onCancel={() =>set(false)}>
        <div className="box">
        </div>
      </Model>
      <Drawer visvble={visvble1} zIndex={1001} onCancel={() =>set1(false)}>
        <div className="box"></div>
      </Drawer>
    </div>
  )
 }

ReactDom.render(<App />, document.getElementById('root'));