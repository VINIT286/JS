// const show = ()=>{
//     setTimeout(() => { // call back function
//         window.alert("function call");
//     }, 2000);
// }

const show =()=>{
    const run =()=>{
        window.alert("hello world")
    }
    setTimeout(run,2000)
}
let a =document.querySelector('#b1');
a.addEventListener('click',show)