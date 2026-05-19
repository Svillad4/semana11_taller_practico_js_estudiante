# Leccion del taller - Semana 11

## Tema

Errores frecuentes en JavaScript; depuracion sistematica; control de flujos.

## 1. Que se trabaja esta semana

En esta semana no solo se estudia la teoria de los errores. Se trabaja con un proyecto real en el que el estudiante debe codificar, ejecutar, probar y ajustar. La actividad esta disenada para que el estudiante comprenda que la calidad de un programa depende de escribir codigo, pero tambien de probarlo y corregirlo con metodo.

El sistema contiene fallos intencionales relacionados con:

- Variables mal referenciadas.
- Condiciones incorrectas.
- Uso equivocado de operadores.
- Datos de formulario tratados como texto.
- Ciclos con limites incorrectos.
- Eventos conectados de forma equivocada.
- Funciones llamadas con nombres incorrectos.
- Resumenes que calculan mal los datos.

## 2. Errores frecuentes en JavaScript

### 2.1 Error de sintaxis

Ocurre cuando el codigo esta mal escrito y JavaScript no puede interpretarlo. Ejemplos comunes:

```js
if (edad >= 18 {
  console.log("Mayor de edad");
}
```

Falta cerrar un parentesis.

### 2.2 Error de referencia

Ocurre cuando se usa una variable o funcion que no existe.

```js
errores.push("Dato invalido");
errors.push("Dato invalido");
```

Si el arreglo real se llama `errores`, pero se escribe `errors`, aparece un error de referencia.

### 2.3 Error de tipo

Ocurre cuando se trabaja con un dato como si fuera de otro tipo.

```js
const cantidad = document.getElementById("cantidad").value;
const total = cantidad + 10;
```

Los valores de los formularios llegan como texto. Para operar matematicamente, se debe convertir:

```js
const cantidad = Number(document.getElementById("cantidad").value);
```

### 2.4 Error logico

Ocurre cuando el programa se ejecuta, pero el resultado no corresponde a la regla del problema.

```js
if (errores.length >= 0) {
  return;
}
```

La longitud de un arreglo siempre es mayor o igual que cero. Por eso esa condicion siempre se cumple. Si se quiere detener cuando hay errores, se usa:

```js
if (errores.length > 0) {
  return;
}
```

### 2.5 Error en eventos

Ocurre cuando una funcion se ejecuta antes de tiempo o cuando no queda asociada al boton.

Incorrecto:

```js
boton.addEventListener("click", cargarDatos());
```

Correcto:

```js
boton.addEventListener("click", cargarDatos);
```

## 3. Depuracion sistematica

Depurar no es cambiar lineas al azar. La depuracion sistematica sigue un proceso:

1. Ejecutar el programa.
2. Reproducir el error.
3. Abrir la consola del navegador.
4. Leer el mensaje de error.
5. Ubicar archivo y linea.
6. Formular una hipotesis.
7. Corregir una sola cosa.
8. Guardar y ejecutar de nuevo.
9. Probar el caso afectado.
10. Documentar el hallazgo.

## 4. Control de flujos

El control de flujos define que camino sigue el programa.

### 4.1 Condicional `if`

```js
if (cantidad <= 0) {
  errores.push("La cantidad debe ser mayor que 0.");
}
```

### 4.2 Condicional `if / else if / else`

```js
if (cantidad >= limite) {
  return "Alta";
} else if (cantidad >= limite / 2) {
  return "Media";
} else {
  return "Baja";
}
```

### 4.3 Estructura `switch`

```js
switch (producto) {
  case "leche":
    return "Leche";
  default:
    return "Producto no definido";
}
```

### 4.4 Ciclo `for`

```js
for (let i = 0; i < registros.length; i++) {
  console.log(registros[i]);
}
```

Un error comun es usar `<=` cuando se debe usar `<`.

## 5. Relacion con el proyecto

En este taller debes aplicar los conceptos anteriores en `js/app.js`. No basta con que el programa funcione una vez. Debes demostrar que validaste entradas, corregiste la logica, ejecutaste pruebas y documentaste el proceso.

## 6. Preguntas de analisis para la clase

1. Por que un error logico puede ser mas dificil de detectar que un error de sintaxis?
2. Que ventajas tiene usar la consola del navegador durante la depuracion?
3. Por que es importante convertir los datos del formulario antes de calcular?
4. Que sucede cuando un ciclo recorre una posicion que no existe?
5. Como se evidencia que una correccion realmente funciono?
