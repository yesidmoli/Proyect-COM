import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import clienteAxios from '../../config/axios';
import Swal from "sweetalert2";

function NuevoEmpresario({ history }) {
  const [empresario, guardarEmpresario] = useState({
    fecha_diligenciamiento: '',
    cede: '', 
    nombres_representante: '',
    cedula_representante: '',
    fecha_nacimiento_representante: '',
    edad_emprendedor: '',
    genero: '',
    estado_civil: '',
    nivel_educacion: '',
    condicion_especial: '',
    etnia_emprendedor: '',
    direccion_emprendedor: '',
    barrio_emprendedor: '',
    comuna_pereira: '',
    antiguedad_meses: '',
    numero_celular: '',
    numero_cel_alterno: '',
    nombre_empresa: '',
    correo_empresa: '',
    caracteristicas_emprendimiento: '',
    fase_emprendimiento: '',
    unidad_productiva: '',
    tipo_organizacion: '',
    sector_economico: '',
    sector_prioritario: '',
    registro_camara: '',
    renovacion_camara: '',
    diagnostico_empresarial: '',
    observaciones: ''
  });

  const actualizarState = (e) => {
    guardarEmpresario({
      ...empresario,
      [e.target.name]: e.target.value
    });
  };

  const agregarEmpresario = async (e) => {
    e.preventDefault();

      // Verificar campos nulos
      const camposNulos = Object.values(empresario).some(value => value === '' || value === null);

      if (camposNulos) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Todos los campos son obligatorios. Por favor, completa la información.',
        });
        return;
      }

    try {
      // Enviar petición por axios al backend para registrar empresarios.
      const res = await clienteAxios.post("/empresarios", empresario);

      if (res.data.code === 1062) {
        Swal.fire({
          type: 'Error',
          title: 'Hubo un error!',
          text: 'El empresario se encuentra registrado'
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: "Se agregó al empresario correctamente",
          text: res.data.mensaje,
        });
        // Redirige a la página que desees después de agregar exitosamente
        history.push("/");
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      // Puedes mostrar un mensaje de error al usuario o manejarlo de otra manera
    }
  };
    return (
        <Fragment>
            <form onSubmit={agregarEmpresario}>
                <label htmlFor="fecha_diligenciamiento">Fecha de diligenciamiento del diagnóstico:</label>
                <input
                type="date"
                id="fecha_diligenciamiento"
                name="fecha_diligenciamiento"
                required
                onChange={actualizarState}
                />


                <label for="cede">Identificación del CEDE:</label>
                <select id="cede" name="cede" required onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="san_nicolas">San Nicolás</option>
                    <option value="ormaza">Ormaza</option>
                    {/* <!-- Agrega más opciones según sea necesario --> */}
                </select>

                <label for="nombres_representante">Nombres y apellidos del representante legal:</label>
                <input type="text" id="nombres_representante" name="nombres_representante" required 
                onChange={actualizarState}/>

                <label for="cedula_representante">Cédula del representante legal:</label>
                <input type="text" id="cedula_representante" name="cedula_representante"
                required onChange={actualizarState}/>

                <label for="fecha_nacimiento">Fecha de nacimiento del representante legal:</label>
                <input type="date" id="fecha_nacimiento_representante" 
                name="fecha_nacimiento_representante"
                required
                onChange={actualizarState}/>

                <label for="edad_emprendedor">Edad del emprendedor:</label>
                <input type="text" id="edad_emprendedor" name="edad_emprendedor" required 
                onChange={actualizarState}/>

                <label for="genero">Género:</label>
                <select id="genero" name="genero" required onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="no_binario">No Binario</option>
                </select>

                <label for="estado_civil">Estado civil:</label>
                <select id="estado_civil" name="estado_civil" required onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="soltero(a)">Soltero(a)</option>
                    <option value="casado(a)">Casado(a)</option>
                    <option value="viudo(a)">Viudo(a)</option>
                    <option value="union_libre">Unión Libre</option>
                    <option value="divorciado(a)">Divorciado(a)</option>
                </select>

                <label for="nivel_educacion">Nivel de educación del emprendedor:</label>
                <select id="nivel_educacion" name="nivel_educacion" required 
                onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="primaria_terminada">Primaria Terminada</option>
                    <option value="primaria_incompleta">Primaria Incompleta</option>
                    <option value="secundaria_incompleta">Secundaria Incompleta</option>
                    <option value="bachiller">Bachiller</option>
                    <option value="pregrado">Pregrado</option>
                    <option value="postgrado">Postgrado</option>
                </select>

                <label for="condicion_especial">Condiciones especiales:</label>
                <select id="condicion_especial" name="condicion_especial" multiple required 
                onChange={actualizarState}>
                    <option value="condicion_1">Condición 1</option>
                    <option value="condicion_2">Condición 2</option>
                    {/* <!-- Agrega más opciones según sea necesario --> */}
                </select>

                <label for="etnia_emprendedor">Etnia del emprendedor:</label>
                <select id="etnia_emprendedor" name="etnia_emprendedor" required 
                onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="etnia_1">Etnia 1</option>
                    <option value="etnia_2">Etnia 2</option>
                    {/* <!-- Agrega más opciones según sea necesario --> */}
                </select>

                <label for="direccion_emprendedor">Dirección de ubicación de la empresa o del emprendedor:</label>
                <input type="text" id="direccion_emprendedor" name="direccion_emprendedor" 
                required onChange={actualizarState}/>

                <label for="barrio_emprendedor">Barrio de la ubicación de la empresa o del emprendedor:</label>
                <input type="text" id="barrio_emprendedor" name="barrio_emprendedor" required 
                onChange={actualizarState}/>

                <label for="comuna_pereira">Comuna de la ciudad de Pereira:</label>
                <select id="comuna_pereira" name="comuna_pereira" required onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="ferrocarril">Ferrocarril</option>
                    <option value="cuba">Cuba</option>
                    {/* <!-- Agrega más opciones según sea necesario --> */}
                </select>

                <label for="antiguedad_meses">Antigüedad en meses del emprendimiento:</label>
                <input type="text" id="antiguedad_meses" name="antiguedad_meses" 
                required  onChange={actualizarState}/>

                <label for="numero_celular">Número de teléfono celular del emprendedor (principal):</label>
                <input type="text" id="numero_celular" name="numero_celular" required 
                 onChange={actualizarState}/>

                <label for="numero_cel_alterno">Número de teléfono celular alterno del emprendedor:</label>
                <input type="text" id="numero_cel_alterno" name="numero_cel_alterno" required 
                onChange={actualizarState}/>

                <label for="nombre_empresa">Nombre de la empresa:</label>
                <input type="text" id="nombre_empresa" name="nombre_empresa" required 
                onChange={actualizarState}/>

                <label for="correo_empresa">Correo electrónico de la empresa o del emprendedor:</label>
                <input type="email" id="correo_empresa" name="correo_empresa" required 
                onChange={actualizarState}/>

                <label for="caracteristicas_emprendimiento">Características del proyecto productivo:</label>
                <select id="caracteristicas_emprendimiento" 
                name="caracteristicas_emprendimiento" required
                onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="emprendimiento">Emprendimiento</option>
                    <option value="mypime">MYPIME</option>
                </select>

                <label for="fase_emprendimiento">Fase en la que se encuentra el emprendimiento:</label>
                <input type="text" id="fase_emprendimiento" name="fase_emprendimiento" required 
                onChange={actualizarState}/>

                <label for="unidad_productiva">Unidad productiva:</label>
                <select id="unidad_productiva" name="unidad_productiva" required 
                onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="producto">Producto</option>
                    <option value="servicio">Servicio</option>
                </select>

                <label for="tipo_organizacion">Tipo de organización:</label>
                <select id="tipo_organizacion" name="tipo_organizacion" required 
                onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="persona_natural">Persona natural</option>
                    <option value="empresa_unipersonal">Empresa Unipersonal</option>
                    <option value="sociedad_comercial">Sociedad Comercial</option>
                    <option value="entidad_sin_animo_de_lucro">Entidad sin ánimo de lucro</option>
                </select>

                <label for="sector_economico">Sector económico:</label>
                <select id="sector_economico" name="sector_economico" required 
                onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="primario">Primario</option>
                    <option value="secundario">Secundario</option>
                    <option value="terciario">Terciario</option>
                    <option value="cuaternario">Cuaternario</option>
                    <option value="quinario">Quinario</option>
                </select>

                <label for="sector_prioritario">Sector prioritario:</label>
                <select id="sector_prioritario" name="sector_prioritario" required
                onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="economia_naranja">Economía Naranja</option>
                    <option value="economia_verde">Economía Verde</option>
                    <option value="turismo">Turismo</option>
                    <option value="inclusion_social">Inclusión social</option>
                </select>

                <label for="registro_camara">Registro a Cámara de Comercio:</label>
                <select id="registro_camara" name="registro_camara" required
                onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>

                <label for="renovacion_camara">Renovación del registro a Cámara de Comercio:</label>
                <select id="renovacion_camara" name="renovacion_camara" required
                onChange={actualizarState}>
                    <option>Selecciona...</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>

                <label for="diagnostico_empresarial">Diagnóstico empresarial:</label>
                <select id="diagnostico_empresarial" name="diagnostico_empresarial" required
                onChange={actualizarState}>
                  <option>Selecciona...</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                    <option value="na">N/A</option>
                </select>

                <label for="observaciones">Observaciones del diagnóstico:</label>
                <textarea id="observaciones" name="observaciones" rows="4"
                onChange={actualizarState}></textarea>

                <button type="submit">Enviar</button>
            </form>
        </Fragment>
    )
}

export default withRouter(NuevoEmpresario);