var income = 0;
var name = "";
var ded = "1";
var totaltax = 0;

document.getElementById("submit").addEventListener('click', tax);
function tax() {
	income = document.getElementById("income").value;
	parseFloat(income);
	console.log(income);
	console.log(ded);
	if (ded == 1) {
		totaltax = income - 6300;
	} else {
		totaltax = income;
	}
	total()
}
function dedct() {
	ded = document.getElementById("deduct").value;
}
function total() {
	console.log(totaltax)
	if (totaltax <= 0) {
		 window.alert("Error");
	}else if (totaltax <= 9275) {
		totaltax = (totaltax * 0.1)
		document.getElementById("taxDue").innerHTML = "$" + totaltax;
	} else if (totaltax >= 9276 && totaltax <= 37650) {
		totaltax =((totaltax - 9275) * .15) + 927.5
		document.getElementById("taxDue").innerHTML = "$" + totaltax;
	} else if (totaltax >= 37651 && totaltax <= 91150) {
		totaltax =((totaltax - 37650) * .25) + 5183.75
		document.getElementById("taxDue").innerHTML = "$" + totaltax;
	} else if (totaltax >= 91151 && totaltax <= 190150) {
		totaltax =((totaltax - 91150) * .28) + 18558
		document.getElementById("taxDue").innerHTML = "$" + totaltax;
	} else if (totaltax >= 190151 && totaltax <= 413350) {
		totaltax =((totaltax - 190150) * .33) + 46278.75
		document.getElementById("taxDue").innerHTML = "$" + totaltax;
	} else if (totaltax >= 413351 && totaltax <= 415050) {
		totaltax =((totaltax - 413350) * .35) + 119934.75
		document.getElementById("taxDue").innerHTML = "$" + totaltax;
	} else if (totaltax >= 415051) {
		totaltax =((totaltax - 415050) * .396) + 120529.75
		document.getElementById("taxDue").innerHTML = "$" + totaltax;
	}
}