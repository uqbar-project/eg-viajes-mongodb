db.createCollection("viajes")

db.viajes.save({
    fecha: "23/04/2017",
    chofer: {
        nombre: "Verónica",
        auto: {
            marca: "VW",
            modelo: "Gol",
            patente: "ONG219",
            kilometraje: 50000
        }
    },
    cliente: {
        nombre: "Ramiro Galloso",
        numero: 245
    },
    origen: "UNSAM",
    destino: "Sarmiento y Matheu (San Martín)",
    costo: 110
})


db.viajes.save({
    fecha: "23/04/2017",
    chofer: {
        nombre: "Daniel",
        auto: {
            marca: "Fiat",
            modelo: "Siena",
            patente: "AB001RE",
            kilometraje: 45300
        }
    },
    cliente: {
        nombre: "Eduviges Peralta",
        numero: 791
    },
    origen: "Soul Train",
    destino: "Lincoln y 25 de Mayo (San Martín)",
    costo: 50
})

db.viajes.save({
    fecha: "24/04/2017",
    chofer: {
        nombre: "Daniel",
        auto: {
            marca: "Fiat",
            modelo: "Siena",
            patente: "AB001RE",
            kilometraje: 45300
        }
    },
    cliente: {
        nombre: "Eduviges Peralta",
        numero: 791
    },
    origen: "Pueyrredón y San Lorenzo (San Martín)	",
    destino: "Lincoln y 25 de Mayo (San Martín)",
    costo: 75
})

// Viaje malo
db.viajes.save({
    fecha: "24/04/2017",
    chofer: {
        nombre: "Daniel",
        auto: {
            marca: "Fiat",
            modelo: "Siena",
            patente: "AB001RE",
            kilometraje: 45300
        }
    },
    cliente: {
        nombre: "Eduviges Peralta",
        numero: 791
    },
    origen: "Pueyrredón y San Lorenzo (San Martín)	",
    destino: "Lincoln y 25 de Mayo (San Martín)",
    costo: 10
})

