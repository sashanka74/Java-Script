let sum = 0
for (let i = 1; i<=15; i++){
    sum += i
}
console.log(sum)

let sum2 = 0
let j = 1
while(j<=15){
    sum2 += j
    j++
}
console.log(sum2)



let row1 = 5;
for (let n=1; n<=row1; n++){
    let pattern = " ";
    for (let o=1; o<=n; o++){
        pattern+=o+" ";
    }
    console.log(pattern);
}


let i1 = 1;
let row = 5;
while(i1<=row){
    let pattern = " ";
    let j = 1;
    while(j<=i1){
        pattern+="*"
        j++;
    }
    console.log(pattern)
    i1++;
}

let row2 = 5;
let pattern1;
for(let p=1; p<=row2; p++){
    pattern1 = " ";
   for(let q=1; q<=row2-p; q++){
    pattern1+=" ";
   }
   for(let r=1; r<=p; r++){
    pattern1+="* ";
   }
   console.log(pattern1); 
}



