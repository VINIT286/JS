
let cr = [
    {
        "ProductName": "iPhone 11",
        "ProductBrand": "Apple",
        "ProductPrice": 25000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMJ0wayMYgSPs0nVPngjHwuW8w1vfHSD0WQ&s"
    },
    {
        "ProductName": "iPhone 12",
        "ProductBrand": "Apple",
        "ProductPrice": 35000,
        image: "https://rukminim3.flixcart.com/image/850/1000/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=20&crop=false"
    },
    {
        "ProductName": "iPhone 13",
        "ProductBrand": "Apple",
        "ProductPrice": 45000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkGSaLQZ3RpJGCY3_4dUml0FIGyIBdl44WQ&s"
    },
    {
        "ProductName": "iPhone 14",
        "ProductBrand": "Apple",
        "ProductPrice": 55000,
        image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "ProductName": "iPhone 15",
        "ProductBrand": "Apple",
        "ProductPrice": 65000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvgCPBUySTN1TjyFl-Lu-XqGoZlDnLDpnbQ&s"
    },
    {
        "ProductName": "iPhone 16",
        "ProductBrand": "Apple",
        "ProductPrice": 100000,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStvAWT8L9cuTxzDGIhlX7MDYAVemsh4T660V9c6XZgYdCRZXgyILsnYGxwFsbuxYzeE3Fez0vRqFvi-SxRf_jBtS0d5ioL9FBgIn7ENRM18wEb3rMymodYiap47HyT_XdjyLnt7mk&usqp=CAc"
    }
];
const s =()=>{
    
    let op=document.querySelector('#op').value;
    let search=document.querySelector('#search').value;
    console.log(op,search)
    
    let store;
    if(op=='pn'){
        store=cr.filter(e=>e.ProductName==search)
    }
    else if(op=='pp'){
        store=cr.filter(e=>e.ProductPrice<search)
    }
    else if(op=='pb'){
        store=cr.filter(e=>e.ProductBrand==search)
    }
    
    let output = document.querySelector('#object');
    output.innerHTML = store.map(a => `
        <div class="card">
            <div class="name">${a.ProductName}</div>
            <div class="brand">${a.ProductBrand}</div>
            <div class="price">${a.ProductPrice}</div>
            <div><img src="${a.image}" width="100px" height="100px"></div>
        </div>
    `).join(" ");
    return false;
}

const a = ()=>{
    let output = document.querySelector('#object');
    output.innerHTML = cr.map(a => `
        <div class="card">
            <div class="name">${a.ProductName}</div>
            <div class="brand">${a.ProductBrand}</div>
            <div class="price">${a.ProductPrice}</div>
            <div><img src="${a.image}" width="100px" height="100px"></div>
        </div>
    `).join(" ");
    return false;
}

