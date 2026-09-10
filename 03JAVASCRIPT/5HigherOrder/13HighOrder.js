

const pro = ['js','rb','py','java','cpp']
// pro.forEach( function (val){
//     console.log(val)
// })

// pro.forEach( (val) =>{
//     console.log(val)
// })

// function print(item){
//     console.log(item);
// }
// pro.forEach(print)

// pro.forEach( (item,index,arr)=> {
//     console.log(item,index,arr)
// })

const proCoding = [
    {
        languageName : "javascript",
        languagefileName : "js",

    },
    {
        languageName : "java",
        languagefileName : "java",
        
    },
    {
        languageName : "python",
        languagefileName : "py",
        
    }
]

proCoding.forEach( (item) => {
    console.log(item.languageName);
})