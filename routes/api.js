const router = require('express').Router();

// router.get('/proyectos', (req, res) => {
//     res.send('hola estas dentro de la api')
// })

const apiRouterProyectos = require('./api/proyectos')

router.use('/proyectos', apiRouterProyectos)

module.exports = router