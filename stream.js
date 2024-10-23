const fs=require("node:fs");
const zlib =require("node:zlib")//zlib module zlib algorithm it has built in and transform stream
const gzib =zlib.createGzip()//allows to create zip files
const readableStream = fs.createReadStream("./file.txt",{
    encoding:"utf-8",
    highWaterMark:2
});
readableStream.pipe(gzib).pipe(fs.WriteStream("./file2.txt.gz"))

const writableStream = fs.createWriteStream("./file2.txt");
readableStream.pipe(writableStream);//pipes
// readableStream.on("data",(chunk)=>{
//  console.log(chunk);
//  writableStream.write(chunk)
// })