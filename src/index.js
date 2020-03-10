import React, {useEffect} from 'react';
import ReactDom from 'react-dom'
// import './assets/scss'; // 使用less的情况
import App from 'cr-react-ui'

function Apps(){

  const app = 123456


  useEffect(() => {
    console.log(App)
  })

  return  (
    <div>
      <App />
      {app}
    </div>
  )
}


export default Apps