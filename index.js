const express = require('express');
const cors = require('cors');
const db = require('./models')

const app = express();
require("dotenv").config();

//Middlewares

app.use(express.json());
app.use(cors());

//Routes

const WBRouter = require('./routes/Turnos');
app.use('/webhook', WBRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

db.sequelize.sync().then(() => {

    app.listen(process.env.PORT || 4000, () => {
        console.log('Servidor corriendo en puerto 4000');
    });

}).catch((err) => {
    console.log(err);
}); 