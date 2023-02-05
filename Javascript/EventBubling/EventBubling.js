//iç içe elementler çağrıldı  
const selectBox = document.querySelector('#selectColor')
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox.addEventListener('click' ,function(){
console.log("selectBox");    
       })
form.addEventListener('click',function(){
console.log("form"); })
cerceve.addEventListener('click',function(){
  console.log('cerceve');})