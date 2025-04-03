// let array=[23,23,5,45,64,76,45];

// for(let i=0;i<array.length;i++){
//     let v = document.querySelector("#output")
//     v.innerHTML = array[i]
// }
// for(let i in array){
//     console.log(i)
// }

// for(let i in array){
//     let v1 = document.querySelector('#output1');
//     v1.innerHTML = array[i]
// }

// let v = array.map(a=>a)
// console.log(v)

// let o = document.querySelector('#output2')
// o.innerHTML = array.map(a=>a).join(" ")

// let o = document.querySelector('#output2')
// o.innerHTML = array.map(a=>`
//     <h1>${a}</h1>
//     `).join(" ")

// array.map(s=>console.log(S))

// ----------------------------

// let arr=[3,5,"vy",3>6,function(){}];

// arr[0]
// arr[4]();

// let obj={
//     "name":"vinit",
//     "age":22,
//     "mobile":13243435
// }
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.moile)

// let document = {
//     "innerHTML":function(){

//     },
//     "write":function(){

//     }
// }

// document.innerHTML()
// let window = {

// }

// let obj = [23,45,6,{ "name":"vinit", "age":22,"mobile":13243435},76,"rere"];
// console.log(obj[3].age)

// let vj = [{ "name": "vinit", "age": 22, "mobile": 11111111 }, { "name": "deepak", "age": 23, "mobile": 22222222 }, { "name": "amit", "age": 24, "mobile": 33333333 }, { "name": "mayank", "age": 25, "mobile": 444444444 }, { "name": "vishnu", "age": 26, "mobile": 555555555 }, { "name": "rahul", "age": 27, "mobile": 666666666 }, { "name": "ritik", "age": 28, "mobile": 777777777 }, { "name": "aman", "age": 29, "mobile": 888888888888 }, { "name": "kanha", "age": 30, "mobile": 999999999 }, { "name": "kuldeep", "age": 31, "mobile": 626163111 }]

// console.log(vj[0])
  
let arr = [
 
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        image:"https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
      }
     
]

let output= document.querySelector('#output');
output.innerHTML=arr.map(b=>`
    <tr>
        <td>${b.userId}</td>
        <td>${b.id}</td>
        <td>${b.body}</td>
        <td>${b.title}</td>
        <td><img src="${b.image}" width="100px" height="60px"></td>
    </tr>`)
    