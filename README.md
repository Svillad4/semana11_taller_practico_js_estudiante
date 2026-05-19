# Semana 11 - Taller practico evaluativo: errores frecuentes en JavaScript, depuracion sistematica y control de flujos

## 1. Datos generales

**Asignatura:** Ejecutar el codigo de programacion del software  
**Unidad:** Unidad 2 - Validacion, correccion y presentacion de proyectos de software  
**Semana:** 11  
**Actividad:** Taller practico: codificar, ejecutar, probar y ajustar  
**Tema:** Errores frecuentes en JavaScript; depuracion sistematica; control de flujos  
**Tipo de actividad:** Tarea / Assignment  
**Entrega:** Moodle  
**Herramientas:** Visual Studio Code, navegador web y consola del navegador

---

## 2. Proposito de la actividad

En esta actividad trabajaras sobre un sistema web pequeno llamado **Control de produccion semanal**. El sistema ya tiene una estructura HTML, estilos CSS y un archivo JavaScript con errores intencionales. Tu reto consiste en abrir el proyecto en Visual Studio Code, ejecutar la aplicacion, identificar fallos, depurar el codigo, aplicar correcciones y demostrar con evidencias que el sistema funciona.

La actividad evalua tu capacidad para:

1. Reconocer errores frecuentes en JavaScript.
2. Leer mensajes de error en la consola del navegador.
3. Usar una metodologia ordenada de depuracion.
4. Aplicar estructuras de control de flujo: `if`, `else`, `switch`, `for`.
5. Validar datos provenientes de formularios.
6. Probar el sistema antes y despues de corregirlo.
7. Documentar los errores encontrados y las soluciones aplicadas.
8. Entregar una carpeta de proyecto organizada con evidencias tecnicas.

---

## 3. Contexto del caso

Una comunidad educativa rural desea llevar un registro semanal de productos como leche, maiz, cafe y huevos. El sistema debe permitir registrar el responsable, el producto, la cantidad y el dia de produccion. Tambien debe clasificar la cantidad registrada como baja, media o alta, segun el producto.

Sin embargo, el sistema presenta errores. Algunos impiden registrar datos, otros alteran la logica de clasificacion y otros producen resultados incorrectos en la tabla o en el resumen.

Tu funcion sera actuar como desarrollador o tester junior: revisar, ejecutar, depurar, corregir y entregar evidencias.

---

## 4. Estructura del proyecto

```txt
semana11_taller_practico_js/
|
|-- README.md
|-- index.html
|-- tests.html
|
|-- css/
|   |-- styles.css
|
|-- js/
|   |-- app.js
|   |-- tests.js
|
|-- docs/
|   |-- 01_leccion_taller.md
|   |-- 02_guia_vs_code.md
|   |-- 03_matriz_pruebas.md
|   |-- 04_bitacora_depuracion.md
|   |-- 05_capturas_y_consola.md
|   |-- 06_rubrica.md
|   |-- 07_checklist_entrega.md
|   |-- 08_enunciado_moodle.md
|
|-- evidencias/
|   |-- README.md
|   |-- plantilla_evidencias.md
|
|-- entrega/
|   |-- instrucciones_entrega.txt
|
|-- .vscode/
|   |-- extensions.json
|   |-- settings.json
```

---

## 5. Archivos principales

### `index.html`

Es la pagina principal del sistema. Contiene el formulario, la tabla y el resumen de produccion.

### `css/styles.css`

Contiene el diseno visual. No es el centro de la evaluacion, pero puedes revisarlo si necesitas mejorar la presentacion.

### `js/app.js`

Es el archivo principal de JavaScript. Aqui estan los errores que debes identificar y corregir.

### `tests.html`

Pagina para ejecutar pruebas de apoyo. Abrela en el navegador y revisa la consola. Las pruebas ayudan a verificar si las funciones principales se comportan correctamente.

### `js/tests.js`

Contiene pruebas basicas. No debes modificar este archivo, salvo que el docente lo indique.

---

## 6. Instrucciones rapidas

