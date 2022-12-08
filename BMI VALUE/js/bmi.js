var height=1.9;
var weight=0;

var de=0;
var uw=18.5;
var nm=24.9;
var ow=25;
var ob=29.9;
var ob1=30;


var bmi= weight / (height*height);
console.log(Math.floor(bmi));

weight ==0 
bmi < uw && bmi > de ? console.log("Under Weight"):console.log("");
bmi >= uw && bmi <= nm ? console.log("Normal"):console.log("");
bmi >= ow && bmi <= ob ? console.log("Over Weight"):console.log("");
bmi >= ob1  ? console.log("OBESE"):console.log("");
