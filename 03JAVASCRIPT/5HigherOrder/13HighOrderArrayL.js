

// for of

const arr = [1,2,3,4,5]

for (const num of arr){
        // console.log(num);
}

const str = "Hello world"
for(const s of str){
        // console.log(`Each char is ${s}`);
}


// Maps
const map = new Map();
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
// console.log(map)

for(const [key,value] of map){
        // console.log(key,':-',value)
}


const myObject = {
        'game1': 'NFS',
        'game2':'Spiderman'
}
for(const key of myObject){
        // console.log(key)
}

