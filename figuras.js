// Código del cuadrado
console.group('Cuadrado');
//const ladoCuadrado = 5;
//console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado()
//console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm');

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log('El área del cuadrado es : ' + areaCuadrado + 'cm^2');

console.groupEnd();
// Código del triángulo

console.group('Triangulo');

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log(
//    'Los lados del triángulo miden: ' 
 //   + ladoTriangulo1 + 'cm, ' 
 //   + ladoTriangulo2 + 'cm y ' 
  //  + baseTriangulo + 'cm '
//);

//const alturaTriangulo = 5.5;
//console.log('El altura del triangulo es : ' + alturaTriangulo + 'cm');

function perimetroTriangulo(lado1 , lado2, base){
    return (lado1 + lado2 + base)
};
//console.log('El perimetro del triangulo es : ' + perimetroTriangulo + 'cm');

function areaTriangulo(base, altura){
    return (base * altura)/2;
};
//const  = (baseTriangulo * alturaTriangulo) / 2
//console.log('El área del triangulo es : ' + areaTriangulo + 'cm^2');

console.groupEnd();


// Código del circulo

console.group('Circulo');

//radio
//const radioCirculo = 4;
//console.log('El radio del ciruclo es : ' + radioCirculo + 'cm');

//diametro
function diametroCirculo(radio){
    return 2 * radio
}
//const diametroCirculo = radioCirculo *2;
//console.log('El diametro del circulo es : ' + diametroCirculo + 'cm');

//PI
const PI = Math.PI;
console.log('PI ES : ' + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const  perimetroCirculo = 2 * radioCirculo * PI
//console.log('El perimetro del circulo es : ' + perimetroCirculo + 'cm');

//Area
function areaCirculo(radio){
    return (radio * radio)*PI
}
//const areaCirculo = PI*radioCirculo*radioCirculo
//console.log('el area del circulo es : ' + areaCirculo + 'cm^2');

console.groupEnd();

//aqui interactuamos con el HTML 

//funcions del cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
}

// funciones del circulo

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

// funciones del triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const base = document.getElementById("InputBase");

    const vinput1 = Number(input1.value);
    const vinput2 = Number(input2.value);
    const vbase = Number(base.value);

    const per = perimetroTriangulo(vinput1, vinput2, vbase);
    alert(per);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputBase");
    const altura = document.getElementById("InputAltura");

    const vbase = Number(base.value);
    const valtura = Number(altura.value);

    const area = areaTriangulo(vbase, valtura)
    alert(area)

}

//funcion reto

function trianguloIsosceles(lado1, lado2, base){
    if (lado1 != lado2) {
        alert("Los lados no corresponden a un triangulo isosceles")
    }
    mitad = base / 2
    num = (lado1 * lado1) + (mitad * mitad)
    altura = Math.sqrt(num)
    return altura 
}