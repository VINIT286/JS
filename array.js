let array=[23,23,5,45,64,76,45];

for(let i=0;i<array.length;i++){
    let v = document.querySelector("#output")
    v.innerHTML = array[i]
}
// for(let i in array){
//     console.log(i)
// }

for(let i in array){
    let v1 = document.querySelector('#output1');
    v1.innerHTML = array[i]
}

// let v = array.map(a=>a)
// console.log(v)

// let o = document.querySelector('#output2')
// o.innerHTML = array.map(a=>a).join(" ")

let o = document.querySelector('#output2')
o.innerHTML = array.map(a=>`
    <h1>${a}</h1>
    `).join(" ")

// array.map(s=>console.log(S))