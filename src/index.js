
const d1 =document.getElementById('days');
const h1 =document.getElementById('hours');
const min1 =document.getElementById('minutes');
const sec1 =document.getElementById('seconds');


const repubDate ='15 Aug 2022';

function countdown(){

    const newRep =new Date(repubDate);
    const currentDate =new Date();

    const totalsec= (newRep-currentDate)/1000;


    const days = Math.floor(totalsec/3600/24);
    const hours = Math.floor(totalsec/3600)%24;
    const mins =Math.floor(totalsec/60)%60;
    const seconds =Math.floor(totalsec)%60;

     d1.innerHTML =days;
     h1.innerHTML = formatTime(hours);
     min1.innerHTML = formatTime(mins);

     sec1.innerHTML =formatTime(seconds);


    console.log(newRep - currentDate);
}

function formatTime(time)
{
    return time <10 ?`0${time}`:time;
}
countdown();
setInterval(countdown,1000);
