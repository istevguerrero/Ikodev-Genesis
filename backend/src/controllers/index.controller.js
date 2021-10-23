const { Client } = require('pg');

const dbclient = new Client({

    connectionString: 'postgresql://postgres:password@localhost:5432/ticketsdb'

})

dbclient.connect((error) => {

    if(error) console.log('Hubo un error al conectarse a PostgreSQL');

    else console.log('Conectado con exito');

})


const getUsers = async (req, res) => {

    const response = await dbclient.query('SELECT * FROM ticket', (error, dbresponse) => {

        if(error)

            console.log("Hubo un error el consultar lo tiquetes")

        else

            console.log("Los tickets son: ", dbresponse.rows);


    });

    response.json({ message: "Se ejecuto el endpoint"})

}

module.exports = {

    getUsers

}