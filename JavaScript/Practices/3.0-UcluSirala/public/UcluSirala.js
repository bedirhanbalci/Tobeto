
const bilgiSatiri = "Üçlü sıralama burada gösterilir...";

function ucluSirala() {
	 
	 var birinciSayi, ikinciSayi, ucuncuSayi;
	 var buyuk, orta, kucuk;
	 
	 birinciSayi = +document.getElementById("input-1").value; 
	 ikinciSayi  = +document.getElementById("input-2").value; 
	 ucuncuSayi  = +document.getElementById("input-3").value; 
	 
	 /* Birinci sayı ile ikinci sayıyı karşılaştır */
	 if (birinciSayi > ikinciSayi){
		 buyuk = birinciSayi;
		 kucuk = ikinciSayi;
	 }
	 else{
		 buyuk = ikinciSayi;
		 kucuk = birinciSayi;
	 }
	 
	 /* Bir ve iki bitti, üç gelsin */
	 if (ucuncuSayi > buyuk){
		 orta = buyuk;
		 buyuk = ucuncuSayi;
	 }
	 else if (ucuncuSayi > kucuk)
		 	orta = ucuncuSayi;
	 else{
			 orta = kucuk;
			 kucuk = ucuncuSayi;
		 }
	 document.getElementById("p-1").innerHTML = buyuk + " , " + orta + " , " + kucuk;
 }
 
 function sayfaYukle() {
	 alert("Şu anda, belgenin sayfaYukle(); yöntemi içerisindeyim...");
	 document.getElementById("p-1").innerHTML = bilgiSatiri;
 }
 
 
 function temizle(){
	 //var bilgESatiri = "Bilgelik...";
	 document.getElementById("input-1").value = "";
	 document.getElementById("input-2").value = "";
	 document.getElementById("input-3").value = "";
	 //document.getElementById("p-1").innerHTML = bilgiSatiri;
	 sayfaYukle();
	 /*bilgESatiri = bilgESatiri + " Önemlidir...";
	 alert("bilgESatiri: " + bilgESatiri);
	 alert("bilgiSatiri: " + bilgiSatiri);
	 */
	 
 }