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
	
