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