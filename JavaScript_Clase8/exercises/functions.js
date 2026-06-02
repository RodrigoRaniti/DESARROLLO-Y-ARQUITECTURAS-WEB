function suma(a,b){return a+b;}
console.log(suma(10,5));

function sumaConValidacion(a,b){
if(typeof a!=="number"||typeof b!=="number"){alert("Uno de los parámetros tiene error");return NaN;}
return a+b;
}

function validateInteger(number){
return Number.isInteger(number);
}

function sumaEnteros(a,b){
if(typeof a!=="number"||typeof b!=="number"){alert("Uno de los parámetros tiene error");return NaN;}
if(!validateInteger(a)){alert("El primer número no es entero");a=Math.round(a);}
if(!validateInteger(b)){alert("El segundo número no es entero");b=Math.round(b);}
return a+b;
}

function validarYRedondear(number){
if(!validateInteger(number)){alert("El número no es entero");return Math.round(number);}
return number;
}

function sumaFinal(a,b){
if(typeof a!=="number"||typeof b!=="number"){alert("Uno de los parámetros tiene error");return NaN;}
a=validarYRedondear(a);
b=validarYRedondear(b);
return a+b;
}

console.log(sumaFinal(7.8,4.3));