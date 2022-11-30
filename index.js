const http = require("http");
const data = require("./data");
const fs = require("fs");
const { MongoClient } = require('mongodb');
// printNum = () => {
// console.log(x*x)
// console.log('My name is Chandan Kumar Singh'.red);
// console.log('My village is Mirzapur'.green);
// console.log(__dirname);
// console.log(__filename);
// fs.writeFileSync(`${__dirname}/files/apples.txt`,"This is an apples");
// };
// printNum();
// console.log(process.argv[2]);
// fs.writeFileSync(process.argv[2],process.argv[3]); // creating files from agrv
// console.log
// (__dirname,'/node_modules');
// fs.readdir(__dirname,(err,files)=>{files.forEach(element => {
// console.log('this is ',element)
// })});
// http
//   .createServer((req, res) => {
//  res.writeHead(201, { "Content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));

//     res.end();
//   }).listen(5001);

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }
  main()

// async function getData() {
//   console.log("response 1");

//   let result = await client.connect(
//   );
//   console.log("response 2");
//   let db = result.db(databaseName);
//   console.log(db);
//   let collection = db.collection("videos");
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }
console.log("response l");
// getData();
