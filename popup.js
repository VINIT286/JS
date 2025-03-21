const pop =()=>{
    const v1 = ()=>{
        a = document.querySelector('#div');
        b = document.querySelector('#p');
        a.style.display ="block";
        b.style.filter = "blur(5px)";

    }
    setTimeout(v1,5000);
}
const pop1 =()=>{
    a = document.querySelector('#div');
    b=document.querySelector('#p');
    a.style.display = "none";
    b.style.filter = "blur(0px)";
}
b = document.querySelector('#b1');
b.addEventListener('click',pop1)