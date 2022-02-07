var sum = 0;
var quantityA = 0;

function MinusItemA(){
	if(quantityA > 0){
		quantityA--;
		sum -= 1.75;
	}
	document.getElementById("counterA").innerHTML = quantityA;
	document.getElementById("TotalPrice").innerHTML = sum;
};

function PlusItemA(){
	if(quantityA < 8){
		quantityA++;
		sum += 1.75;
	}
	document.getElementById("counterA").innerHTML = quantityA;
	document.getElementById("TotalPrice").innerHTML = sum;
};

var quantityB = 0;

function MinusItemB(){
	if(quantityB > 0){
		quantityB--;
		sum -= 3.50;
	}
	document.getElementById("counterB").innerHTML = quantityB;
	document.getElementById("TotalPrice").innerHTML = sum;
};

function PlusItemB(){
	if(quantityB < 8){
		quantityB++;
		sum += 3.50;
	}
	document.getElementById("counterB").innerHTML = quantityB;
	document.getElementById("TotalPrice").innerHTML = sum;
};

var quantityC = 0;

function MinusItemC(){
	if(quantityC > 0){
		quantityC--;
		sum -= 2.00;
	}
	document.getElementById("counterC").innerHTML = quantityC;
	document.getElementById("TotalPrice").innerHTML = sum;
};

function PlusItemC(){
	if(quantityC < 8){
		quantityC++;
		sum += 2.00;
	}
	document.getElementById("counterC").innerHTML = quantityC;
	document.getElementById("TotalPrice").innerHTML = sum;
};

var quantityD = 0;

function MinusItemD(){
	if(quantityD > 0){
		quantityD--;
		sum -= 3.00;
	}
	document.getElementById("counterD").innerHTML = quantityD;
	document.getElementById("TotalPrice").innerHTML = sum;
};

function PlusItemD(){
	if(quantityD < 8){
		quantityD++;
		sum += 3.00;
	}
	document.getElementById("counterD").innerHTML = quantityD;
	document.getElementById("TotalPrice").innerHTML = sum;
};

function TotalPrice(){
	document.getElementById("TotalPrice").innerHTML = sum;
};