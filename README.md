vanke diyH5

## 目录结构

    ├─  package.json        # 项目配置
    ├─  README.md           # 项目说明
    ├─  node_modules        # npm依赖包
    ├─  webpack.base.js     # webpack配置文件
    ├─  webpack.dev.js      # webpack配置文件
    ├─  webpack.prov.js     # webpack配置文件
    ├─  server.js           # node服务
    ├─  config.js           # 配置项目资源基础路径
    ├─  .babelrc            # babel配置
    │
    │
    ├─  src                 # 前端代码
    │    │
    │    ├─ App.js               #  项目入口文件
    │    ├─ index.html           #  首页
    │    ├─ data.js              #  图片数据文件，由build-data-json.js生成，运行`npm run dev`或`npm run build`、`npm run build-json:prov`等命令即生成
    │    ├─ css                  #  样式文件夹
    │    ├─ js                   #  脚本文件夹
    │    ├─ media                #  背景音乐文件夹 
    │    └─ img                  #  图片文件夹
    │
    │
    ├─  utils               # 工具文件
    │    │
    │    └─ build-data-json.js   # 用于自动生成图片数据文件，并复制打包图片
    │    
    │
    └  Demo                 # 案例文件


## 运行

安装依赖模块：
```
npm install
```

预览Demo示例：
```
node server.js
```

生成图片data.js图片数据文件：
```
npm run build-json:dev    # 开发环境
npm run build-json:prov   # 生产环境
```

生成打包文件：
```
npm run build
```

开发环境启动本地服务：
```
npm start / npm run dev
```

## 说明

项目由于需要按一定格式自动生成图片json数据，用于项目预加载以及图片拖拽元素的遍历生成，而webpack打包图片会打包处理文件，改变图片的目录结构，没法满足这一要求，所以我自己封装了方法来实现这个功能，即utils/build-data-json.js，可通过执行`npm run build-json`命令来实现。(直到目前尚未找到相关的webpack plugin可以实现这一功能需求的，如果有知悉哪个插件可以实现的，还望不吝告之，非常感谢！！！)


```
// App.js
const config = {
    tabBtnNames: { // 配置选项名
        "background": "背景”,
        "Furniture": "家具",
        "Kid": "人物",
        "Cat": "猫",
        "Dog": "狗",
    },
    backgroundSetable: true, // 是否开启背景设置, 默认值为false
    backgroundGroupName: 'background', // 指定背景图片的目录名, 默认值为'background'
    rotatable: true, // 元素是否可旋转, 默认值为true
    scalable: true // 元素是否可缩放, 默认值为true
}
App.init(config)
```

## 截图

 ![配图3](/screenshot/img3.jpg "配图3")


## 最后

项目案例中的图片借用了相关H5的图片，未做商用，若相关版权方觉得构成侵权，请联系我(QQ: 418291886)，可立马删除。本案例有些简陋，仅供学习参考。# diy_h5
