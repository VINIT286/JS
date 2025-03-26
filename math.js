//  console.log(Math.pow(2,3))
//  console.log(Math.random())
//  console.log(Math.sqrt(2))
//  console.log(Math.sqrt(3))
//  console.log(Math.sqrt(4))
//  console.log(Math.floor(3.44))
// console.log(Math.ceil(3.44))
let str = '1234567890'
let store = ''
const run = () => {
    for (let i = 0; i < 6; i++) {
        ra = Math.random() * str.length;
        fl = Math.floor(ra);
        store  = store + fl
    }
    output = document.querySelector("#output");
    output.innerHTML = store
}
a = document.querySelector("#b1");
a.addEventListener('click', run)