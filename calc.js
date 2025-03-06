let store='';
const cal=(any)=>{
    let display=document.querySelector('.display')
    store=store+any;
    display.innerHTML=store;
}

const eq=()=>{
    let display=document.querySelector('.display')
    display.innerHTML=eval(store);
    store=eval(store);
}

const back=()=>{
    store=store.slice(0,store.length-1);
    let display=document.querySelector('.display')
    display.innerHTML=store;
}

const cl=()=>{
    store='';
    let display=document.querySelector('.display')
    display.innerHTML=store;
}
