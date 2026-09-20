

// Process => this object provides information about, and control OverconstrainedError, the current Node.js process. 
// Process.argv => returns an array containing the command-line arguments passed when the Node.js process was lauched. 

// const { version } = require("react");
// console.log(process.argv);

// let args = process.argv;
// for(let i=2; i<args.length; i++){
//     console.log("hello to ", args[i]);
// }


// CommonJS Module System
// const math = require("./math");
// console.log(math);
// console.log(math.sum(2,3));

// require vs import 
// import {sum} from "./math.js"
// we can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.
// Loading is synchronous for 'require' but can be asynchronous for 'import'. 
// ES Module
// import {sum, PI} from "./math.js";
// console.log(sum(1,2));


// const info = require("./name");
// console.log(info[1].name1);

// NPM (Node Package Manager) => npm is the standard package manager for Node.js 
// 1 library of package 
// 2 command line tool 

// Installing Packages => npm install<-package name-> 

// node_modules => The node_modules folder contains every installed dependency for your PromiseRejectionEvent. 
// package-Lock.json => it records the exact version of every installed dependency, including its sub-dependencies and their ViewTransitionTypeSet. 


// package.json => The package.json file contains descriptive and functional metadata about a project , such as a name, version, and dependencies. 
// npm init 


// Local v/s Global
// npm install -g<- package name ->
// npm link <- package name -> 


// const figlet = require("figlet");
// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// Library v/s Framework 
// library => a library is a collection of pre-written code that can be used to perform specific tasks. ex axios 
// Framework => A framework is a set of pre-written code that provides a structure for developing software applications  ex express
 
// Express => A Node.js web application framework that helps us to make web applications. It is used for server side programing 



