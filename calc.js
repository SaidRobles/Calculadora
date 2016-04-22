var pantalla, resultado, borrar, igual, oper, res, operaciones;
function iniciar(){
    pantalla=document.getElementById("pantalla");
    pantalla.addEventListener("keydown", validar);
    pantalla.addEventListener("keyup", validar);
    resultado=document.getElementById("resultado");
    borrar=document.getElementById("borrar");
    borrar.addEventListener("click", limpiar);
    igual=document.getElementById("igual");
    igual.addEventListener("click", sacarIgual);
    operaciones=document.querySelectorAll(".operacion");
   cargarDefault();
}

function limpiar(){
    oper=[];
    res=[];
    pantalla.value="";
    resultado.innerHTML="";
}

function cargarDefault(){
    oper=[];
    res=[];
    for (var i=0; i< operaciones.length;i++){
        operaciones[i].addEventListener("click", calcular);
    }
}

function validar(e){
    tecla=e.keyCode;
    if (tecla!='48' && tecla!='49' && tecla!='50' && tecla!='51' && tecla!='52' && tecla!='53' && tecla!='54' && tecla!='55' && tecla!='56' && tecla!='57' && tecla!='190'){
        pantalla.value="";
    }
}

function sacarIgual(){
    res.push(String(pantalla.value));
    var operador=oper.shift();
    ejecutarOper(operador);
    oper=[];
    pantalla.value="";
}

function calcular(e){
    var operador=String(e.target.value);

    if (String(pantalla.value)!=""){
        res.push(String(pantalla.value));
    }
    pantalla.value="";
    pantalla.focus();
    
    oper.push(operador);

    if (res.length>1){
         operador=oper.shift();
        ejecutarOper(operador);
    }
}

function ejecutarOper(operador){
    var r;
    
    if (operador=='+'){
        r=parseFloat(res.shift()) + parseFloat(res.shift());
    }else if (operador=='-'){
        r=parseFloat(res.shift()) - parseFloat(res.shift());
        
    }else if (operador=='*'){
        r=parseFloat(res.shift())  * parseFloat(res.shift());
        
    }else if (operador=='/'){
        r=parseFloat(res.shift()) / parseFloat(res.shift());
        
    }
    
    res.push(r);
    resultado.innerHTML=r;
}

addEventListener("load", iniciar);
