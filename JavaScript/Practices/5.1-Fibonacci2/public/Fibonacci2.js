/**
 * 
 */

 const bilgiSatiri = "Fibonacci Sayıları Burada Listelenir...";
 
 
 function fibonacci(n){
	 console.log("->" + n);
	 switch (n){
		 case 1: case 2:
			 return 1;
		 default:
		 	 return (fibonacci(n-1) + fibonacci(n-2));
	 }
 }
 
 function fibonacciOzyineli(){
	 var sayiAdedi = ~~document.getElementById("input-1").value;
	 var geciciDizgi = "";
	 var donguDenetim;
	 var kacinciFibo;
	 if (sayiAdedi < 3)
		 alert("Lütfen en az 3 giriniz. İlk iki Fibonacci sayısı: 1, 1'dir");
	 else{
		 geciciDizgi = "İlk " + sayiAdedi + " adet Fibonacci sayısı: 1, 1";

		 for (kacinciFibo = 3; kacinciFibo <= sayiAdedi; kacinciFibo++)
			 //geciciDizgi = geciciDizgi + ", " + fibonacci(kacinciFibo);
			 geciciDizgi += ", " + fibonacci(kacinciFibo);
		 document.getElementById("p-1").innerHTML = geciciDizgi;
	 }
 }
 
 
 function sayfaYukle(){
	 document.getElementById("p-1").innerHTML = bilgiSatiri;
	 document.getElementById("button-2").disabled = true;
	 
 }
 
 function veriGirisi(){
	 if (document.getElementById("button-2").disabled)
		  //alert("Button-2 açılıyor...");
		  document.getElementById("button-2").disabled = false;
 }
 
 function temizle(){
	 document.getElementById("input-1").value = "";
	 document.getElementById("p-1").innerHTML = bilgiSatiri;
	 document.getElementById("button-2").disabled = true;
 }