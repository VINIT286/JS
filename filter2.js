const s =()=>{
    let op=document.querySelector('#op').value;
    let search=document.querySelector('#search').value;
    console.log(op,search)
    let obj;
    let store;
    if(op=='pn'){
        store=obj.filter(e=>e.pname==search)
    }
    else if(op=='pp'){
        store=obj.filter(e=>e.pprice==search)
    }
    else if(op=='pb'){
        store=obj.filter(e=>e.pbrand==search)
    }
    store.map()
    return false;
}