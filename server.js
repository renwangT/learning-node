const http = require('http')
const fs = require('fs')
const multiparty = require('multiparty'); //读取前端传过来的formData
// var unzip = require("unzip"); //解压
// const pump = require('pump');
const compressing = require('compressing');
const path = require('path');
function startServer(router, handle) {
    const server = http.createServer((request, response) => {
        if(request.url === '/api/v1/upload') {
            const form = new multiparty.Form();
            form.uploadDir = "./upload";
            form.parse(request, function(err, fields, files) {
                //files即为上传图片的信息
                console.log(fields)
                console.log(files)
                // compressing.zip.compressDir('nodejs-compressing-demo', 'nodejs-compressing-demo.zip')
                // .then(() => {
                //     console.log('success');
                // })
                // .catch(err => {
                //     console.error(err);
                // });
                
                let zipPath = files.file[0].path;
                console.log(zipPath)
                let dirName = files.file[0].originalFilename.replace(/\.zip/, '');
                //解压缩
                compressing.zip.uncompress(zipPath, 'yoo.qq.com')
                .then(() => {
                    console.log('success');
                    function getAllDirs(mypath='.'){
                        const items = fs.readdirSync(mypath);
                        let result = [];
                        console.log('items-------------', items)
                        // 遍历当前目录中所有的文件和文件夹
                        items.map(item => {
                            let temp = path.join(mypath, item);
                            console.log('temp====================', temp)
                            // 若当前的为文件夹
                            if( fs.statSync(temp).isDirectory() ){
                                result.push( item ); // 存储当前文件夹的名字
                                // 进入下一级文件夹访问
                                result = result.concat( getAllDirs( temp ) );
                            }else{
                                result.push(item)
                            }
                        });
                        return result;
                    }
                    console.log(getAllDirs(dirName) );
                })
                .catch(err => {
                    console.error(err);
                });
                
                
            });
        }
        /*
        request.on("data",function(data){
            //打印
            console.log(data)
            fs.readFile(data, (err, data) => {
                console.log(data)
                // fs.writeFileSync('./hah.zip', data);

            })

        });
        */
        router(handle, request.url, response)
        console.log('Request received' + request.url);
        // if(request.url === '/' || request.url === '/home') {
        //     
        // } else if(request.url == '/review') {
            
        // } else if(request.url === '/api/v1/recodes') {
        //     response.writeHead(200, {'Content-type': 'application/json'})
        //     let sendInfo = {
        //         name: '张三',
        //         age: '18',
        //         job: 'doctor'
        //     }
        //     response.end(JSON.stringify(sendInfo))
        // } else {
        //     response.writeHead(200, {'Content-type': 'text/html'})
        //     fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response)
        // }
        // response.writeHead(200, {'Content-type': 'text/plain'})
        // let sendInfo = {
        //     name: '张三',
        //     age: '18',
        //     job: 'doctor'
        // }
        // let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
        // response.end('hello form out application')
        // response.end(JSON.stringify(sendInfo))
        // myReadStream.pipe(response)
    })
    server.listen(3000)
    console.log('Server started on localhost port 3000')
}

module.exports.startServer = startServer