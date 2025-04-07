// let cr=[
//     {
//         "ProductName":"iPhone 16e",
//         "ProductBrand":"Apple",
//         "ProductPrice":45000,
//         image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1738706428429"
//     },
//     {
//         "ProductName":"iPhone 16e",
//         "ProductBrand":"Apple",
//         "ProductPrice":59900,
//         image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1738706428429"
//     },
//     {
//         "ProductName":"iPhone 16e",
//         "ProductBrand":"Apple",
//         "ProductPrice":30000,
//         image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1738706428429"
//     },
//     {
//         "ProductName":"iPhone 16e",
//         "ProductBrand":"Apple",
//         "ProductPrice":59900,
//         image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1738706428429"
//     },
//     {
//         "ProductName":"iPhone 16e",
//         "ProductBrand":"Apple",
//         "ProductPrice":59900,
//         image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1738706428429"
//     },
//     {
//         "ProductName":"iPhone 16e",
//         "ProductBrand":"Apple",
//         "ProductPrice":59900,
//         image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1738706428429"
//     }

// ]

// const s =()=>{
//     let op=document.querySelector('#op').value;
//     let search=document.querySelector('#search').value;
//     console.log(op,search)
//     let obj;
//     let store;
//     if(op=='pn'){
//         store=obj.filter(e=>e.pname==search)
//     }
//     else if(op=='pp'){
//         store=obj.filter(e=>e.pprice==search)
//     }
//     else if(op=='pb'){
//         store=obj.filter(e=>e.pbrand==search)
//     }
//     store.map()
//     return false;
// }

// let b= cr.filter(e=>e.ProductPrice<50000)
// let output=document.querySelector('#object');
// output.innerHTML=cr.map(a=>`
//         <div class="card">
//         <div class="name">${a.ProductName}</div>
//         <div class="brand">${a.ProductBrand}</div>
//         <div class="price">${a.ProductPrice}</div>
//         <div><img src="${a.image}"width="100px"height="50px"></div>
//         </div>
//     `).join(" ")
//     console.log(cr)

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

// Function to render products
const renderProducts = (data) => {
    let output = document.querySelector('#object');
    output.innerHTML = data.map(a => `
        <div class="card">
            <div class="name">${a.ProductName}</div>
            <div class="brand">${a.ProductBrand}</div>
            <div class="price">${a.ProductPrice}</div>
            <div><img src="${a.image}" width="100px" height="100px"></div>
        </div>
    `).join(" ");
}

// Search filter function
const s = () => {
    let op = document.querySelector('#op').value;
    let search = document.querySelector('#search').value;
    let store = [];

    if (op === 'pn') {
        store = cr.filter(e => e.ProductName.toLowerCase() === search.toLowerCase());
    } else if (op === 'pp') {
        store = cr.filter(e => e.ProductPrice === parseInt(search));
    } else if (op === 'pb') {
        store = cr.filter(e => e.ProductBrand.toLowerCase() === search.toLowerCase());
    }

    renderProducts(store);
    return false; // prevent default if used in a form
}

// Initial render
renderProducts(cr);

