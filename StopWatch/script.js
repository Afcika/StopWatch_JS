
// we set start time to Starttime lets say 10:00
// then in update we store new time Temp 
// and we substarct temp - startime and updtae 10 milisecnods 

const dispay = document.getElementById("display");
let timer= null;
let starttime = 0;
let TempTime = 0;
let running = false;

function Start(){
  if(!running){
    starttime = Date.now() -TempTime;
    timer = setInterval(update,10)
    running= true;
  
  }
}

function Stop(){
  if(running){
      clearInterval(timer);
      TempTime= Date.now() - starttime;
      running = false
  }

}

function Reset(){
  clearInterval(timer);
   starttime = 0;
   TempTime = 0;
   running = false;
  dispay.textContent= "00:00:00:00"
  }

function update(){
  const currenttime = Date.now();
  TempTime= currenttime-starttime;

  let hours = Math.floor(TempTime/(1000 * 60 *60));
  let minutes = Math.floor(TempTime/(1000 * 60) % 60);
  let secconds = Math.floor(TempTime/1000 %60);
  let milisecconds = Math.floor(TempTime % 1000 /10);

  hours= String(hours).padStart(2, "0");
  minutes= String(minutes).padStart(2, "0");
  secconds= String(secconds).padStart(2, "0");
  milisecconds= String(milisecconds).padStart(2, "0");

  dispay.textContent = `${hours}:${minutes}:${secconds}:${milisecconds}`
}