const buffer = new Buffer.from("Nishana");
buffer.write("code");//buffer had limited memmory the for charecter overwrite for character from "nishana"
console.log(buffer.toString());
console.log(buffer);//the buffer contains the row binary data that is displayed when we consoled
// {
//     type: 'Buffer',     
//     data: [
//       78, 105, 115, 104,
//       97, 110,  97      
//     ]
//   }// can get a charactersets numbers of the string
console.log(buffer.toJSON())