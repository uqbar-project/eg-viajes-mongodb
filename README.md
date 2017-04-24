# Viajes de una remisería - Ejemplo puro en MongoDB

## Objetivo
Muestra cómo generar una [base de viajes de una remisería](https://docs.google.com/document/d/1xJbXRQwSN-wUlYVMrPXHbf9Nf7xJAI-k_-QUjs4KkRI/edit#) en MongoDB.

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
 
## Instalación
Antes de correr los test, tenés que instalar una base de datos [MongoDB Community Edition](https://www.mongodb.com/) y levantar el server. En Windows, [levantan el servicio mongod](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/), en Linux desde una línea de comandos hacen

```bash
$ sudo service mongod start
```

Podés fijarte en la carpeta [scripts](scripts) los queries que podés correr para seguir los ejemplos del apunte.


