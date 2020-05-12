/*
var  texto, resultado;
texto=prompt("Ingresar numero")
resultado= Math.sqrt(texto)
console.log(resultado);
document.write(resultado)
alert(resultado)*/
var a,b, op;
a= parseFloat( prompt("num1: "));
b= parseFloat( prompt("num2: "));
op=parseFloat(prompt("op: "));
/*
if(a>b){
    mostrar(a);
}else if(b>a){
    mostrar(b);
}else{
    mostrar("iguales")
}*/
switch (op) {
    case 1:mostrar(suma());
        
        break;
    case 2:mostrar(resta());
        
        break;
     case 3:mostrar(multi());
        
        break;
     case 4:mostrar(div());
        break;


    default:
        break;
}
function mostrar(resultado){

    document.write(resultado);
    console.log(resultado);
    alert(resultado);
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
    if (b==0);
    return"no se puede dividir";

    return (a/b);
}

