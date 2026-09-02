

// for loop

for(let i=0; i<6; i++){
    console.log(i);
}

for(let i = 0; i<=10; i++){
    for(let j=0; j<=10; j++){
        console.log(`inner loop value ${j} and outer loop ${i}`);
    }
}

// break and continue

for(let i=0; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i);
}

for(let i=0; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}