1. Descarga el ZIP de la actividad.
2. Descomprime la carpeta.
3. Abre la carpeta completa en Visual Studio Code.
4. Lee este `README.md`.
5. Abre `index.html` en el navegador.
6. Abre la consola del navegador.
7. Prueba el formulario.
8. Identifica errores.
9. Corrige solamente el archivo `js/app.js`, salvo que encuentres una razon tecnica justificada para tocar otro archivo.
10. Abre `tests.html` y ejecuta las pruebas.
11. Completa la bitacora de depuracion.
12. Guarda capturas de la consola y del sistema funcionando.
13. Comprime la carpeta del proyecto corregida.
14. Entrega el ZIP en Moodle.

---

## 7. Flujo de trabajo sugerido

### Paso 1: Ejecutar sin corregir

Antes de cambiar codigo, ejecuta el sistema y observa que falla. No empieces corrigiendo al azar.

Preguntas guia:

- La pagina carga correctamente?
- El formulario permite registrar datos?
- Aparecen errores en consola?
- Los botones responden?
- La tabla muestra datos coherentes?
- El resumen suma correctamente?
- La pagina de pruebas muestra PASS o FAIL?

### Paso 2: Abrir la consola

En el navegador usa:

```txt
F12 > Consola
```

O tambien:

```txt
Clic derecho > Inspeccionar > Consola
```

Lee los mensajes de error. Copia o captura los mas importantes.

### Paso 3: Corregir una cosa a la vez

No cambies todo el archivo al mismo tiempo. Corrige un error, guarda, ejecuta y prueba.

### Paso 4: Ejecutar pruebas

Abre `tests.html`. El objetivo es que las pruebas principales terminen en estado aprobado.

### Paso 5: Documentar

Completa:

- `docs/04_bitacora_depuracion.md`
- `docs/03_matriz_pruebas.md`
- `evidencias/plantilla_evidencias.md`

---

## 8. Reglas de la actividad

1. El trabajo debe hacerse desde Visual Studio Code.
2. Debes conservar la estructura de carpetas.
3. No debes borrar los archivos de documentacion.
4. Debes entregar el proyecto corregido en ZIP.
5. Debes incluir evidencias de pruebas.
6. Si trabajas en pareja, ambos nombres deben aparecer en la bitacora.
7. Las capturas deben mostrar el navegador, la consola o VS Code de forma legible.
8. El sistema debe funcionar sin instalar paquetes externos.

---

## 9. Resultado esperado

Al finalizar, el sistema debe permitir:

1. Registrar un responsable con minimo 3 caracteres.
2. Seleccionar un producto valido.
3. Ingresar una cantidad numerica mayor que cero.
4. Seleccionar un dia de la semana.
5. Mostrar un mensaje de error si hay datos invalidos.
6. Agregar registros validos a la tabla.
7. Clasificar la produccion como baja, media o alta.
8. Calcular total de registros, total de cantidad y promedio.
9. Cargar datos de ejemplo al hacer clic en el boton correspondiente.
10. Limpiar registros al hacer clic en el boton correspondiente.
11. Superar las pruebas de `tests.html`.

---

## 10. Entrega en Moodle

Debes subir un archivo ZIP con nombre:

```txt
Semana11_TallerPractico_ApellidoNombre.zip
```

Si es en pareja:

```txt
Semana11_TallerPractico_Apellido1_Apellido2.zip
```

El ZIP debe contener:

1. Proyecto corregido.
2. `js/app.js` ajustado.
3. Bitacora de depuracion completa.
4. Matriz de pruebas completa.
5. Evidencias de consola y pruebas.
6. Capturas del sistema funcionando.

---

## 11. Criterios de evaluacion resumidos

| Criterio | Valor |
|---|---:|
| Identificacion de errores frecuentes en JavaScript | 20% |
| Correccion tecnica del codigo | 25% |
| Uso de depuracion sistematica y consola | 20% |
| Pruebas y evidencias | 20% |
| Organizacion del repositorio y documentacion | 15% |

Consulta la rubrica completa en:

```txt
docs/06_rubrica.md
```

---

## 12. Recomendacion final

Depurar no es adivinar. Depurar es observar, formular una hipotesis, probar, corregir y documentar. Cada error encontrado es una oportunidad para comprender mejor como funciona JavaScript y como se construye software confiable.
