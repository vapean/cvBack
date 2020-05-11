const express = require('express');
const app = express();

require('dotenv').config();
require('./db');

// app.get('/', (req, res) => {
//     res.send('hola servidor bonico!!')
// });

const apiRouter = require('./routes/api');
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRouter);

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
});