'use strict'

var fs=require('fs');

var rs = fs.createReadStream('ht.txt','utf-8');

// rs.on('data',function(chunk){
	// console.log('CHUNK');
	// console.log(chunk);
// });
// rs.on('end',function(data){
	// console.log(data);
	// console.log('END');
// });
// rs.on('error',function(err){
	// console.log('ERR');
	// console.log(err);
// });
var ws = fs.createWriteStream('rt.txt');
rs.pipe(ws);