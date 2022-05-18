/* Conocer los viajes del 23/04/2017 */
db.viajes.find({"fecha": "23/04/2017"}).pretty()

/* La cantidad de viajes que se hicieron el 23/04 */
db.viajes.find({"fecha": "23/04/2017"}).count()

/* Los destinos de los viajes del 23/04 */
db.viajes.find({"fecha": "23/04/2017"}).map( viaje => viaje.destino )

/* Otra forma de hacer la consulta trayendo fecha, origen y destino */
db.viajes.find({"fecha": "23/04/2017"}, { fecha: 1, origen: 1, destino: 1, _id: 0 })

/* Ordenado por origen ascendente */
db.viajes.find({"fecha": "23/04/2017"}, { fecha: 1, origen: 1, destino: 1, _id: 0 }).sort({origen: 1})

/* Ordenado por origen descendente */
db.viajes.find({"fecha": "23/04/2017"}, { fecha: 1, origen: 1, destino: 1, _id: 0 }).sort({origen: -1})

/* Traer los primeros 3 documentos */
db.viajes.find().limit(3)

/* Vemos el query plan */
db.viajes.find({"fecha": "23/04/2017"}).explain()

/* Agregamos un índice por fecha */
db.viajes.createIndex( {fecha: 1})

/* Cómo queda ahora */
db.viajes.find({"fecha": "23/04/2017"}).explain()

/* Conocer qué viajes hizo Daniel */
db.viajes.find({ "chofer.nombre": "Daniel" }).limit(5)

/* Destino de los viajes baratos, menores a 70 pesos */
db.viajes.find({ "costo": { "$lt": 70 } }).map((viaje) => viaje.destino)

// o...
db.viajes.find({ "costo": { "$lt": 70 } }, { destino: 1, _id: 0 })

/* Conocer el total en $ de un cliente para un mes */
var mapCostosDelMes = function() {
        var partesFecha = this.fecha.split('/')
        if (parseInt(partesFecha[1]) == 4) {
           emit(this.cliente.nombre, this.costo)
        }
}

var totalesPorCliente = function(nombreCliente, costosViaje) {
		return { costo: Array.sum(costosViaje) }
}

db.viajes.mapReduce(mapCostosDelMes, totalesPorCliente, { out: "totalesPorCliente" })


/* Lo mismo con un aggregate.sum */
db.viajes.aggregate( [
   { $match: { fecha : '23/04/2017' } },
   { $unwind: '$cliente' },
   { $group: {
        _id: '$cliente.nombre',
        costo: { $sum: '$costo' }
     }	
   }
])

/* Aumento retroactivo de los viajes en un 20% */
db.viajes.update()