// console.log(Math.random());

// const str = "1234";
// console.log(Number(str));

// const n ="5";
// const m =5;
// console.log(typeof n, typeof m);


// let arr = [1,2,4,5];
// let max = arr[0];
// let min = arr[0];

// for(let i=1; i<arr.length; i++){
//     if(arr[i]>max)max =arr[i];
//     if(arr[i]<min)min=arr[i];
// }

// console.log("Max",max ,"min", min);

// console.log("Second Method");

// let arr1 = [1, 2, 3, 5];
// const maxi = Math.max(...arr1);  
// const mini = Math.min(...arr1);
// console.log("Max:", maxi, "Min:", mini);


// console.log("----------------------------------");


// let num = 5;
// console.log( typeof String(num));
// console.log(typeof num.toString());
// console.log("----------------------------------");

// console.log("Even or Odd");



// console.log("----------------------------------");

// function checknum(n){
//     if(n%2==0){
//         console.log("Even number",n);
        
//     }else{
//         console.log("odd number",n);
    
//     }
// }
// checknum(10);

// console.log("----------------------------------");

// function checkRange(n,max,mai){   
//     if(n>=max && n<=mai){
//         console.log("Number is Range",n);
//     }else{
//         console.log("Number is out of Range ",n);
//     }
// }

// checkRange(20,1,15);

// console.log("----------------------------------");


// let arrsum = [1,3,4,4,5]
// let sum = 0; 
// for(let i=0; i<arrsum.length; i++){
//     sum+=arrsum[i];
// }
// console.log(sum);
// console.log("----------------------------------");
// console.log("Aver arr ")

// let arravg = [1,2,3,5]
// let sumavg = arravg.reduce((acc,curr)=>acc+curr,0)/arravg.length;
// console.log(sumavg);






// function fib(n){
//     fib=[0,1] // start
//     for(let i=2; i<n; i++){
//         fib[i] = fib[i-1]+ fib[i-2];
        
//     }
//         return fib
// }
// console.log(fib(5));


// console.log("prime");

// function isPrime(n){
//     if(n<=1)
//         return false;

//     for(let i=2; i<Math.sqrt(n); i++){
//         if(n%i===0) return false
//     }
//     return true

// }
// console.log(isPrime(7));
// console.log(isPrime(10));


// function fact(n){
//     if(n<0) return "Invalid n"
//     let fact =1;
//     for(let i=1; i<=n; i++){ 
//         fact*=i
//     }
//     return fact
// }
// console.log(fact(5));



// function digitscount(n){
//     if(n==0)return 1;
//     let count= 0
//     while(n>0){
//         count++;
//         n=Math.floor(n/10);
//     }
//     return count;
// }
// console.log(digitscount(587654));

// console.log("----------------------------------");


// function digitssum(n){
//     n =Math.abs(n)
//     let sum =0;
//     while(n>0){
//         sum+=n%10;
//         n=Math.floor(n/10)
//     }
//     return sum;
// }
// console.log(digitssum(7654));


// console.log("Reverse Number");

// function revNum(n){
//     let rev =0;
//     // n=Math.abs(n);
//     while(n>0){
//         rev=rev*10+(n%10); // rev*10+remender
//         n = Math.floor(n/10);
//     }
//     return rev;
// }
// console.log(revNum(987786));

// console.log("Ascending order");
// let arrsort =[1,6,3,2,4];
//     arrsort.sort((acrr,curr)=>acrr-curr,0)
//     console.log(arrsort);

//     console.log("Descending order");
    
//     let arrsort1 = [1,2,3,5,7,4];
//     arrsort1.sort((acc,curr)=>curr-acc, 0)
//     console.log(arrsort1);
    
console.log("Frist Methed");
let remove = [1,3,5,2,3,4,3,2,1]

let newArray = remove.reduce((acc,curr)=>{
        if(!acc.includes(curr)){
            acc.push(curr)
        }
        return acc;
},[])
console.log(newArray);

console.log("Second Methed");
let newArray2 =[...new Set(remove)];
console.log(newArray2);



