// var num1 =50; //  we can re-declair variable in var
// var num2 =40; // we can also re-intialize variable in var
//  console.log(num1+num2);

//  let c=32; // we cannot re-decliar variable in let
//  c=89;     // we can re-intialize variable in let
//  console.log(c);

//  const d=67; // we cannot re-declair and re-intialize variable in const
//  console.log(d);
// function gh(){
//     console.log("Hello World")
// }

// function gh(){
//     let num1=23;
//     let num2;
//     let str='hey';
//     console.log(typeof (num2)); // undefined
//     console.log(typeof(num1)); // number
//     console.log(typeof(str));  // string // 1 character -----> 2byte space in js
//     let big=1234567890987654321n;
//     console.log((typeof(big)));
//     console.log("hello world");
// }

// function gh(){
//     let num1=parseInt(window.prompt("Enter number 1"));
//     if(num1%2==0){
//         window.alert("number is even");
//     }else{
//         window.alert("number is odd")
//     }
// }

// function gh(){
//     let num1=parseInt(window.prompt("Enter number 1"));
//     let num2=parseInt(window.prompt("Enter number 2"));
//     let operation=parseInt(window.prompt("Enter number-1 for add, 2 for substractioin, 3 for multiply,4 for divide, 5 for modulus"));
//     if(operation==1){
//         window.alert(`the sum of two number is ${num1+num2}`);
//     }else if (operation==2){
//         window.alert(`the sub of two number is ${num1-num2}`);
//     }else if (operation==3){
//         window.alert(`the mul of two number is ${num1*num2}`);
//     }else if (operation==4){
//         window.alert(`the div of two number is ${num1/num2}`);
//     }else if (operation==5){
//         window.alert(`the div of two number is ${num1%num2}`);
//     }
// }

function run (){
    let name = document.querySelector(`.name`).value;
    let email = document.querySelector(`.email`).value;
    let number = document.querySelector(`.number`).value;
    let password = document.querySelector(`.password`).value;
    console.log(name,email,number,password)
    return false;
}