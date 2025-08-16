const express = require('express');
const cors = require('cors');
const db = require('./db'); 

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log('API EventMoment running sur http://localhost:3000'));
