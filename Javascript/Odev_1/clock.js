let name=prompt("Isminizi Giriniz:")
let myName=document.querySelector("#myName");
myName.innerHTML=name;

 function showTime(){
    myClock.innerText = `${new Date().getHours().toString()}: ${new Date().getMinutes().toString()}:${new Date().getSeconds().toString()}`;    
}
setInterval(showTime,1000)




// function check(i){
//     if(i<10){
//         return "0"+i;
//     }
//     return i;
// }
//  let myClock=document.getElementById("#myClock")
//  function showTime(){
//     let date=new Date();
//     let hour=check(date.getHours());
//     let minute=check(date.getMinutes());
//     let second=check(date.getSeconds());
//     let time=`${hour}: ${minute}: ${second}`
//     document.getElementById("myClock").innerHTML= time;
//  }
//  setInterval(showTime,1000)