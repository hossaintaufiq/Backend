// console.log("Hello, World!");


// let arr = [20,34,20,45,67,89,90,100,120,130,140,150,160,170,180,190,200 ];

// let arr2 = arr.map(function(val){
//     return val; 
// })


// console.log(arr2);



// let arr3 = arr.filter(function(val){
//     return val%3==0; 
// })


// let arr4= arr.forEach(function(val){
//     // return val + " Hello";
//     console.log(val + " Hello");
// })

// console.log(arr4);

// alert("Hello, World!");
// let arr = [20, 34, 20, 45, 67, 89, 90, 100, 120, 130, 140, 150, 160, 170, 180, 190, 200];


// var arr = [20, 34, 20, 45, 67, 89, 90, 100, 120, 130, 140, 150, 160, 170, 180, 190, 200];

// var i=0;

// for each loop 
// arr.forEach(function(val){
//     console.log("-->>"+" The value is "+val);
// })


// map loop 

// var arr2= arr.map(function(val){
//     return val*2; 
// })


// arr2.forEach(function(val){
//     console.log("-->>" + " The value is " + val);
// })
// // console.log(arr2);

// var newArr=arr2.filter(function(val){
//     return val%2==0;
// })

// console.log(newArr);


// var ans = arr2.find(function(val){
//     if(val==100){
//         return true;
//     }
//     else {
//         return false;
//     }
// }); 
// console.log(ans);



// function abcd(){
//     return 123; 
// }


// abcd(); 


var blob = await fetch(`https://randomuser.me/api/`); 

var res = await blob.json();

console.log(res);