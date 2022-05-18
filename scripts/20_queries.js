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


/* Totales por cliente ordenado por el que más pagó primero */
db.viajes.aggregate( [
   { $match: { fecha : '24/04/2017' } },
   { $group: {
        _id: '$cliente.nombre',
        costo: { $sum: '$costo' }
     }	
   },
   { $sort: { 'costo': -1 } }
])

/* Cambiamos el costo del viaje de Verónica del 23/04/2017 , importante el set para no pisar todos los datos */
db.viajes.update({ "chofer.nombre": "Verónica", "fecha": "23/04/2017"}, {"$set": { "costo": 240 } })

/* Aumento de todos los viajes de Daniel un 20% */
let bulk = db.viajes.initializeOrderedBulkOp()
bulk.find({ "chofer.nombre": "Daniel" }).update({ "$mul": { "costo": 1.2 }})
bulk.execute()
db.viajes.find({ "chofer.nombre": "Daniel"})

   /** Almacenamos ahora la lista de choferes con los puntajes que le dan cada uno de los clientes */
db.choferes.insertOne({ "nombre": "Verónica", puntajes: [ 3, 5, 4]})
db.choferes.insertOne({ "nombre": "Daniel", puntajes: [ 4, 4, 4, 5, 5, 5]})

db.choferes.aggregate(
   [
      { $unwind: '$puntajes' },
      { $group: {
           _id: '$nombre',
           puntaje: { $avg: '$puntajes' }
        }	
      },
      { $sort: { 'puntaje': -1 }}
   ]  
)