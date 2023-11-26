/**
 * 
 */

const acilisDizgisi = "Sayı tahmin oyununa hoş geldiniz!..";
var sonucParagrafi;
var tutulanDeger = 0;
var tahminAltSiniri = 1;
var tahminUstSiniri = 10;
var tahminSayisi;

 function sayfaYukle(){
	 var tahminGirisi = document.getElementById("input-3");
	 sonucParagrafi = document.getElementById("p-1");
	 sonucParagrafi.innerHTML = acilisDizgisi;
	 
	 document.getElementById("input-3").disabled = true;
	 document.getElementById("button-1").disabled = true;
	 
	 document.getElementById("input-1").setAttribute("min", tahminAltSiniri);		// 	Alt sınır
	 document.getElementById("input-1").setAttribute("max", tahminUstSiniri);		
	 document.getElementById("input-2").setAttribute("min", tahminAltSiniri);		// 	Üst sınır
	 document.getElementById("input-2").setAttribute("max", tahminUstSiniri);		
	 tahminGirisi.setAttribute("min", tahminAltSiniri);								// 	Tahmin
	 tahminGirisi.setAttribute("max", tahminUstSiniri);		
	 
	 //addEventListener
	 tahminGirisi.addEventListener("keyup", function(event){
		 if (event.keyCode === 13){
			 event.preventDefault();
			 document.getElementById("button-1").click();
		 }
	 })
 }
 
 
 function yeniSayiTut(){
	 var min = +document.getElementById("input-1").value;
	 var max = +document.getElementById("input-2").value;
	 
	 if (min < max) {
		 var deger = rastgeleSayi(min, max);
		 var tahminGirisi = document.getElementById("input-3");
		 tahminGirisi.setAttribute("min", min);
		 tahminGirisi.setAttribute("max", max);
		 tahminGirisi.disabled = false;
		 tahminGirisi.value = min;
		 document.getElementById("button-1").disabled = false;
		 
		 // Tutulan değer denetimi burada yapılabilir
		 tutulanDeger = deger;
		 tahminSayisi = 0;
		 sonucParagrafi.innerHTML = min + " ile" + max + " aralığında bir sayı tuttum...";
		 console.log(min + ", " + max + " -->>" + deger);
	 }
	 else
	 	alert("min < max şeklinde değer aralığı giriniz...");
 }
 
 // min ve max değerleri arasında, rastgele (random) sayı üretir (random number generator).
 function rastgeleSayi(min, max){
	 var hamDeger, asilDeger;
	 min = Math.ceil(min);
	 max = Math.floor(max);
	 hamDeger = Math.random();
	 asilDeger = hamDeger * (max - min + 1) + min;
	 asilDeger = Math.floor(asilDeger);
	 return asilDeger;	 	 
 }
 
 function tahminEt(){
	 var tahmin = ~~document.getElementById("input-3").value;
	 if (tahmin > tutulanDeger)
	 	sonucParagrafi.innerHTML = ++tahminSayisi + ". tahmininiz yanlış; aşağı inin";
	 else if (tahmin < tutulanDeger)
	 	sonucParagrafi.innerHTML = ++tahminSayisi + ". tahmininiz yanlış; yukarı çıkın";
	 else{
	 	sonucParagrafi.innerHTML = "Tebrikler!.. " + ++tahminSayisi + " seferde bildiniz...";
	 	document.getElementById("input-3").disabled = true;
	 	document.getElementById("button-1").disabled = true;
	 }
 }