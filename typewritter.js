const timer =()=>{
    let str="my name is vinit";
    let count=0;
    let str1='';
    const tp = ()=>{
        if(count<str.length){
            str1=str1+str[count];
            let output=document.querySelector('#output');
            output.innerHTML=str1
            count++;
        
    }else{
        str1=''
        count=0
    }
}
    setInterval(tp,100)
}
