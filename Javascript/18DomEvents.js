// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events
let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover", domClick)

function doclick() {
    console.log("etkinlik denetlendi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}

//***Event Listener ile Çalışmak***
//Event oluşumu öncelikle nesnenin seçimi ile başlar. Bir butona tıklandığında tıklandı 
//uyarısı ekrana uyarı(alert) olarak ekrana yazdırabiliriz.

//__1. Metot
element.addEventListener(event, function);
// id =button olan nesne seçildi
const buton = document.querySelector("id");
// Nesneye bir etkinlik atandı..
const buton = document.querySelector("#button");
//Burada ilk olarak tip ('click') ,ikinci olarak da fonksiyonun kendisi parametre olarak eklenir
buton.addEventListener('click' , function(){
  alert("Buton Tıklandı");
       })
 
// Çıktı : Buton Tıklandı

//___2. Metot
//Fonksiyon etkinlik parametresi olarak da çalışabilmektedir. Burada parametre 
//olan "event"i bir değişkene atayıp hedef etkinlik tanımlandıktan sonra butona 
//basıldığında hangi butonun tıklandığı bilgisine ulaşılabilmektedir

element.addEventListener(event, functionName);
//id =button olan nesne seçildi
const button = document.querySelector("#button");
//nesneye bir etkinlik atandı.Burada ilk olarak tip ('click')
//ikinci olarak da aşağıda fonksiyon tanımlanır ,fonksiyon ismi parametre olarak girilir. 
button.addEventListener('click',btnClicked);
  function btnClicked(){
    alert("Buton Tıklandı!!!")
    }
// Çıktı : Buton Tıklandı!!!

//Mouse Etkinliği :Mouse tıklaması ile gerçekleşen etkinliktir.
//id=text olan buton çağrıldı
//dblclick=çift tıklama etkinliği nesneye atandı,fonksiyon ismi parametre olarak tanımlandı
const button = document.querySelector("#text");
button.addEventListener('dblclick',clickFonksiyonu);
  
//fonksiyonda id=text olan element çağrılarak innerHTML ile içeriği değiştirildi.
function clickFonksiyonu(){
  document.getElementById("text").innerHTML = "NEW FORM";
  }

//Klavye Etkinliği:Klavyeden herhangi bir tuşa tıklanması sonucu gerçekleşen etkinliklerdir.

//id=fname olan nesne çağrılarak keyboard değişkenine atandı
const keyboard =document.querySelector('#fname');
//keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
keyboard.addEventListener("cut",cuttingFunction);
//cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
function cuttingFunction(event){
  console.log("etkinlik tipi: " , event.type)
  } 
  
//console ekranı : etkinlik tipi: cut
// Form Etkinlikleri :Örnek bir selectBox:
`<form action="#" id="selectColor">
<label for="color">Choose a color</label>
  <select name="colors" id="select">
    <option value="red">RED</option>
    <option value="blue">BLUE</option>
    <option value="purple">PURPLE</option>
    <option value="orange">ORANGE</option>
    <option value="pink">PINK</option>
  </select>
  <br><br>
<input type="submit" value="Submit">
</form>   
`
     
//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener('change' ,selectBox);

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
function selectBox(event){
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
  }
  
// Selectbox içinde "blue" değerini seçtiğimiz takdirde;
// ekran çıktısı: Etkinlik tipi : change, deger : blue﻿        

//1.Kabarcıklanma Etkinliği(Event Bubbling) ve Yakalama Etkinliği(Event Capturing)

element.addEventListener(event, function);
//Örnekte event parametresi "click" etkinliği almaktadır. function parametresi 
//ise fonksiyonun ismini veya fonksiyonun kendisini almaktadır.

//Örnek Form:
`
<div class="container">  
  <div><p id="text">SUBMIT FORM </p> </div>
    <form action="/action_page.php" class="inputText">
      <label for="fname" id="l1">First name:</label><br>
      <input type="text" id="fname" name="fname" value="John" > <br>
      <label for="lname" id="l2">Last name:</label><br>
      <input type="text" id="lname" name="lname" value="Doe" id="label2"><br><br>
    </form>
    <button type="button" id="button" >Clicked me </button>
    <form action="#" id="selectColor">
      <label for="color">Choose a color</label>
        <select name="colors" id="select">
        <option value="red">RED</option>
        <option value="blue">BLUE</option>
        <option value="purple">PURPLE</option>
        <option value="orange">ORANGE</option>
        <option value="pink">PINK</option>
      </select>
    <br><br>
    </form>
  </div>
</div>`
  
// iç içe elementler çağrıldı  
const selectBox = document.querySelector('#selectColor');
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
    })
form.addEventListener('click',function(){
    console.log("form");
    })
cerceve.addEventListener('click',function(){
    console.log('cerceve');
    })
//Burada class=container olan div elementi içerisinde 3 farklı "id" numarası olan elementler bulunmaktadır. Container kapsayan küme, diğer elementler ise bu küme içerisindeki ayrık kümelerdir. Dolayısıyla diğer üç elemente tıklandığında class=container olan div elementini tutan çerçeve değişkeni, tıklanan elementi tutan değişken ile ekrana yazılacaktır. Örneğin form elementine tıklandığında; ekran çıktısı: form çerçeve seklinde olacaktır.

//2.Yakalama Etkinliği(Event Capturing)

 element.addEventListener(event, function, useCapture);
//useCapture parametresi "True" ve "False" değerleri almaktadır. Diğer tüm kullanımı 
//kabarcıklanma etkinliği ile aynıdır.

event.stopPropagation()
//Bir etkinliğin özelliğini durdurmak için kullanılır. Bir fonksiyon parametresi 
//olarak girilen "event" e bu etkinlik atanarak kullanılır.

event.stopPropagation();
event.preventDefault()
//Bir HTML elementinin varsayılan eylemini tamamen engellemek için bu eylem kullanılır.
// Bir fonksiyon parametresi olarak girilen "event" e bu etkinlik atanarak kullanılır.

event.preventDefault();
