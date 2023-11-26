/**
 * 
 */

 const bilgiSatiri = "Fibonacci Sayıları Burada Listelenir...";
 
 
 function fibonacci(){
	 var sayiAdedi = ~~document.getElementById("input-1").value;
	 var ikiOnce, birOnce, Fibonacci;
	 var geciciDizgi = "";
	 var donguDenetim;
	 if (sayiAdedi < 3)
		 alert("Lütfen en az 3 giriniz. İlk iki Fibonacci sayısı: 1, 1'dir");
	 else{
		 geciciDizgi = "İlk " + sayiAdedi + " adet Fibonacci sayısı: 1, 1";
		 ikiOnce = 1;
		 birOnce = 1;
		 
		 for (donguDenetim = 0; donguDenetim < sayiAdedi - 2; donguDenetim++){
			 Fibonacci = birOnce + ikiOnce;
			 ikiOnce = birOnce;
			 birOnce = Fibonacci;
			 geciciDizgi = geciciDizgi + ", " +Fibonacci;
		 }
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