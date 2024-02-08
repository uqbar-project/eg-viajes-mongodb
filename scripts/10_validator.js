db.runCommand( {
   collMod: "viajes",
   validator: { $and: [ { origen: { $type: "string", $exists: true } }, 
                        { destino: { $type: "string", $exists: true } }, 
                        { costo: { $type: "double", $gte: 30} } 
                      ] 
              },
   validationLevel : "strict",
   validationAction : "error"
} )
	
// db.viajes.insertOne({
//    fecha: "24/04/2017",
//    chofer: {
//        nombre: "Daniel",
//        auto: {
//            marca: "Fiat",
//            modelo: "Siena",
//            patente: "AB001RE",
//            kilometraje: 45300
//        }
//    },
//    cliente: {
//        nombre: "Eduviges Peralta",
//        numero: 791
//    },
//    origen: "Pueyrredón y San Lorenzo (San Martín)",
//    destino: "Lincoln y 25 de Mayo (San Martín)",
//    costo: 10
// })


db.equipos.aggregate([
   { $unwind: "$jugadores" },
   { $match: { "jugadores.nombre": {"$regex": "Casta.*"} } },
   { $sort: { nombre: -1 } }
]);