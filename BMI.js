const bmi=()=>{
    
    let gender= document.querySelector('#gender').value
    let age= document.querySelector('#age').value
    let weight= document.querySelector('#weight').value
    let height = document.querySelector('#height').value
    let hinm =height/100;
    let result = weight/(hinm*hinm)

     alert(result)

    if(age>20){
    if(18.5<result && 25>result)
    {
       let output= document.querySelector('#output');
       output.innerHTML ="<br><br>Fit"
       output.style.backgroundColor="green";
       output.style.transition="background-color 2s"
    }
    else if(18.5>result)
    {
        let output= document.querySelector('#output');
       output.innerHTML ="<br><br>Underweight"
       output.style.backgroundColor="brown";
       output.style.transition="background-color 2s"
    }
    else if(25<result && result<30)
        {
            let output= document.querySelector('#output');
            output.innerHTML ="<br><br>Overweight"
            output.style.backgroundColor="yellow";
            output.style.transition="background-color 2s"
        }

    else if(result<30)
        {
            let output= document.querySelector('#output');
            output.innerHTML ="<br><br>Obbesed"
            output.style.backgroundColor="red";
            output.style.transition="background-color 2s"
        }
    }
return false;
}
