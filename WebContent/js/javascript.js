/**
 * 
 */
function Pasta(grain, width, shape, hasegg) {
	this.grain = grain;
	this.width = width;
	this.shape = shape;
	this.hasegg = hasegg;
	this.toString = pastaToString;
}

function pastaToString() {
	return "Grain:" + this.grain + "\n" + "Width:" + this.width + "\n"+
	"Shape:" + this.shape + "\n" + "Hasegg:" + Boolean(this.hasegg);
}
function Bot1() {
	var pasta = new Pasta("面粉","200","方形",true);
	alert(pasta.toString());
	pasta.color="yellow";
	pasta.drycook=7;
	Pasta.prototype.freshcook=0.5;
	var chowfun=new Pasta("rice", "3", "flat", false);
	alert(chowfun);
}
function Arrayexpdo(){
	var myArray=new Array(3);
	myArray[0]="Hi";
	myArray[1]=35;
	myArray[2]=new Date(2017,8,15);
	alert(myArray.length);
	myArray.expando="Jscript";
	myArray["another expando"]="Windows";
	myArray[3]="Hello";
	alert(myArray.length);
	
}
function createNewDoc()
{
	var newDoc=document.open("text/html","replace");
	var txt="<html><body>Learning about the DOM is FUN!</body></html>";
	newDoc.write(txt);
	newDoc.close();
}
