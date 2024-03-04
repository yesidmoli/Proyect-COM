import React, { Fragment, useEffect, useState } from 'react';
import './css/main.css';

function DiagnosticForm() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        showPage(currentPage);
        updatePaginationInfo();
    }, [currentPage]);

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const rows = Array.from(document.getElementById('data-table').getElementsByTagName('tr'));

        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function updatePaginationInfo() {
        const totalRows = document.getElementById('data-table').getElementsByTagName('tr').length - 1;
        const totalPages = Math.ceil(totalRows / itemsPerPage);
        document.getElementById('pagination-info').textContent = `Página ${currentPage} de ${totalPages}.`;
    }

    function prevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function nextPage() {
        const totalRows = document.getElementById('data-table').getElementsByTagName('tr').length - 1;
        const totalPages = Math.ceil(totalRows / itemsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

  return (
    <Fragment>
        <h2>Diagnóstico empresarial</h2>

<form id="data-form" action="/enviar/formulario" method="post">
    <div className="text-center">

    </div>
    <table id="data-table">
        <tr>
            <th></th>
            <th>Acepta</th>
            <th>No Acepta</th>
        </tr>
        <tr>
            <td>
                <textarea name="" id="" cols="35" rows="12">En cumplimiento de la ley de Habeas Data Ley 1266 de 2008, el USUARIO titular ACEPTA Y AUTORIZA expresamente el uso de los datos personales y demás información suministrada por medio de este formulario, para los siguientes fines:
                1) Contactarle por alguno de los canales institucionales por personas de la Secretaría para tenerle informado de eventos, convocatorias, capacitaciones u otros beneficios de su interés.
                2) Para fines administrativos, estadísticos, de control y seguimiento, en virtud de los beneficios que se pretenden.
                El USUARIO titular de la información podrá en cualquier momento ejercer sus derechos, como son: conocer, actualizar y rectificar sus datos personales, y ser informado sobre el tratamiento que se le ha dado a los mismos, al igual que presentar peticiones y solicitar la revocación y/o supresión de los datos en los casos que sea procedente.
                NOTA: La persona que se identifica como gestor da fe bajo su responsabilidad,
                que la información que se relaciona a continuación corresponde exactamente con la suministrada por el usuario, titular de la misma y que ha sido plenamente autorizado por éste para el diligenciamiento y uso acorde con lo descrito.
                </textarea>
            </td>
            <td><input type="radio" name="opcion" value="acepta" required /></td>
            <td><input type="radio" name="opcion" value="noacepta" required /></td>
        </tr>
        <tr>
            <td colSpan="3"><h2>DATOS PERSONALES EMPRESARIO / EMPRENDEDOR</h2></td>
        </tr>
        <tr>
            <th>Nombre representante legal</th>
            <th>Cédula</th>
            <th>Expedido en</th>
        </tr>
        <tr>
            <td><input type="text" name="nombre_representante_legal" required /></td>
            <td><input type="text" name="cedula" required /></td>
            <td><input type="date" name="expedido_en" required /></td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
            <th>Dirección</th>
            <th>Barrio</th>
            <th>Comuna</th>
            <th>Antigüedad en meses</th>
            <th>Celular 1</th>
            <th>Celular 2</th>
            <th>Celular</th>
        </tr>
        <tr>
            <td><input type="text" name="direccion" required /></td>
            <td><input type="text" name="barrio" required /></td>
            <td><input type="text" name="comuna" required /></td>
            <td><input type="text" name="antiguedad_en_meses" required /></td>
            <td><input type="text" name="celular1" required /></td>
            <td><input type="text" name="celular2" required /></td>
            <td><input type="text" name="celular" required /></td>
        </tr>
        <tr>
            <th colSpan="3">Nombre de la Empresa</th>
            <th colSpan="4">Correo Electrónico</th>
        </tr>
        <tr>
            <td colSpan="3"><input type="text" name="nombre_empresa" /></td>
            <td colSpan="4"><input type="email" name="correo_electronico" /></td>
        </tr>
        <tr>
            <th>PROCESO DE PLANEAMIENTO ESTRATÉGICO</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>Tiene estructurado un modelo de negocio</p></td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border">Asistir a capacitación modelo de negocio CANVAS</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">X</option>
                        <option value="na">N/A</option>
                    </select>
                </div>
            </td>
            <td><div className="border"><input type="text" placeholder="Responsable" required /></div></td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
            <td><p>Cuenta con un proceso de Direccionamiento Estrategico. (Misión, Visión, Análisis del sector y Análisis DOFA- Debilidades, Oportunidades, Fortalezas y Amenazas)</p></td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border">Asistir a taller modelo de negocio y manual corporativo</div>
                <div className="border">Estructurar la misión y visión</div>
                <div className="border">Estructurar el análisis DOFA</div>
                <div className="border">Estructurar el análisis del Sector</div>
            </td>
            <td>
                <div className="select-container" required>
                    <select className="select-one">
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>

                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>

                    <select className="select-three" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>

                    <select className="select-four" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
            <th>PROCESO DE PLANEAMIENTO ESTRATÉGICO</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>Cuenta con un Plan Estratégico: conforme con los nuevos proveedores, nuevos clientes, nuevos competidores, nuevos productos competidores, nuevas tecnologías y nuevas regulaciones.</p></td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border">Asistir a capacitación Plan Estratégico</div>
                <div className="border">Estructurar Plan Estratégico</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>

                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!--Organigrama--> */}
        <tr>
            <td><p>Tiene Organigrama definido.</p></td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border">Asistir a taller de organigrama</div>
                <div className="border">Estructurar organigrama</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>

                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
            <th>PROCESO DE PLANEAMIENTO ESTRATÉGICO</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        {/* <!-- Manual de Funciones --> */}
        <tr>
            <td><p>Tiene un Manual de Funciones escrito</p></td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border">Asistir a taller de manual de funciones</div>
                <div className="border">Estructurar Manual de Funciones</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>

                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- PROCESO DE PLANEAMIENTO ESTRATEGICO (Cumplimiento) --> */}
        <tr>
            <td><p>PROCESO DE PLANEAMIENTO ESTRATEGICO (Cumplimiento)</p></td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border">Asesoria de cumplimiento y revisión de actividades (Requisito*)</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- .  MERCADEO Y VENTAS --> */}
        <tr>
            <th>MERCADEO Y VENTAS</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>Tiene claramente definido su mercado objetivo,
                sus estrategias de penetración, posicionamiento y comercialización. </p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a taller de mercado objetivo</div>
                <div className="border">Asistir a curso de Mercadeo y ventas</div>
                <div className="border">Asistir a curso de servicio al cliente.</div>
                <div className="border">Estructurar el mercado objeto y mercadeo</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                    <select className="select-three" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                    <select className="select-four" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- Portafolio de productos o servicios --> */}
        <tr>
            <td><p>Cuenta con un portafolio de productos y/o servicios estructurado</p></td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border">Asistir asesoria en marca, imagen, producto y empaque.</div>
                <div className="border">Elaboración del Portafoleo de Servicio - Diseño de marca</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- Plan de estrategias de Marketing --> */}
        <tr>
            <th>MERCADEO Y VENTAS</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>Tiene Desarrollado un Plan de Estrategias de Marketing y de Distribución.
                (Plaza, Precio, Promoción y Producto)</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a taller de Marketing Digital</div>
                <div className="border">Diseño o actualización de redes sociales y/o pagina web</div>
                <div className="border">Asistir a taller de Distribución</div>
                <div className="border">Elaboración de Plan de Distribución</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-three" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-four" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>

            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- Servicios al Cliente --> */}
        <tr>
            <td><p>Tiene conocimientos en servicio al cliente, PITCH y vitrinismo</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a taller de PITCH</div>
                <div className="border">Asesoria de cumplimiento y revisión de actividades
                    (Requisito*)</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- Cumplimiento de Mercadeo y Ventas --> */}
        <tr>
            <th>MERCADEO Y VENTAS</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>MERCADEO Y VENTAS (Cumplimiento)</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asesoria de cumplimiento y revisión de actividades
                    (Requisito*)</div>
                <div className="border">Asistir a taller de preparación a feria
                    (Requisito y asistirá a ferias)</div>
                <div className="border">Asistir a feria cumpliendo con las condiciones</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-three" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- PLANIFICACION Y PROCESO DE PRODUCCION  --> */}
        <tr>
            <th>PLANIFICACION Y PROCESO DE PRODUCCION</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        {/* <!-- Plan de Aprovisionamiento --> */}
        <tr>
            <td><p>Tiene un Plan de Aprovisionamiento estructurado</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir capacitación Plan de Aprovisionamiento</div>
                <div className="border">Asistir capacitación Plan de Inventarios</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- Plan de Inventarios --> */}
        <tr>
            <th>PLANIFICACION Y PROCESO DE PRODUCCION</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>Tiene un Plan de Inventario estructurado</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir capacitación Plan de Inventarios</div>
                <div className="border">Estructurar Plan de Inventarios</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
            <td><p>Tiene un Plan de Mantenimiento estructurado</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir capacitación Plan de Mantenimiento</div>
                <div className="border">Estructurar Plan de Mantenimiento</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
            <th>PLANIFICACION Y PROCESO DE PRODUCCION</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        {/* <!-- Fichas Tecnicas de Productos y Servicios --> */}
        <tr>
            <td><p>Tiene Fichas Tecnicas de sus Productos y Servicios.</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Elaboración de fichas técnicas de P/S</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- Flujograma de Produccion --> */}
        <tr>
            <td><p>La Empresa posee un Flujograma de Produccion</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a taller de flujograma de producción</div>
                <div className="border">Elaboración de flujograma</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- Conocimiento de la Normaticidad --> */}
        <tr>
            <th>PLANIFICACION Y PROCESO DE PRODUCCION</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>La Emperesa Tiene Conocimiento de la Normatividad Legal para su operación.</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Investigar la normatividad legal vigente aplicable al 
                    emprendimiento</div>
                <div className="border">Estructurar matriz de normatividad vigente o normograma</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- PLANIFICACION Y PROCESO DE PRODUCCION  --> */}
        <tr>
            <td><p>PLANIFICACION Y PROCESO DE PRODUCCION</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asesoria de cumplimiento y revisión de actividades 
                    (Requisito*)</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- ASPECTOS GENERALES DE LA CALIDAD (Agroindustria) --> */}
        <tr>
            <th>ASPECTOS GENERALES DE LA CALIDAD (Agroindustria)</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        {/* <!-- Código de barras --> */}
        <tr>
            <td><p>Cuenta con código de barras</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Taller de código de barras</div>
                <div className="border">Elaborar código de barras</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- Manipulacion de Alimentos --> */}
        <tr>
            <td><p>Cuenta con Certificación de Manipulación de Alimentos Vigente</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a capacitación de Manipulación de alimentos</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- Registro Invima --> */}
        <tr>
            <th>ASPECTOS GENERALES DE LA CALIDAD (Agroindustria)</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>Cuenta con Registro Invima para la Calida de sus Productos.</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Acompañar el proceso de solicitud de Registro Invima</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- Tabla Nutricional --> */}
        <tr>
            <td><p>Cuenta con Tabla Nutricional</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a taller de tabla nutricional</div>
                <div className="border">Elaborar tabla nutricional</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- Aspectos generales de la calidad --> */}
        <tr>
            <th>ASPECTOS GENERALES DE LA CALIDAD (Agroindustria)</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>ASPECTOS GENERALES DE LA CALIDAD (Agroindustria)</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asesoria de cumplimiento y revisión de actividades 
                    (Requisito*)</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- Costos y calidad --> */}
        <tr>
            <th> MONITOREO DE COSTOS Y CONTABILIDAD</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        {/* <!-- Plan Financiero --> */}
        <tr>
            <td><p>Cuenta con Plan Financiero</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a taller de Plan Financiero</div>
                <div className="border">Elaboración de plan financiero</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- Plan de Costos --> */}
        <tr>
            <th> MONITOREO DE COSTOS Y CONTABILIDAD</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>Cuenta con Plan de Costos</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a taller de costos</div>
                <div className="border">Asesoria para costeo del producto/ servicio</div>
                <div className="border">Elaboración de plan de costos</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- Punto de equilibrio --> */}
        <tr>
            <td><p>Lleva presupuesto, flujo de caja y contabilidad (punto de equilibrio)</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a taller de flujo de caja y punto de equilibrio</div>
                <div className="border">Asesoria para la elaboración del presupuesto y flujo de caja</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- MONITOREO DE COSTOS Y CONTABILIDAD --> */}
        <tr>
            <th> MONITOREO DE COSTOS Y CONTABILIDAD</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>MONITOREO DE COSTOS Y CONTABILIDAD</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asesoria de cumplimiento y revisión de actividades 
                    (Requisito*)</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- Plan de Exportación --> */}
        <tr>
            <th>PLAN DE EXPORTACIÓN</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        {/* <!-- Plan de Exportación --> */}
        <tr>
            <td><p>Cuenta con un Plan de Exportación</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Asistir a curso de plan de Exportación</div>
                <div className="border">Elaboración del Plan Exportador</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
                <div className="select-container">
                    <select className="select-two" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        <tr>
        <td style={{ display: 'none' }}></td>
        </tr>

        {/* <!-- Acitividades Complementarias --> */}
        <tr>
            <th>PLAN DE EXPORTACIÓN</th>
            <th>SI, NO, N/A</th>
            <th>ACTIVIDAD (Aplica para los NO)</th>
            <th>X, N/A</th>
            <th>Responsable</th>
            <th>Fecha de cumplimiento</th>
            <th>Observaciones</th>
        </tr>
        <tr>
            <td><p>Acitividades Complementarias</p>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            {/* <!-- Actividades --> */}
            <td>
                <div className="border">Otras actividades complementarias</div>
            </td>
            <td>
                <div className="select-container">
                    <select className="select-one" required>
                        <option value="selectX">X</option>
                        <option value="na">NA</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="border"><input type="text" placeholder="Responsable" required /></div>
            </td>
            <td><input type="date" className="border" required /></td>
            <td>
                <textarea name="" id="" cols="20" rows="10" placeholder="Observaciones" required></textarea>
            </td>
        </tr>
        {/* <!-- Nombre y firma --> */}
        <tr>
            <th colSpan="7" className="text-center">Nombre y firma de quién elaboro el documento</th>
        </tr>
        <tr>
            <td colSpan="7">
                <input type="text" placeholder="Nombre Completo" className="text-center" />
            </td>
        </tr>
        <tr>
            <td colSpan="7">
                <p>Firma: <input type="file" /></p>
            </td>
        </tr>
        <tr>
            <td colSpan="7">
                <button className="btn btn-primary text-center enviar" type="submit">Enviar Formulario</button>
            </td>
        </tr>
    </table>
</form>

<div id="pagination-info" className="pagination"></div>

<div className="btn-container">
    <button id="prev-button" onClick={prevPage} className='btn btn-primary btn-previos'>Anterior</button>
    <button id="next-button" onClick={nextPage} className="btn btn-primary">Siguiente</button>
</div>
    </Fragment>
  )
}

export default DiagnosticForm;