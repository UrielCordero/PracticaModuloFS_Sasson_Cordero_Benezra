const paises = require('country-data');

function obtenerMoneda(codigoPais) {
  const pais = paises.countries[codigoPais];

  if (!pais) {
    return "No existe ese codigo de pais";
  }

  const codigoMoneda = pais.currencies[0];
  const moneda = paises.currencies[codigoMoneda];

  if (!moneda) {
    return "Moneda no encontrada para este país.";
  }

  return moneda.name;
}

module.exports = obtenerMoneda;