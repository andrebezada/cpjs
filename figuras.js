// Código del cuadrado
console.group('Cuadrado');
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El área del cuadrado es : ' + areaCuadrado + 'cm^2');

console.groupEnd();
// Código del triángulo

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    'Los lados del triángulo miden: ' 
    + ladoTriangulo1 + 'cm, ' 
    + ladoTriangulo2 + 'cm y ' 
    + baseTriangulo + 'cm '
);

const alturaTriangulo = 5.5;
console.log('El altura del triangulo es : ' + alturaTriangulo + 'cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log('El perimetro del triangulo es : ' + perimetroTriangulo + 'cm');

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log('El área del triangulo es : ' + areaTriangulo + 'cm^2');

console.groupEnd();


// Código del circulo

console.group('Circulo');

//radio
const radioCirculo = 4;
console.log('El radio del ciruclo es : ' + radioCirculo + 'cm');

//diametro
const diametroCirculo = radioCirculo *2;
console.log('El diametro del circulo es : ' + diametroCirculo + 'cm');

//PI
const PI = Math.PI;
console.log('PI ES : ' + PI);

//Circunferencia
const  perimetroCirculo = 2 * radioCirculo * PI
console.log('El perimetro del circulo es : ' + perimetroCirculo + 'cm');

//Area
const areaCirculo = PI*radioCirculo*radioCirculo
console.log('el area del circulo es : ' + areaCirculo + 'cm^2');

console.groupEnd();
