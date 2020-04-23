const express = require('express') // fait un require au module express
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('On a reussi l\'exercice 3 !')) // renvoie la string quand je me rend sur /

const { Client } = require('pg') // fait un require au module pg
const client = new Client({
    host: "db",
    user: 'user',
    database: 'db',
    password: 'pass',
    port: 5432,
}) // Etablie le client Postgres avec les infos de db. Ici le port est celui du container
client.connect()
client.query('SELECT $1::text as message', ['Coucou Vincent !'], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) //Coucou Vincent !
    client.end()
}) // fait un call db et renvoie "Coucou Vincent" dans le terminal pour l'instance de la db postgres
app.listen(port, () => console.log(`Yo! Ici on écoute sur http://localhost:${port}`)) // Renvoie le message du local dans le terminal pour l'instance de l'app js

