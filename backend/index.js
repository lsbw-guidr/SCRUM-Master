// const express = require('express');
// const app = express();
// const port = 3333;

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const server = require('./api/server');

server.get('/', (req, res) => res.send("Index directory for Guidr API."));

// const { Client } = require('pg');

// const client = new Client({
// 	connectionString: process.env.DATABASE_URL,
// 	ssl: true
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
// 	if (err) throw err;
// 	for (let row of res.rows) {
// 		console.log(JSON.stringify(row));
// 	}
// 	client.end();
// });

// console.log(process.env.DB_ENV);

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Server listening on ${port}`));
