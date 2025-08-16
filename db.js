const mysql = require('mysql2');


const pool = mysql.createPool({
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
