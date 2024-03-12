const Empresario = require('../models/Entrepreneur');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Función para iniciar sesión
exports.iniciarSesion = async (req, res, next) => {
    try {
        const { rol_usuario, cedula_representante, contrasena } = req.body;

        // Verificar si el número de documento y la contraseña están vacíos
        if (!cedula_representante) {
            return res.status(400).json({ message: 'El número de documento es requerido' });
        }
        
        if ( cedula_representante.length < 7 ) {
            return res.status(400).json({ message: 'El numero de documento debe contener al menos 8 dígitos' });
        }

        if (!contrasena) {
            return res.status(400).json({ message: 'La contraseña es requerida' });
        }

        if ( contrasena.length < 8 ) {
            return res.status(400).json({ message: 'La contraseña debe contener al menos 8 dígitos' });
        }


        // Buscar al usuario por número de documento y rol
        const usuario = await obtenerUsuarioPorNumeroDocumento(cedula_representante, rol_usuario);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!contrasenaValida) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

       // Generar token JWT con el id, número de documento y rol del usuario
       const token = jwt.sign({
        usuario
        },
        'SECRETKEY', {
            expiresIn: '4h'
        });
        res.cookie('token', token);
        // Enviar respuesta con token
        res.json({ 
            message: `Inicio de sesión exitoso como ${usuario.rol_usuario}`,
            token,
            usuario
        });
        } catch (error) {
        console.error('Error al iniciar sesión', error);
        res.status(500).json({ message: 'Hubo un error al procesar la solicitud', error });
        next();
    }
};

// Función para obtener usuario por número de documento y rol
async function obtenerUsuarioPorNumeroDocumento(cedula_representante, rol_usuario) {
    let usuario;
    switch (rol_usuario) {
        case 'empresario':
            usuario = await Empresario.findOne({ where: { cedula_representante } });
            break;
        case 'admin':
            // Lógica para obtener admin
            break;
        default:
            usuario = null;
    }
    return usuario;
};

exports.logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
    });

    return res.sendStatus(200);
};

exports.verifyToken = async (req, res, next) => {
    try {
        // Verificar y decodificar el token
        const decodedToken = jwt.verify(token, 'SECRETKEY');

        // Obtener el token generado en el inicio de sesión
        const generatedToken = req.cookies.token;

        // Comparar el token enviado con el token generado
        if (token === generatedToken) {
            // Si los tokens coinciden, agregar el usuario al objeto de solicitud para su uso posterior
            req.usuario = decodedToken;
            // Continuar con el siguiente middleware
            next();
        } else {
            // Si los tokens no coinciden, devolver un error de autenticación
            return res.status(401).json({ message: 'Token inválido' });
        }
    } catch (error) {
        // Si hay algún error en la verificación del token, devolver un error de autenticación
        return res.status(401).json({ message: 'Token inválido' });
    }
};