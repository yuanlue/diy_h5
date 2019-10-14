/*
 * 自动复制移动图片文件，同时生成图片数据Json
 */
const path = require('path');
const fs = require('fs');
const images = require('images');//node.js轻量级跨平台图像编解码库
const config = require('../config');
const assetsPublicPath = config[process.env.NODE_ENV].assetsPublicPath;
const stat = fs.statSync;
const staticImgPath = './src/images/vanke/gq';
const distPath = './dist/gq';

var obj = {
    "_res":
        [

            "/images/vanke/gq/Assest/loading/btn.png",
            "/images/vanke/gq/Assest/loading/text.png",
            "/images/vanke/gq/Assest/loading/title.png",
            "/images/vanke/gq/Assest/loading/title.png",
            "/images/vanke/gq/Room.jpg",
            "/images/vanke/gq/icon_arrow.png",
            "/images/vanke/gq/icon_arrow2.png",
            "/images/vanke/gq/icon_camera.png",
            "/images/vanke/gq/music_on.png",
            "/images/vanke/gq/music_off.png",
            "/images/vanke/gq/remove.png",
            "/images/vanke/gq/resize.png",
            "/images/vanke/gq/rotate.png"
        ],
    "Items1": [
        {
            "url": "/images/vanke/gq/Assest/Items1/1.png",
            "width": 63,
            "height": 84,
            "imgUrl": "/images/vanke/gq/Assest/Items1/a1.png",
            "iwidth": 750,
            "iheight": 1448,
            'logo':1
        },
        {
            "url": "/images/vanke/gq/Assest/Items1/2.png",
            "width": 63,
            "height": 84,
            "imgUrl": "/images/vanke/gq/Assest/Items1/a2.png",
            "iwidth": 750,
            "iheight": 1448,

        },
        {
            "url": "/images/vanke/gq/Assest/Items1/3.png",
            "width": 63,
            "height": 84,
            "imgUrl": "/images/vanke/gq/Assest/Items1/a3.png",
            "iwidth": 750,
            "iheight": 1448,

        },
        {
            "url": "/images/vanke/gq/Assest/Items1/4.png",
            "width": 63,
            "height": 84,
            "imgUrl": "/images/vanke/gq/Assest/Items1/a4.png",
            "iwidth": 750,
            "iheight": 1448,
            'logo':2

        },
        {
            "url": "/images/vanke/gq/Assest/Items1/5.png",
            "width": 63,
            "height": 84,
            "imgUrl": "/images/vanke/gq/Assest/Items1/a5.png",
            "iwidth": 750,
            "iheight": 1448,
        },
    ],
    "Items2": [
        {
            "url": "/images/vanke/gq/Assest/Items2/1.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/a1.png",
            'sex':1

        },
        {
            "url": "/images/vanke/gq/Assest/Items2/2.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/wa1.png?1",
            "sex":2

        },

    ],
    "Items3": [
        {
            "url": "/images/vanke/gq/Assest/Items3/1.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/a1.png",
            'sex':1
        },
        {
            "url": "/images/vanke/gq/Assest/Items3/2.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/a2.png",
            'sex':1
        },
        {
            "url": "/images/vanke/gq/Assest/Items3/3.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/a3.png",
            'sex':1
        },
        {
            "url": "/images/vanke/gq/Assest/Items3/4.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/a4.png",
            'sex':1
        },
        {
            "url": "/images/vanke/gq/Assest/Items3/5.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/a5.png",
            'sex':1
        },
        {
            "url": "/images/vanke/gq/Assest/Items3/w1.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/wa1.png",
            'sex':2
        },
        {
            "url": "/images/vanke/gq/Assest/Items3/w2.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/wa2.png",
            'sex':2
        },
        {
            "url": "/images/vanke/gq/Assest/Items3/w3.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/wa3.png",
            'sex':2
        },
        {
            "url": "/images/vanke/gq/Assest/Items3/w4.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/wa4.png",
            'sex':2
        },
        {
            "url": "/images/vanke/gq/Assest/Items3/w5.png",
            "width": 300,
            "height": 487,
            "imgUrl": "/images/vanke/gq/Assest/Items3/wa5.png",
            'sex':2
        },
    ],

    "Items4": [
        {
            "url": "/images/vanke/gq/Assest/Items4/1.png",
            "width": 200,
            "height": 200,
            "imgUrl": "/images/vanke/gq/Assest/Items4/a1.png",

        },
        {
            "url": "/images/vanke/gq/Assest/Items4/2.png",
            "width": 200,
            "height": 200,
            "imgUrl": "/images/vanke/gq/Assest/Items4/a2.png",

        },
        {
            "url": "/images/vanke/gq/Assest/Items4/3.png",
            "width": 200,
            "height": 200,
            "imgUrl": "/images/vanke/gq/Assest/Items4/a3.png",

        },
        {
            "url": "/images/vanke/gq/Assest/Items4/4.png",
            "width": 200,
            "height": 200,
            "imgUrl": "/images/vanke/gq/Assest/Items4/a4.png",

        },
        {
            "url": "/images/vanke/gq/Assest/Items4/5.png",
            "width": 200,
            "height": 200,
            "imgUrl": "/images/vanke/gq/Assest/Items4/a5.png",

        },
        {
            "url": "/images/vanke/gq/Assest/Items4/10.png",
            "width": 200,
            "height": 200,
            "imgUrl": "/images/vanke/gq/Assest/Items4/a10.png",

        },
        {
            "url": "/images/vanke/gq/Assest/Items4/6.png",
            "width": 750,
            "height": 1448,
            "imgUrl": "/images/vanke/gq/Assest/Items1/al11.png",
            'visible':'1'

        },
        {
            "url": "/images/vanke/gq/Assest/Items4/7.png",
            "width": 750,
            "height": 1448,
            "imgUrl": "/images/vanke/gq/Assest/Items1/al12.png",
            'visible':'1'

        },
        {
            "url": "/images/vanke/gq/Assest/Items4/9.png",
            "width": 750,
            "height": 1448,
            "imgUrl": "/images/vanke/gq/Assest/Items1/al41.png",
            "visible":'2'

        },
        {
            "url": "/images/vanke/gq/Assest/Items4/8.png",
            "width": 750,
            "height": 1448,
            "imgUrl": "/images/vanke/gq/Assest/Items1/al42.png",
            'visible':'2'

        },

    ],
}

