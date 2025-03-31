const cl=()=>{
let nm=document.querySelector('#nm').value;
let em=document.querySelector('#em').value;
let num=document.querySelector('#num').value;
let im=document.querySelector('#im').value;

let tl=`<div>
<div><img src="${im}"</div>
<div> name =${nm}</div>
<div>email=${em}</div>
<div>mno.=${num}</div>
<div>`
let df=document.querySelector('#df')
df.innerHTML=tl
console.log(nm,em,num,im)
//print()
return false;
}