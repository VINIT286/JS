
let cr = [
    {
        image: "https://m.media-amazon.com/images/I/41R51TjCz7L._MCnd_AC_.jpg",
        "ProductName": "Lava Storm 5G",
        "ProductBrand": "Lava",
        "ProductPrice": 10999
    },
    {
        image: "https://m.media-amazon.com/images/I/41V7f38oPIL._MCnd_AC_.jpg",
        "ProductName": "iPhone 12",
        "ProductBrand": "Apple",
        "ProductPrice": 35000
    },
    {
        image: "https://m.media-amazon.com/images/I/41tnZF1HuXL._MCnd_AC_.jpg",
        "ProductName": "iPhone 13",
        "ProductBrand": "Apple",
        "ProductPrice": 45000
    },
    {
        image: "https://m.media-amazon.com/images/I/41UIAaFDznL._MCnd_AC_.jpg",
        "ProductName": "iPhone 14",
        "ProductBrand": "Apple",
        "ProductPrice": 55000
    },
    {
        image: "https://m.media-amazon.com/images/I/41-mPer5YLL._MCnd_AC_.jpg",
        "ProductName": "iPhone 15",
        "ProductBrand": "Apple",
        "ProductPrice": 65000
    },
    {
        image: "https://m.media-amazon.com/images/I/41Cd8ElGw8L._MCnd_AC_.jpg",
        "ProductName": "samsung",
        "ProductBrand": "Apple",
        "ProductPrice": 100000
    },
    {
        image: "https://m.media-amazon.com/images/I/41USEALw9uL._MCnd_AC_.jpg",
        "ProductName": "iPhone 12",
        "ProductBrand": "Apple",
        "ProductPrice": 35000
    },
    {
        image: "https://m.media-amazon.com/images/I/415IkCS68OL._MCnd_AC_.jpg",
        "ProductName": "iPhone 12",
        "ProductBrand": "Apple",
        "ProductPrice": 35000
    },
    {
        image: "https://m.media-amazon.com/images/I/41QioujvLVL._MCnd_AC_.jpg",
        "ProductName": "iPhone 12",
        "ProductBrand": "Apple",
        "ProductPrice": 35000
    },  {
        image: "https://m.media-amazon.com/images/I/41GJnqibXjL._MCnd_AC_.jpg",
        "ProductName": "iPhone 12",
        "ProductBrand": "Apple",
        "ProductPrice": 35000
    },  {
        image: "https://m.media-amazon.com/images/I/51vu7nKLeWL._MCnd_AC_.jpg",
        "ProductName": "iPhone 12",
        "ProductBrand": "Apple",
        "ProductPrice": 35000
    },
    {
        image: "https://m.media-amazon.com/images/I/31uajoTE1jL._MCnd_AC_.jpg",
        "ProductName": "iPhone 12",
        "ProductBrand": "Apple",
        "ProductPrice": 35000
    },
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
            <div><img src="${a.image}" width="100px" height="100px"></div>
            <div class="name">${a.ProductName}</div>
            <div class="brand">${a.ProductBrand}</div>
            <div class="price">${a.ProductPrice}</div>
        </div>
    `).join(" ");
    return false;
}

const a = ()=>{
    let output = document.querySelector('#object');
    output.innerHTML = cr.map(a => `
        <div class="card">
            <div><img id="i" src="${a.image}" width="100px" height="100px"></div>
            <div class="name">${a.ProductName}</div>
            <div class="brand">${a.ProductBrand}</div>
            <div class="price">${a.ProductPrice}</div>
        </div>
    `).join(" ");
    return false;
}

