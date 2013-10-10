## 简介

autosize是一个让textarea 高度自适应的组件

* 版本：1.0
* 作者：shiba
* 支持KISSY 1.2+
* demo：[http://gallery.kissyui.com/autosize/1.0/demo/index.html](http://gallery.kissyui.com/autosize/1.0/demo/index.html)


## 初始化组件


    S.use('gallery/autosize/1.0/index', function (S, Autosize) {
         var autosize = new Autosize({node:"#ta"});
    })

## 快速上手

html:

    <textarea id="ta" cols="30" rows="10">Autosize .</textarea>

kissy1.2下需要gallery的包配置：

    KISSY.config({
        packages:[
            {
                name   : 'gallery',
                path   : 'http://a.tbcdn.cn/s/kissy/',
                charset: 'utf-8'
            }
        ]
    });

初始化

     S.use('gallery/autosize/1.0/index', function (S, Autosize) {
        new Autosize({
            node: "#ta",
            callback: function () {
                console.log(arguments);
            }
        });
     })


## API说明

### Class
Autosize

### 参数说明

#### Config

* node {必选} selector textarea的选择器或者HTMLElement对象,支持数组
* callback {可选} 每次resize textarea之后的回调函数

### 事件

* autosize.resize textarea resize事件, 当textarea通过程序改变值, 可以手动触发resize