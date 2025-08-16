const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

connection.query('CREATE DATABASE IF NOT EXISTS eventmoment', (err) => {
  if (err) throw err;
  console.log('Base de données créée !');
  connection.end(); 
});

const pool = mysql.createPool({ //on appelle create pool pour la co
  host: 'localhost',     
  user: 'root', 
  password: '',
  database: 'eventmoment', 
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erreur de connexion MySQL :', err.message);
  } else {
    console.log('Connexion MySQL OK');
    connection.release();
  }
});
module.exports = pool.promise();
