const run= ()=>{
   let c = document.querySelector('body');
    c.style.backgroundColor="red"
    c.style.transition="background-color 2s"

}
let a = document.querySelector('#bi');
a.addEventListener('click',run);
