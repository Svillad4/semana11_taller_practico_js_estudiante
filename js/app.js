"use strict";

/*
  Semana 11 - Taller practico JS
  Objetivo: depurar errores frecuentes en JavaScript y aplicar control de flujos.
  Indicacion: corrige este archivo de forma ordenada. No borres funciones completas.
*/

const UMBRALES_PRODUCTO = {
  leche: 20,
  maiz: 80,
  cafe: 40,
  huevos: 60
};

const registros = [];

function limpiarTexto(valor) {
  if (typeof valor !== "string") {
    return "";
  }
  return valor.trim();
}

function obtenerEtiquetaProducto(producto) {
  switch (producto) {
    case "leche":
      return "Leche";
    case "maiz":
      return "Maiz";
    case "cafe":
      return "Cafe";
    case "huevos":
      return "Huevos";
    default:
      return "Producto no definido";
  }
}

function validarRegistro(datos) {
  const errores = [];

  if (limpiarTexto(datos.responsable).length < 3) {
    errores.push("El responsable debe tener minimo 3 caracteres.");
  }

  // Pista tecnica: revisa si aqui se compara o se asigna.
  if (datos.producto = "") {
    errores.push("Debe seleccionar un producto.");
  }

  // Pista tecnica: revisa el nombre del arreglo usado para almacenar errores.
  if (datos.cantidad <= 0) {
    errors.push("La cantidad debe ser mayor que 0.");
  }

  if (datos.dia === "") {
    errores.push("Debe seleccionar un dia.");
  }

  return errores;
}

function clasificarCantidad(producto, cantidad) {
  const limite = UMBRALES_PRODUCTO[producto] || 0;

  // Pista tecnica: esta condicion altera el valor recibido.
  if (cantidad = 0) {
    return "Sin dato";
  }

  if (cantidad >= limite) {
    return "Alta";
  } else if (cantidad >= limite / 2) {
    return "Media";
  } else {
    return "Baja";
  }
}

function obtenerDatosFormulario() {
  return {
    responsable: document.getElementById("responsable").value,
    producto: document.getElementById("producto").value,
    // Pista tecnica: los valores de input llegan como texto.
    cantidad: document.getElementById("cantidad").value,
    dia: document.getElementById("dia").value,
    observaciones: document.getElementById("observaciones").value
  };
}

function mostrarMensaje(texto, tipo) {
  const caja = document.getElementById("mensajes");
  if (!caja) return;

  caja.textContent = texto;
  caja.className = `message ${tipo}`;
}

function registrarProduccion(evento) {
  evento.preventDefault();

  const datos = obtenerDatosFormulario();
  const errores = validarRegistro(datos);

  // Pista tecnica: revisa si esta condicion permite avanzar cuando no hay errores.
  if (errores.length >= 0) {
    mostrarMensaje(errores.join(" "), "error");
    return;
  }

  const nuevoRegistro = {
    responsable: limpiarTexto(datos.responsable),
    producto: datos.producto,
    cantidad: datos.cantidad,
    dia: datos.dia,
    observaciones: limpiarTexto(datos.observaciones),
    nivel: clasificarCantidad(datos.producto, datos.cantidad)
  };

  registros.push(nuevoRegistro);
  renderTabla();
  renderResumen();
  mostrarMensaje("Registro agregado correctamente.", "ok");
  document.getElementById("formProduccion").reset();
}

function renderTabla() {
  const cuerpo = document.getElementById("cuerpoTabla");
  if (!cuerpo) return;

  cuerpo.innerHTML = "";

  if (registros.length === 0) {
    cuerpo.innerHTML = '<tr><td colspan="6" class="empty">Sin registros todavia.</td></tr>';
    return;
  }

  // Pista tecnica: revisa el limite del ciclo.
  for (let i = 0; i <= registros.length; i++) {
    const item = registros[i];
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${i + 1}</td>
      <td>${item.responsable}</td>
      <td>${obtenerEtiquetaProducto(item.producto)}</td>
      <td>${item.cantidad}</td>
      <td>${item.dia}</td>
      <td>${item.nivel}</td>
    `;

    cuerpo.appendChild(fila);
  }
}

function calcularResumen(lista) {
  let totalCantidad = "";
  const totalRegistros = lista.length;

  for (let i = 0; i < lista.length; i++) {
    totalCantidad += lista[i].cantidad;
  }

  const promedio = totalRegistros > 0 ? totalCantidad / totalRegistros : 0;

  return {
    totalRegistros,
    totalCantidad,
    promedio,
    mensaje: totalRegistros >= 3 ? "Muestra suficiente para analizar." : "Se requieren mas datos."
  };
}

function renderResumen() {
  const resumen = calcularResumen(registros);

  const totalRegistros = document.getElementById("totalRegistros");
  const totalCantidad = document.getElementById("totalCantidad");
  const promedioCantidad = document.getElementById("promedioCantidad");
  const alertaResumen = document.getElementById("alertaResumen");

  if (totalRegistros) totalRegistros.textContent = resumen.totalRegistros;
  if (totalCantidad) totalCantidad.textContent = resumen.totalCantidad;
  if (promedioCantidad) promedioCantidad.textContent = Number(resumen.promedio).toFixed(2);
  if (alertaResumen) alertaResumen.textContent = resumen.mensaje;
}

function cargarDatosEjemplo() {
  const ejemplos = [
    { responsable: "Ana Perez", producto: "leche", cantidad: 25, dia: "lunes", observaciones: "Entrega normal" },
    { responsable: "Luis Gomez", producto: "maiz", cantidad: 95, dia: "martes", observaciones: "Lote norte" },
    { responsable: "Marta Ruiz", producto: "cafe", cantidad: 18, dia: "miercoles", observaciones: "Pendiente secado" }
  ];

  for (let i = 0; i < ejemplos.length; i++) {
    const item = ejemplos[i];
    registros.push({
      ...item,
      nivel: clasificarCantidad(item.producto, item.cantidad)
    });
  }

  renderTabla();
  renderResumen();
  mostrarMensaje("Datos de ejemplo cargados.", "ok");
}

function limpiarTodo() {
  registros.length = 0;
  // Pista tecnica: revisa si el nombre de la funcion coincide con el que existe.
  renderTable();
  renderResumen();
  mostrarMensaje("Registros eliminados.", "ok");
}

function inicializarEventos() {
  const form = document.getElementById("formProduccion");
  const btnEjemplo = document.getElementById("btnEjemplo");
  const btnLimpiar = document.getElementById("btnLimpiar");

  if (form) {
    form.addEventListener("submit", registrarProduccion);
  }

  if (btnEjemplo) {
    // Pista tecnica: revisa si se entrega la funcion o si se ejecuta de inmediato.
    btnEjemplo.addEventListener("click", cargarDatosEjemplo());
  }

  if (btnLimpiar) {
    btnLimpiar.addEventListener("click", limpiarTodo);
  }

  renderResumen();
}

window.__tallerDebugJS = {
  registros,
  limpiarTexto,
  obtenerEtiquetaProducto,
  validarRegistro,
  clasificarCantidad,
  calcularResumen
};

document.addEventListener("DOMContentLoaded", inicializarEventos);
