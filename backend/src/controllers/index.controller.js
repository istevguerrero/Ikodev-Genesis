const { Client } = require('pg');

const dbclient = new Client({

    connectionString: 'postgresql://postgres:password@localhost:5432/ticketsdb'

})

dbclient.connect((error) => {

    if(error) console.log('Hubo un error al conectarse a PostgreSQL');

    else console.log('Conectado con exito');

})


const getUsers = async (req, res) => {

    const query = "SELECT * FROM ticket"

    let response = {};

    dbclient.query(query, (error, dbresponse) => {

        if (error) {

            console.log("Hubo un error el consultar lo tiquetes");

            response = { status: 500, data: null, message: "Hubo un error el consultar lo tiquetes" };

        }

        else {

            console.log("Los tickets son: ", dbresponse.rows);

            response = { status: 200, data: dbresponse.rows, message: "Tickets encontrados exitosamente" };
        }

        res.json(response);

    });

}

module.exports = {

    getUsers

}