# Matriz de pruebas

Completa esta tabla durante la actividad. Debes registrar pruebas antes y despues de corregir.

| No. | Caso de prueba | Datos usados | Resultado esperado | Resultado obtenido antes | Ajuste realizado | Resultado despues | Evidencia |
|---:|---|---|---|---|---|---|---|
| 1 | Cargar la pagina principal | Abrir `index.html` | La pagina carga sin errores criticos | | | | |
| 2 | Registrar datos validos | Ana, leche, 25, lunes | Se agrega registro y aparece mensaje correcto | | | | |
| 3 | Responsable corto | Al, leche, 25, lunes | Mensaje de error por responsable corto | | | | |
| 4 | Producto vacio | Ana, sin producto, 25, lunes | Mensaje de error por producto vacio | | | | |
| 5 | Cantidad cero | Ana, leche, 0, lunes | Mensaje de error por cantidad invalida | | | | |
| 6 | Dia vacio | Ana, leche, 25, sin dia | Mensaje de error por dia vacio | | | | |
| 7 | Clasificacion alta | Leche, 25 | Nivel Alta | | | | |
| 8 | Clasificacion media | Maiz, 50 | Nivel Media | | | | |
| 9 | Cargar datos de ejemplo | Clic en boton | Se cargan registros al hacer clic | | | | |
| 10 | Limpiar registros | Clic en boton | Tabla queda vacia y resumen vuelve a cero | | | | |
| 11 | Ejecutar tests | Abrir `tests.html` | Pruebas aprobadas | | | | |

## Recomendacion

En la columna Evidencia puedes escribir el nombre del archivo de captura, por ejemplo:

```txt
evidencias/captura_03_error_cantidad.png
```
