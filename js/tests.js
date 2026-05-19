"use strict";

(function ejecutarPruebas() {
  const app = window.__tallerDebugJS;
  const contenedor = document.getElementById("resultadosTests");
  const resultados = [];

  function registrar(nombre, estado, detalle) {
    resultados.push({ nombre, estado, detalle });
    const etiqueta = estado ? "PASS" : "FAIL";
    const metodo = estado ? console.log : console.error;
    metodo(`${etiqueta} - ${nombre}${detalle ? " | " + detalle : ""}`);
  }

  function test(nombre, fn) {
    try {
      fn();
      registrar(nombre, true, "Correcto");
    } catch (error) {
      registrar(nombre, false, error.message);
    }
  }

  function assertEqual(actual, esperado, mensaje) {
    if (actual !== esperado) {
      throw new Error(`${mensaje}. Esperado: ${esperado}. Recibido: ${actual}`);
    }
  }

  function assertIncludes(lista, texto, mensaje) {
    if (!Array.isArray(lista) || !lista.some(item => String(item).includes(texto))) {
      throw new Error(`${mensaje}. No se encontro: ${texto}`);
    }
  }

  function assertNoThrow(fn, mensaje) {
    try {
      fn();
    } catch (error) {
      throw new Error(`${mensaje}. Error recibido: ${error.message}`);
    }
  }

  if (!app) {
    registrar("Carga del modulo principal", false, "No se encontro window.__tallerDebugJS");
    pintarResultados();
    return;
  }

  test("limpiarTexto elimina espacios al inicio y al final", () => {
    assertEqual(app.limpiarTexto("  Ana Perez  "), "Ana Perez", "limpiarTexto no retorno el texto esperado");
  });

  test("obtenerEtiquetaProducto usa switch para traducir producto", () => {
    assertEqual(app.obtenerEtiquetaProducto("maiz"), "Maiz", "Etiqueta incorrecta para maiz");
  });

  test("validarRegistro detecta responsable corto", () => {
    const errores = app.validarRegistro({ responsable: "Al", producto: "leche", cantidad: 10, dia: "lunes" });
    assertIncludes(errores, "responsable", "No detecto responsable corto");
  });

  test("validarRegistro detecta producto vacio sin mutar el objeto", () => {
    const datos = { responsable: "Ana", producto: "", cantidad: 10, dia: "lunes" };
    const errores = app.validarRegistro(datos);
    assertIncludes(errores, "producto", "No detecto producto vacio");
    assertEqual(datos.producto, "", "La validacion no debe alterar el producto");
  });

  test("validarRegistro detecta cantidad menor o igual a cero sin ReferenceError", () => {
    assertNoThrow(() => {
      const errores = app.validarRegistro({ responsable: "Ana", producto: "leche", cantidad: 0, dia: "lunes" });
      assertIncludes(errores, "cantidad", "No detecto cantidad invalida");
    }, "La validacion de cantidad no debe lanzar error de referencia");
  });

  test("clasificarCantidad clasifica produccion alta", () => {
    assertEqual(app.clasificarCantidad("leche", 25), "Alta", "La clasificacion alta no funciona");
  });

  test("clasificarCantidad clasifica produccion media", () => {
    assertEqual(app.clasificarCantidad("maiz", 50), "Media", "La clasificacion media no funciona");
  });

  test("calcularResumen suma cantidades numericas", () => {
    const resumen = app.calcularResumen([
      { cantidad: 10 },
      { cantidad: 15 },
      { cantidad: 5 }
    ]);
    assertEqual(resumen.totalCantidad, 30, "El total de cantidades debe ser numerico");
  });

  test("calcularResumen calcula promedio", () => {
    const resumen = app.calcularResumen([
      { cantidad: 10 },
      { cantidad: 20 }
    ]);
    assertEqual(resumen.promedio, 15, "El promedio no corresponde");
  });

  pintarResultados();

  function pintarResultados() {
    if (!contenedor) return;
    contenedor.innerHTML = "";

    const total = resultados.length;
    const aprobadas = resultados.filter(item => item.estado).length;
    const resumen = document.createElement("p");
    resumen.className = "muted";
    resumen.textContent = `Pruebas aprobadas: ${aprobadas} de ${total}.`;
    contenedor.appendChild(resumen);

    resultados.forEach(item => {
      const card = document.createElement("div");
      card.className = `test-item ${item.estado ? "test-pass" : "test-fail"}`;
      card.innerHTML = `
        <div class="test-name">${item.estado ? "PASS" : "FAIL"} - ${item.nombre}</div>
        <div class="test-detail">${item.detalle}</div>
      `;
      contenedor.appendChild(card);
    });
  }
})();
