function calcular() {
  const precio = parseFloat(document.getElementById("precio").value);
  const impuestos = parseFloat(document.getElementById("impuestos").value);
  const descuento = parseFloat(document.getElementById("descuento").value);

  const valor_impuestos = precio * (impuestos / 100);
  const valor_descuento = precio * (descuento / 100);

  const precio_final = precio + valor_impuestos - valor_descuento;

  document.getElementById("resultado").value = precio_final.toFixed(2);
}




