'use strict';

var fs = require('fs'),
url=require('url'),
path=require('path'),
http=require('http');

var root = path.resolve(process.argv[2] || '.');
console.log('Static root dit: ' + root);

var server = http.createServer(function(request,response){
	var pathname = url.parse(request.url).pathname;
	console.log('pathname : ' + pathname);
	var filepath = path.join(root,pathname);
	console.log('filepath : ' + filepath);	
	fs.stat(filepath,function(err,stats){
		if (!err && stats.isFile()) {
			console.log('200 ' + request.url);
			
			response.writeHead(200);
			
			fs.createReadStream(filepath).pipe(response);
		} else if (!err && stats.isDirectory()) {
			openFs(dir,filepath);
		} else {
			// 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
		}
	});
});

var openFs = function (dir,filepath) {
	var files = fs.readdir(dir);
	for (var i=0;i<files.length;i++) {
		filepath = path.join(filepath,files[i]);
			fs.stat(filepath,function(err,stats){
		if (!err && stats.isFile()) {
			console.log('200 ' + request.url);
			response.writeHead(200);
			fs.createReadStream(filepath).pipe(response);
		} else if (!err && stats.isDirectory()) {
			openFs(stats,filepath);
		} else {
			// 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
		}
	});
	}
}


server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080');