
// all odd values 1-20 (not including a check on 20) using for loop:
console.log("Odd values from 1-20 ");

for(i=0; i<20; i++){
    if(i%2 !=0){
        console.log(i);
    }
}

// using while loop to check all numbers div by 3 starting at 100 down to 0
console.log("Values from 100-0 divisible by 3 ");
var i = 100;
while(i>0){
    if(i % 3 == 0){
        console.log(i)
    }
    i--;
}

//loop to write a specific sequence: 
console.log("Print decrimenting 1.5");
for(i=4; i>-4; i-=1.5){
    console.log(i);
}


// adds all of the values from 1-100
console.log("Print the sum of all values from 1-100 ");
var sum=0;
for(i=0; i <=100; i++){
    sum+=i;
}
console.log(sum);

//factorial multiply all values from 1-12
console.log("Product of all values from 1-12 ");
var product=1;
for(i=1; i <=12; i++){
    product*=i;
}
console.log(product);


