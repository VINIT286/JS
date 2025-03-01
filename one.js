// f
// function add(){
// let num1 =parseInt(document.querySelector('.num1').value);
// let num2 =parseInt(document.querySelector('.num2').value);
// window.alert(num1+num2);
// return false;
//}

// function run(){
//     let b1= document.querySelector('body');
//     b1.style.backgroundColor ="red"; // backgroundcolor is writern in camelcase
//     let b2 = document.querySelector('.d1');
//     b2.style.backgroundColor="black";
//     b2.style.color="white";
//     b2.style.fontSize="20px";

// }
// function reset(){
//     let b1= document.querySelector('body');
//     b1.style.backgroundColor ="white";
//     let b2 = document.querySelector('.d1');
//     b2.style.backgroundColor="white";
//     b2.style.color="black";
//     b1.style.fontSize="16px";
// }
// function run(){
//     let b=document.querySelector("body");
//     b.style.backgroundColor = "red";
//     let b1=document.querySelector('.d1');
//     b1.style.backgroundColor="black";
//     b1.style.color="white";
//     b.style.fontSize="26px"
// }

// function reset(){
//     let b=document.querySelector("body");
//     b.style.backgroundColor = "white";
//     let b1=document.querySelector('.d1');
//     b1.style.backgroundColor="white";
//     b1.style.color="black";
//     b.style.fontSize="16px"
// }
let num =1;
function run(){
    if(num%2==1){
    let vedio1= document.querySelector('video');
    vedio1.src="./v1.mp4";
    num=0
    }
    else if(num%2==0){
        let vedio1=document.querySelector('video');
        vedio1.src="./Sulthan Video Song (Hindi) - KGF Chapter 2 - Rocking Star Yash -Prashanth Neel -Ravi Basrur -Hombale.mp4";
        num =1
    }

    // let img1= document.querySelector('.img1')
    // img1.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-_KGy66DOqPquBwoQw1o4rLuRZLJW4tyyQ&s";
    // img1.alt="imagefound"
}