const Entrepreneur = require('../models/Entrepreneur');
const bcrypt = require('bcryptjs');


// Función para registrar empresarios a la base de datos.
exports.nuevoEmpresario = async (req, res, next) => {
  try {

    // Verificar si la contraseña cumple con los requisitos
    const contrasena = req.body.contrasena;
    if (!esContrasenaValida(contrasena)) {
        return res.status(400).json({ mensaje: 'La contraseña debe contener al menos una letra minuscula, una mayuscula, un caracter especial y 5 números' });
    }

    // Encriptar la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(req.body.contrasena, 10);
    req.body.contrasena = hashedPassword;


    // Sincronizar la tabla solo si no existe
    await Entrepreneur.sync({ force: false });

    const empresarioExistente = await Entrepreneur.findOne({
      where: {
        cedula_representante: req.body.cedula_representante
      }
    });
    // Si el empresario ya existe envía un mensaje de error al usuario.
    if (empresarioExistente) return res.status(409).json({ mensaje: 'El empresario ya existe'});

    // Si no existe pasa a crear el empresario.
    const empresario = await Entrepreneur.create(req.body);
    res.json({ mensaje: 'El empresario se ha registrado exitosamente', empresario });

  } catch (error) {
    // En caso de error interno en el servidor.
    console.error('Error en la creación de un nuevo empresario:', error);
    res.status(500).json({ mensaje: 'Hubo un error al procesar la solicitud' });
    next();
  }
  
};

// Función para validar que la contarseña cumple con los requisitos solicitados.
function esContrasenaValida(contrasena) {
  // Longitud mínima de 8 caracteres
  if (contrasena.length < 8) {
      return false;
  }

  // Al menos una letra mayúscula
  if (!/[A-Z]/.test(contrasena)) {
      return false;
  }

  // Al menos una letra minúscula
  if (!/[a-z]/.test(contrasena)) {
      return false;
  }

  // Al menos un número
  if (!/\d/.test(contrasena)) {
      return false;
  }

  // Al menos un caracter especial.
  if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(contrasena)) {
      return false;
  }

  // Si pasa todas las verificaciones, la contraseña es válida
  return true;
}


// función para mostrar todos los empresarios que se encuentran en la base de datos.
exports.mostrarEmpresarios = async (req, res, next) => {
    try {
        const empresarios = await Entrepreneur.findAll({});
        res.json(empresarios);
    }catch(error) {
        res.json(error);
        next();
    }
}

// función para mostrar un empresario por su ID.
exports.mostrarEmpresarioID = async(req, res, next) => {
    try {
        const id = req.params.empresario_id;
        const empresario = await Entrepreneur.findOne({
            where: {
                id: id
            }
        });
        if (empresario == null){
            return res.json({ mensaje: 'No se ha encontrado ese empresario', empresario});
        }
        // Si el empresario existe en la Base de datos se mostrará en objeto json.
        res.json(empresario);

    }catch(error){
        res.json(error);
    }
}

// Función para mostrar empresario por número de cédula

// función para actualizar los datos de un empresario registrado en la base de datos.
exports.actualizarEmpresario = async (req, res, next) => {
    try {
      const id = req.params.empresario_id;
      // Obtener el empresario existente por su ID
      const empresarioExistente = await Entrepreneur.findOne({
        where: {
          id: id,
        },
      });
  
      // Verificar si el empresario existe
      if (!empresarioExistente) {
        return res.status(404).json({ mensaje: 'No se ha encontrado ese empresario' });
      }
  
      // Actualizar los datos del empresario
      const empresarioActualizado = await empresarioExistente.update(req.body);
  
      // Responder con el empresario actualizado
      res.json({
        mensaje: 'El empresario se ha actualizado exitosamente',
        empresario: empresarioActualizado,
      });
    } catch (error) {
      res.status(500).json(error);
    }
};

// función para eliminar un empresario por su ID.
exports.eliminarEmpresario = async(req, res) => {
    const id = req.params.empresario_id;
    const eliminarEmpresario = await Entrepreneur.destroy({
        where: {
            id: id
        }   
    })
    res.json({ mensaje: 'El empresario ha sido eliminado exitosamente'});
}

