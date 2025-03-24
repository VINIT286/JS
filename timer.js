const timer = ()=>{
    let secdiv = document.querySelector('#sec');
    let mindiv = document.querySelector('#min');
    let hourdiv = document.querySelector('#hour');
    sec = 0;
    min = 0;
    hour = 0;
    const run = ()=>
    {
        if(sec < 60)
        {
            sec++;
         secdiv.innerHTML = sec;
        }
        else if(sec == 60)
        {
            min ++;
            sec = 0;
            mindiv.innerHTML = min;
            if(min == 60)
                {
                    hour++;
                    min = 0;
                    hourdiv.innerHTML = hour;
                }
        }
        
        
    }
    setInterval(run,10)
}