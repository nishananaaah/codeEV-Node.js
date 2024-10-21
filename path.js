const path =require("node:path");
// console.log(__filename);//represents full path to the file
// console.log(__dirname);//represents full to path to folder where this file is located

// console.log(path.basename(__filename));//returns the last portion of the path
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename));//returns the extension of the path
// console.log(path.extname(__dirname))

//  console.log(path.parse(__filename))//returns an object whose represnents the significant element of the path 
//  console.log(path.format(path.parse(__filename))) 

// console.log(path.isAbsolute(__filename))//is the absolute path? returns a boolean 
// console.log(path.isAbsolute("./data.json"))// ./ is realative;

// console.log(path.join("folder1","folder2","index.html"))
// console.log(path.join("/folder1","folder2","index.html"))
// console.log(path.join("/folder1","//folder2","index.html"))
// console.log(path.join("/folder1","//folder2","../index.html"))
// console.log(path.join(__dirname,"./data.json"))

console.log(path.resolve("folder1","folder2","index.html"))
console.log(path.resolve("/folder1","folder2","index.html"))
console.log(path.resolve("/folder1","//folder2","index.html"))
console.log(path.resolve("/folder1","//folder2","../index.html"))// "/"the forward slash is indicating the absolute path 
console.log(path.resolve(__dirname,"./data.json"))//resolve he sequence of path/path segmants in to in an absolute path