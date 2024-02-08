# Viajes de una remisería - Ejemplo puro en MongoDB

[![build-viajes](https://github.com/uqbar-project/eg-viajes-mongodb/actions/workflows/build.yml/badge.svg)](https://github.com/uqbar-project/eg-viajes-mongodb/actions/workflows/build.yml)

## Objetivo

Muestra cómo generar una [base de viajes de una remisería](https://docs.google.com/document/d/1xJbXRQwSN-wUlYVMrPXHbf9Nf7xJAI-k_-QUjs4KkRI/edit#) en MongoDB.

## Instalación del entorno Mongo

Solo hace falta tener instalado algún Desktop de Docker (el pack docker engine y docker compose), seguí las instrucciones de [esta página](https://phm.uqbar-project.org/material/software) en el párrafo `Docker`.


```bash
docker compose up
```

Eso te levanta una base documental MongoDB.

## Studio 3T: Cliente Mongo

Te recomendamos que instales el cliente **Studio-3T** con el que te podés conectar a la base y hacer las consultas a Mongo. 

Otras opciones son:

- [Mongo DB Compass](https://www.mongodb.com/es/products/compass)
- [Mingo](https://mingo.io/)

Ambas son buenas herramientas aunque son pagas y te proveen una versión de prueba por tiempo limitado. En el caso de Studio 3T, una vez pasados los 30 días automáticamente pasás a la versión gratuita con menos features pero sigue sirviendo para completar tus trabajos prácticos.

### Instalación Studio 3T

Podés descargar el instalador de Studio 3T para tu sistema operativo en [este link](https://studio3t.com/free/). Luego lo descomprimís y ejecutás el asistente.

En la primera pantalla aceptás el acuerdo:

![instalación Studio 3T 1](./images/studio3-config-0.png)

En la segunda pantalla dejás seleccionada la opción por defecto ("Use Studio 3T's default password encryption")

![instalación Studio 3T 2](./images/studio3t-config-1.png)

En la tercera pantalla elegís "Shell centric":

![instalación Studio 3T 3](./images/studio3t-config-2.png)

Luego presionás el botón "Finish" o "Finalizar" y la aplicación se instalará.

## Conexión a la base desde Studio 3T

Para configurar la conexión contra el contenedor de Mongo, te recomendamos que importes [el archivo de conexión](Studio_3T_Connection_URI_Export.uri):

![import connection](images/import_connection.gif)

Los pasos son:

- `File > Connect (Ctrl + N)`
- En la ventana de diálogo presionar el botón `Import`
- Seleccionar la opción `Open Connection URI File`, [el archivo URI que está en este directorio](Studio_3T_Connection_URI_Export.uri) y luego el botón `Import`
- Luego seleccionar `Viajes` y el botón `Import` (o bien doble-click)
- y trabajar normalmente

## Modelo

El modelo de datos se estructura en un documento que contiene: 

* fecha
* origen
* destino
* costo
* el chofer
 * nombre
 * con el auto (del cual conocemos la patente, el kilometraje, marca y modelo)
* y los datos del cliente
 
## Scripts

Podés fijarte en la carpeta [scripts](scripts) los queries que podés correr para seguir los ejemplos del apunte.

## Tips

- Si querés habilitar el tema oscuro para Studio 3T seguí [estas instrucciones](https://studio3t.com/knowledge-base/articles/enable-studio-3t-dark-theme/)

