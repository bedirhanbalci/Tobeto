/**
 * 
 */


/* */
 function karsilastir(){
	 var birinciSayi, ikinciSayi;
	 var geciciDizgi = "";
	 
	 birinciSayi = +document.getElementById("input-1").value;
	 ikinciSayi = +document.getElementById("input-2").value;
	 
	 if (birinciSayi > ikinciSayi)
		 geciciDizgi = birinciSayi + " > " + ikinciSayi;
	 else
	 	 geciciDizgi = ikinciSayi + " > " + birinciSayi;
	 	 
	 document.getElementById("p-1").innerHTML = geciciDizgi;
	 
 }
 
 /*  */
 function temizle(){
	 document.getElementById("input-1").value = "";
	 document.getElementById("input-2").value = "";
	 document.getElementById("p-1").innerHTML = "Karşılaştırma sonucu burada gösterilir...";
  }