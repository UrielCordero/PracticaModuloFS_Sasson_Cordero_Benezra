const fs = require('fs');

const copiarTexto=(entrada, salida)=>{
    const contenido = fs.readFileSync(entrada, 'utf8');
    fs.writeFileSync(salida, contenido);
}

module.exports=copiarTexto;