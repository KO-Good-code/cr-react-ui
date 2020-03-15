module.exports = {
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    [
      "import",{
        "libraryName": "cr-react-ui",
        "libraryDirectory": "lib",
        "camel2DashComponentName": false, // 是否需要驼峰转短线
        "camel2UnderlineComponentName": false, // 是否需要驼峰转下划线
        // customName: (name) => {
        //   return `cr-react-ui/lib/${name}/${name}.js` // 核心配置 根据你自己的组件目录配置
        // },
        // "style": true
        customStyleName: (name) => {
          return `cr-react-ui/lib/${name}/index.css`
        }
      },
    ]
  ]
}
