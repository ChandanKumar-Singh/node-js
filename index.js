const http = require("http");
const data = require("./data");
const fs = require("fs");

var x = 5;

printNum = () => {
  // console.log(x*x)
  // console.log('My name is Chandan Kumar Singh'.red);
  // console.log('My village is Mirzapur'.green);
  // console.log(__dirname);
  // console.log(__filename);
  // fs.writeFileSync(`${__dirname}/files/apples.txt`,"This is an apples");
};
printNum();
console.log(process.argv[2]);
fs.writeFileSync(process.argv[2],process.argv[3]); // creating files from agrv

http
  .createServer((req, res) => {
    res.writeHead(201, { "Content-Type": "applicationjson" });
    res.write(JSON.stringify(data));

    res.end();
  });
