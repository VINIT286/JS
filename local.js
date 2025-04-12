let f = 90
let s ="vinit"
let o = {
    "name":"deepak"
}
window.localStorage.setItem("data",f);
window.localStorage.setItem("d1",s)
window.localStorage.setItem("o",JSON.stringify(o))
output1=window.localStorage.getItem("data")
console.log(output1)
output2=JSON.parse(window.localStorage.getItem("o"))
console.log(output2)
// window.localStorage.clear()
window.localStorage.removeItem("d1")
window.localStorage.setItem("o",obj)