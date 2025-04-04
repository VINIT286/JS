let cr=[
    {
        "ProductName":"iPhone 16e",
        "ProductBrand":"Apple",
        "ProductPrice":59900,
        image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1738706428429"
    }
]
let output=document.querySelector('#object');
output.innerHTML=cr.map(a=>`
        <div class="card">
        <div class="name">${a.ProductName}</div>
        <div class="brand">${a.ProductBrand}</div>
        <div class="price">${a.ProductPrice}</div>
        <div><img src="${a.image}"width="100px"height="50px"></div>
        </div>
    `).join(" ")