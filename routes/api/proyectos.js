const router = require('express').Router();
const Proyecto = require('../../models/proyecto');

router.get('/', (req, res) => {
    let proyecto = new Proyecto();
    proyecto.titulo = 'Proyecto de prueba';
    proyecto.save().then((p) => {
        console.log(p);
    }).catch(err => {
        console.log(err)
    })
    res.send('hola estas dentro de la api')
})

module.exports = router