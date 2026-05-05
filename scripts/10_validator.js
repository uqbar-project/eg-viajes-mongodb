db.createCollection("viajes", {
   validator: { 
      $jsonSchema: {
         bsonType: "object",
         required: ["origen", "destino", "costo"],
         properties: {
            origen: { 
               bsonType: "string",
               description: "Debe ser un string y es obligatorio" 
            },
            destino: { 
               bsonType: "string",
               description: "Debe ser un string y es obligatorio" 
            },
            costo: { 
               bsonType: "number",
               minimum: 30,
               description: "Debe ser un número mayor o igual a 30" 
            }
         }
      }
   },
   validationLevel: "strict",
   validationAction: "error"
})