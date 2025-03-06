let store='';
const val=(arg)=>{
    let show= document.querySelector('#show')
    store = store + arg;
    show.innerHTML = store;
}

const cal =()=>{
    let show= document.querySelector('#show')
    
    show.innerHTML = eval(store);
    store =eval(store);
}
const del=()=>{
    store = store.slice(0,store.length-1);
    let show =document.querySelector('#show')
    show.innerHTML=store;
}

const ac =() =>{
    store='';
    letshow=document.querySelector('#show');
    show.innerHTML = store;

}

const square=() =>{
    store= eval(store*store);
    letshow=document.querySelector('#show');
    show.innerHTML = store;
}