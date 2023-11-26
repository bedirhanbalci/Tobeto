/**
 * 
 */

const bilgiDizgisi = "Faktoriyel değeri burada gösterilir..."; // Kullanıcıya gösterilecek ön bilgi metni

function faktoriyel(n){
	var donecekDeger;
	switch (n){
		case 0: case 1:
			return 1;
		default:
			donecekDeger = n * faktoriyel(n - 1);
			return (donecekDeger);
	}
}


function faktoriyelOzyineli(){
	var deger = ~~document.getElementById("input-1").value;
	debugger;
	document.getElementById("input-2").value = deger + " değerinin, (Özyineli) Faktöriyeli: " + faktoriyel(deger);
	
}


 function temizle() {
	 
	 document.getElementById("input-1").value = "";
	 //document.getElementById("input-2").value = bilgiDizgisi;
	 //alert("input-2, temizle() tarafından güncellenecek")
	 sayfaYukle(2);
 }
  function sayfaYukle() {
	 var kaynak = arguments[0];
	 
	 // switch case ile kurulması gereken bir kod parçası
	 if (kaynak == 1)
	 	alert("sayfaYukle(), body.onload() tarafından çağırılmıştır...");
	 else if (kaynak == 2)
	 	alert("sayfaYukle(), temizle() tarafından çağırılmıştır...");
	 else if (kaynak == 3)
	 	alert("sayfaYukle(), bilinmeyen bir işlev tarafından çağırılmıştır...");
	 document.getElementById("input-2").value = bilgiDizgisi;
 }