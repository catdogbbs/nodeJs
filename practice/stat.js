'use strict'

var fs=require('fs');

var stat = fs.statSync('ht.txt');
console.log(stat);
console.log(stat.isFile());
console.log(stat.isDirectory());
console.log(stat.size);
console.log('birth time: ' + stat.birthtime);
console.log('modified time: ' + stat.mtime);