const concatenar = require('./Ej1Concatenar');
console.log(concatenar('Hola', 'AAAA' ));

const { suma, resta, division, multiplicacionPI } = require('./Ej2Matemate');

console.log(suma(2, 6));


console.log(resta(2, 6 ));


console.log(division(2, 6 ));


console.log(multiplicacionPI(2));


const crearAlumno = require('./Ej3Alumno');
console.log(crearAlumno('UriElPro', '12345678' ));
console.log(crearAlumno('Obleitas', '87654321' ));


const fs = require('fs');
const contenido = fs.readFileSync('entrada.txt', 'utf8');
fs.writeFileSync('salida.txt', contenido);


const url = require('url');
let objeto = url.parse("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo", true);
console.log(objeto);