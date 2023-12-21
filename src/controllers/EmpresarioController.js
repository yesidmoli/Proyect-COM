const Empresarios = require('../models/Entrepreneur');


// Función para registrar empresarios a la base de datos.
exports.nuevoEmpresario = async (req, res, next) => {
  try {
    // Sincronizar la tabla solo si no existe
    await Empresarios.sync({ force: false });

    const empresario = await Empresarios.create(req.body);
    res.json({ mensaje: 'El empresario se ha registrado exitosamente', empresario });
  } catch (error) {
    console.error('Error en la creación de un nuevo empresario:', error);
    res.status(500).json({ mensaje: 'Hubo un error al procesar la solicitud' });
    next();
  }
  
};

// función para mostrar todos los empresarios que se encuentran en la base de datos.
exports.mostrarEmpresarios = async (req, res, next) => {
    try {
        const empresarios = await Empresarios.findAll({});
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
        const empresario = await Empresarios.findOne({
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

// función para actualizar los datos de un empresario registrado en la base de datos.
exports.actualizarEmpresario = async (req, res, next) => {
    try {
      const id = req.params.empresario_id;
      // Obtener el empresario existente por su ID
      const empresarioExistente = await Empresarios.findOne({
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
    const eliminarEmpresario = await Empresarios.destroy({
        where: {
            id: id
        }   
    })
    res.json({ mensaje: 'El empleado ha sido eliminado exitosamente'});
}

