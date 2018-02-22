/* Conocer los viajes del 23/04/2017 */
db.viajes.find({"fecha": "23/04/2017"}).pretty()

/* La cantidad de viajes que se hicieron el 23/04 */
db.viajes.find({"fecha": "23/04/2017"}).count()

/* Los destinos de los viajes del 23/04 */
db.viajes.find({"fecha": "23/04/2017"}).map( viaje => viaje.destino )

/* Vemos el query plan */
db.viajes.find({"fecha": "23/04/2017"}).explain()

/* Agregamos un índice por fecha */
db.viajes.createIndex( {fecha: 1})

/* Cómo queda ahora */
db.viajes.find({"fecha": "23/04/2017"}).explain()

/* Conocer qué viajes hizo Daniel */
db.viajes.find({ "chofer.nombre": "Daniel" }).pretty()

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
