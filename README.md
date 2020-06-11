# neigri 个人react 组件

## Install
```cmd
npm install cr-react-ui

yarn add cr-react-ui

```
## Usage
使用组件
```js
import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import { Model, Drawer } from 'cr-react-ui'
import 'cr-react-ui/lib/index.css'

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

```
### 按需加载
 如果你使用了 babel，那么可以使用 babel-plugin-import 来进行按需加载，加入这个插件后。配置```.babelrc.js```文件：
```js
module.exports = {
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    [
      "import",{
        "libraryName": "cr-react-ui",
        "libraryDirectory": "lib",
        customName: (name) => {
          return `cr-react-ui/lib/${name}` // 核心配置 根据你自己的组件目录配置
        },
        customStyleName: (name) => {
          return `cr-react-ui/lib/${name}/index.css`
        }
      },
    ]
  ]
}

```
### 1.弹窗 Model
```js
import { Model } from 'cr-react-ui'

<Model  visvble={visvble} onCancel={() =>set(false)}>
  <div className="box">
  </div>
</Model>
```
##### API
| 属性 | 说明 | 类型 | 默认值 |
| ------------ | ------------- | ------------ | ------------- |
| visible | 对话框是否可见  | boolean | - |
| maskClosable | 点击蒙层是否允许关闭  | boolean | false  |
| zIndex | 设置 Modal 的 z-index  | Number | 1000  |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调  | function(e) | - |

### 2.抽屉 Drawer
```js
import { Drawer } from 'cr-react-ui'

<Drawer visvble={visvble1} zIndex={1001} onCancel={() =>set1(false)}>
  <div className="box"></div>
</Drawer>
```
##### API
| 属性 | 说明 | 类型 | 默认值 |
| ------------ | ------------- | ------------ | ------------- |
| visible | 对话框是否可见  | boolean | - |
| maskClosable | 点击蒙层是否允许关闭  | boolean | false  |
| zIndex | 设置 Modal 的 z-index  | Number | 1000  |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调  | function(e) | - |
| position | 抽屉的方向  | top right bottom left | top |

### 3.消息提示 Toast
```js
import { Toast } from 'cr-react-ui'

Toast.warning(text) 警告消息
Toast.error(text)  错误消息
Toast.success(text) 成功消息

```


