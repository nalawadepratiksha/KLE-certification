let fs = require('fs');

// // //perfrom CRUD op
//  let data = "hii today's weather is cool";

// // //task 1 create file and write into it

// // fs.writeFile('demo.txt',data,{

// //     encoding:'utf-8'
// // },(err)=>{

// //     if(err) throw err;
// //     console.log("file is created succfully");
// // })

// //way2 fore creating

// fs.writeFileSync("demo.txt",data);
// //  (err)=>{

// // if(err) throw err;
// //       console.log("file is created succfully");
// //     };

// //task2
// let fileread = fs.readFileSync('demo.txt');

// console.log(fileread.toString());

// //update

// fs.appendFileSync('demo.txt','\n i hope weather is well days');

// //delete file

// fs.unlinkSync('demo.txt');

let data1 = "hello rajakaaaa";

fs.writeFileSync('demo.txt',data1);

//read

let readfile = fs.readFileSync('demo.txt');
console.log(readfile,toString());


//truncate'

fs.truncateSync('demo.txt');