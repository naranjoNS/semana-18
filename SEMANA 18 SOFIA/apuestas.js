function apostar(){
    //calcular num apostar
    var a=Math.round(Math.random()*10);
    //trasferencia de js a form
    document.getElementById("resultado").value=a;
    //
    var b=document.getElementById("apostado").value;

    //resultado
    if (a==b){
        document.getElementById("salida").value="ganó";
    }else {
        document.getElementById("salida").value="perdió";
    }
}
//funcion cancelar
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}