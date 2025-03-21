const sh =()=>{
    const r1 = ()=>{
        aa = document.querySelector('#div1');
        bb = document.querySelector('#website');
        aa.style.display ="block";
        bb.style.filter = "blur(2px)";

    }
    setTimeout(r1,2000)
}
// a = document.querySelector('#b1');
// a.addEventListener('click',sh)
const bh =()=>{
        aa = document.querySelector('#div1');
        bb=document.querySelector('#website');
        aa.style.display = "none";
        bb.style.filter = "blur(0px)";
    }
b = document.querySelector('#b2');
b.addEventListener('click',bh)