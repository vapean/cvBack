const router = require('express').Router();
const Proyecto = require('../../models/proyecto');
const { check, validationResult } = require('express-validator')

router.get('/', async (req, res) => {
    // let proyecto = new Proyecto();
    // proyecto.titulo = 'Proyecto de prueba';
    // proyecto.save().then((p) => {
    //     console.log(p);
    // }).catch(err => {
    //     console.log(err)
    // })
    // res.send('hola estas dentro de la api')

    try {
        const proyectos = await Proyecto.find();
        res.json(proyectos);
    } catch (error) {
        res.status(503).json({ 'error': err });
    }

})

router.post('/', [
    // check('titulo').not().isEmpty()
    check('titulo', 'El titulo debe incluirse en la peticion y tener un tamaño mñadximo de 300 caracteres').exists().isLength({ max: 300 }),
    check('descripcion', 'La descripcion debe incluirse en la peticion').exists(),
    check('url', 'La url debe ser coreecta').isURL(),

], async (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const nuevoProyecto = await Proyecto.create(req.body);
        res.json(nuevoProyecto);
    } catch (err) {
        res.status(503).json({ 'error': err });
    }

})

router.delete('/:proyectoId', async (req, res) => {
    const proyectoBorrado = await Proyecto.findByIdAndDelete(req.params.proyectoId)
    res.json(proyectoBorrado)
})
module.exports = router