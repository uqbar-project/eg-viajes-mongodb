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

## Cliente Mongo

Tenés dos opciones para hacer consultas y manipular la base Mongo:

- **MongoDB Compass** (recomendado, es oficialmente mantenido por Mongo, es fácil de usar y completamente gratuito)
- [**Studio-3T**](https://studio3t.com/free/) (tiene una versión gratuita pero limitada y otra Full con un período de prueba de 30 días)
- [Mingo]

## MongoDB Compass

### Instalación

Podés descargar el instalador para tu sistema operativo en [este link](https://www.mongodb.com/try/download/compass).

Seleccioná la versión (la última estable) y la plataforma para tu sistema operativo.

### Agregar una conexión

Para agregar una conexión, seleccioná `Add Connection` en la parte izquierda:

<img src="./images/dbcompass_add_connection.png" alt="add connection" height="20%" width="20%">

A continuación, copiá este string de conexión:

```bash
mongodb://capo:eyra@localhost:27020/viajes?authSource=admin
```

<img src="./images/dbcompass_connection.png" alt="conexión string" height="60%" width="60%">

Hacé click sobre `Save & Connect` (asegurate de haber levantado el container de Docker) y listo.

La documentación oficial de MongoDB Compass está [aquí](https://www.mongodb.com/docs/compass/?utm_source=chatgpt.com).

### Ejecutar consultas

Para ejecutar consultas, tenés dos opciones.

### Mongo shell

Una vez que te conectes a una base de datos, te aparecerá un botón `Open MongoDB shell` arriba a la derecha para activar la ventana de mongo shell: 

<img src="./images/dbcompass_mongoshell.png" alt="mongo db shell" height="50%" width="70%">

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

