const run=()=>{
    let nm=document.querySelector("#nm").value
 let tt=`<div>
<div id="s">${nm}</div>
</div>`
let ss=document.querySelector("#ss")
ss.innerHTML=tt
console.log(nm)
return false;
}
