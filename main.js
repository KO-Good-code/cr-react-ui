import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
// import { Model } from './src';
import  {Model}  from 'cr-react-ui';

function App(param) { 

  const [visvble, set ] = useState(false)

  return (
    <div >
      <div onClick={() => set(true)}>click</div>
      <Model  visvble={visvble} maskClosable onCancel={() =>set(false)}>
        12456
      </Model>
    </div>
  )
 }

ReactDom.render(<App />, document.getElementById('root'));