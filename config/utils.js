//引入glob
const path = require('path');
var glob = require('glob')

//entries函数
var entries = function() {
    var jsDir = path.resolve(__dirname, '../src/js')
    var entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
    var map = {};

    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }
    return map;
}


module.exports.getView = function getView(globPath, flag) {
    let files = glob.sync(globPath);

    let entries = {},
        entry, dirname, basename, pathname, extname;

    files.forEach(item => {
        entry = item;
        dirname = path.dirname(entry); //当前目录
        extname = path.extname(entry); //后缀
        basename = path.basename(entry, extname); //文件名
        pathname = path.join(dirname, basename); //文件路径
        if (extname === '.html') {
            entries[pathname] = './' + entry;
        } else if (extname === '.js') {
            entries[basename] = entry;
        }
    });

    return entries;
};



var mode = 'development';
var modeStr = process.env.npm_lifecycle_script;
var modeReg = new RegExp("--mode=([^ ]*)(&| )");
var modeGroud = modeStr.match(modeReg);
if(modeGroud != null){
    mode = modeGroud[1];
}

module.exports.mode = mode;