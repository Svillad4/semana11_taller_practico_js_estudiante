# Guia de trabajo en Visual Studio Code

## 1. Abrir el proyecto

1. Descomprime el ZIP de la actividad.
2. Abre Visual Studio Code.
3. Selecciona `File > Open Folder`.
4. Busca la carpeta del proyecto.
5. Asegurate de abrir la carpeta completa, no un archivo suelto.

## 2. Archivos que debes revisar

Principalmente trabajaras en:

```txt
js/app.js
```

Tambien debes consultar:

```txt
index.html
tests.html
docs/03_matriz_pruebas.md
docs/04_bitacora_depuracion.md
evidencias/plantilla_evidencias.md
```

## 3. Ejecutar el sistema

Tienes dos opciones.

### Opcion A: Abrir directamente

Haz doble clic sobre `index.html`.

### Opcion B: Usar Live Server

1. Instala la extension Live Server.
2. Clic derecho sobre `index.html`.
3. Selecciona `Open with Live Server`.

## 4. Abrir la consola

En el navegador:

```txt
F12 > Console
```

O:

```txt
Clic derecho > Inspect > Console
```

## 5. Usar console.log

Puedes agregar mensajes temporales para revisar valores:

```js
console.log("Datos del formulario:", datos);
console.log("Errores encontrados:", errores);
console.log("Cantidad:", cantidad, typeof cantidad);
```

Si usas `console.log`, puedes dejar los mas utiles o retirarlos antes de entregar. Si los dejas, deben tener sentido tecnico.

## 6. Ejecutar pruebas

Abre:

```txt
tests.html
```

Revisa la pagina y la consola. Las pruebas deben pasar al finalizar.

## 7. Recomendacion de depuracion

Trabaja con este ciclo:

```txt
Detectar > entender > corregir > guardar > ejecutar > probar > documentar
```

No corrijas muchos errores al mismo tiempo, porque no sabras cual cambio soluciono o dano una parte del sistema.
