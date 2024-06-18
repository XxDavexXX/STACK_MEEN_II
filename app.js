const express = require('express')
const app = express()
const db = require('./db.js')
const clienteRoutes = require('./routes/clientes')
const HomeRoutes = require('./routes/home')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.use('/cliente', clienteRoutes);
app.use('/', HomeRoutes);

app.listen(4000, () => {
    console.log('¡Server UP! en http://localhost:4000')
})