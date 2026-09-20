// module.exports => requiring files

// require() => a built-in function to include external modules that exist in separate FileSystem. 
// GPUShaderModule.exports => a special object 

// CommonJS Module System
// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14;
// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

// ES Module
export const sum = (a, b) => a+b;
export const mul = (a, b) => a*b;
export const g = 9.8;
export const PI = 3.14;


// module.exports => requiring directories 
// require() => a built-in function to include external modules that exist in separate files 
// module.exports = > a special object 