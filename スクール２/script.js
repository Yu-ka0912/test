document.write("Hello World");

document.write("2012<br>");
document.write(2012);
document.write("<br>")
var a=5*5;
var b="6*5";
document.write(b+"="+a);
document.write("<br>");
var a=10;
document.write(++a);
document.write("<br>");
document.write(++a);
document.write("<br>") ;
document.write(++a);

document.write("<br>") ;
var a5 =7; if(a5 > 10){
document.write( "A" ) ;
}else if(a5 < 5 || a5 == 6){ 
document.write( "B" ) ;
}else{
document.write( "C" ) ;
}
document.write("<br>");

for(var i=1; i<=5; i++){
    for(var a=1; a<i+1;a++){
document.write("★");
}
document.write("<br>");
}
    
for(var month=1; month <=12; month++){
document.write( month + "月:");
for(var day =1; day<= 30;day++){
document.write(day + "日/");
}
document.write( "<br>" );
}
