    db.createCollection("viajes")

    db.viajes.insertOne({
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