var copy = function(src, dst){
    let dirDevide = path.parse(src).name;
    
    var bool = (dirDevide != 'Assest' && path.parse(src).dir.indexOf("Assest") != -1);
    // console.log(path.parse(src))
    if(bool){
        obj[dirDevide] = [];
    }
    //读取目录
    var paths = fs.readdirSync(src);
    paths.forEach(function(pth, index){
        var _src = src + '/' + pth;
        var _dst = dst + '/' + pth;
        var readable;
        var writable;
        var st = stat(_src);
        
        if(st.isFile()){
            readable = fs.createReadStream(_src);//创建读取流
            writable = fs.createWriteStream(_dst);//创建写入流
            readable.pipe(writable);
            // console.log(_src.substr(2))
            if(bool){
                var img = images(_src.substr(2))
                // console.log(path.parse(_src))
                var item = {
                    // id: index,
                    url: assetsPublicPath + _src.substr(6),
                    width: img.width(),
                    height: img.height()
                };
                obj[dirDevide].push(item)
            }
            obj["_res"].push(assetsPublicPath + _src.substr(6))
        }else if(st.isDirectory()){
            // exists(_src, _dst, copy);
        }
    })
}

function exists(src, dst, callback){
    let exists = fs.existsSync('dist');
    if(!exists) {
        fs.mkdirSync('dist');
    }
    mkdirs(dst)
    callback(src, dst);
}
function mkdirs(dirpath, callback) {
    //检测某个路径下的文件是否存在
    let exists = fs.existsSync(dirpath);
    if(exists) {
        callback && callback();
    } else {
        //尝试创建父目录，然后再创建当前目录
        mkdirs(path.dirname(dirpath), function(){
            fs.mkdirSync(dirpath);
        });
    }
};
exists(staticImgPath, distPath, copy);

var data = 'export default '+ JSON.stringify(obj);
// var data = 'var DATA = '+ JSON.stringify(obj);
fs.writeFile('./src/data.js', data,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("src数据写入成功！");
})