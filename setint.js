// num = 90
// const sh = () =>{
//     // console.log(num++)
//     a=document.querySelector('#a')
//     a.innerHTML=num++
// }
// setInterval(sh,100)

num = 90;
const sh = () => {
    if (num > 200) {
        clearInterval(interval); 
        return;
    }
    let a = document.querySelector('#a')
    a.innerHTML = num++
}
setInterval(sh, 10)
