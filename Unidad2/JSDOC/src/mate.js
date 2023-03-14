/**
 * Es la funcion que regresa el area de un cuadrado
 * @param {Number} lado lado de tipo numero
 * @returns regrea el lado al cuadrado 
 */
export function areaCuadrado(lado) {
    return(lado*lado);
}

/**
 * Es la funcion que regresa el valor del area del triagulo
 * @param {number} base     base y altura de tipo numero para el triangulo
 * @param {number} altura base y altura de tipo numero para el triangulo
 * @returns  nos regresa el resultado al multiplicar la base por la altura y el resultado dividirlo entre 2
 */
export function areaTriangulo(base,altura) {
    return((base*altura)/2);
}

/**
 * Es la funcion que nos regresa el calculo del area del circulo
 * @param {Number} radio el radio de tipo numero para realizar la operación
 * @returns nos regresa el calculo del area del circulo
 */
export function areaCirculo(radio) {
    return(Math.pow((Math.PI*radio),2));
}