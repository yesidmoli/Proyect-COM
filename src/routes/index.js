const express = require('express');
const router = express.Router();

const diagnosticController = require('../controllers/diagnosticController');

const authRequired = require('../middlewares/TokenValidator');

const EmpresarioController = require('../controllers/EmpresarioController');

const AuthController = require('../controllers/AuthController');


module.exports = function(){

    // Route to handle the logic for login
    router.post('/login', AuthController.iniciarSesion);
    router.post('/logout', AuthController.logout);

    router.get('/verify-token', authRequired, (req, res) => {
        res.json({ usuario: req.usuario });
    });

    // Ruta para obtener la información del usuario autenticado.
    router.get('/usuario', authRequired, (req, res) => {
        // La información del usuario está disponible en req.usuario, que fue establecida por el middleware de autenticación
        res.json({ usuario: req.usuario });
    });


    // Route to handle diagnosis responses and activity assignment.
    router.post('/diagnostic/answers', authRequired, diagnosticController.handleDiagnosticAnswers);


    // Ruta para registar un Empresario.
    router.post('/empresarios-add', authRequired,EmpresarioController.nuevoEmpresario);

    // Ruta para mostrar todos los empresarios registrados en la base de datos.
    router.get('/empresarios-getAll', authRequired,EmpresarioController.mostrarEmpresarios);

    // Ruta para mostrar un empresario de la base de datos por su ID.
    router.get('/empresarios/:empresario_id', EmpresarioController.mostrarEmpresarioID);

    // Ruta para actualizar los datos de un empresario por su ID.
    router.put('/empresarios/:empresario_id', EmpresarioController.actualizarEmpresario);

    // Ruta para eliminar un empresario por su ID.
    router.delete('/empresarios/:empresario_id', EmpresarioController.eliminarEmpresario);

    return router
}