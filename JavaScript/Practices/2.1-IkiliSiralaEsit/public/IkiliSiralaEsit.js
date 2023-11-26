/**
 * 
 */

/* */
 function karsilastir(){
	 var birinciSayi, ikinciSayi;
	 var geciciDizgi = "";
	 
	 birinciSayi = +document.getElementById("input-1").value;
	 ikinciSayi = +document.getElementById("input-2").value;
	 
	 /* Koşullu aktarım, eski hali */
	/* if (birinciSayi == ikinciSayi)
	     geciciDizgi = birinciSayi + " = " + ikinciSayi;
	 else if (birinciSayi > ikinciSayi)
		 geciciDizgi = birinciSayi + " > " + ikinciSayi;
	 else
	 	 geciciDizgi = ikinciSayi + " > " + birinciSayi;
	 	 */
	 	 
	 	 
	 /* Koşullu aktarım, yeni hali - 1 */
	 /*if (birinciSayi == ikinciSayi)
	     geciciDizgi = birinciSayi + " = " + ikinciSayi;
	 else
	 	 geciciDizgi = (birinciSayi > ikinciSayi) ? birinciSayi + " > " + ikinciSayi: ikinciSayi + " > " + birinciSayi;
	 	 */
	 	 
	 /* Koşullu aktarım, yeni hali - 2 */

	 geciciDizgi = (birinciSayi == ikinciSayi) ? birinciSayi + " == " + ikinciSayi : (birinciSayi > ikinciSayi) ? birinciSayi + " >> " + ikinciSayi : ikinciSayi + " >> " + birinciSayi;
	 
	 
	 
	 document.getElementById("p-1").innerHTML = geciciDizgi;
 }
 
 /*  */
 function temizle(){
	 document.getElementById("input-1").value = "";
	 document.getElementById("input-2").value = "";
	 document.getElementById("p-1").innerHTML = "Karşılaştırma sonucu burada gösterilir...";
  }