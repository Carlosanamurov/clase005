/*var a,num;
var cont =0;
var b=0
a = parseFloat(prompt("cantidad de numeros"));
while (a==cont) {
    cont++;
    num=parseFloat(prompt("num: "));
    b=b+num*num;
}
document.write(b);*/
var a,b, op;
var res= document.getElementById("resultado");
function calcular(){
    a= parseInt(document.getElementById("n1").value);
    b= parseInt(document.getElementById("n2").value);
    op= document.getElementById("oper").value;
    
}
switch (op) {
    case '1': res.value = suma();        
        break;
    case '2': res.value = resta();        
        break;
    case '3': res.value = multi();        
        break;
    case '4': res.value = div();        
        break;

    default:
        break;
}
function suma(){
    return (a+b);
}
function resta(){
    return (a-b);
}
function multi(){
    return (a*b);
}
function div(){
    if (b==0)
        return"no se puede dividir";

    return (a/b);
}