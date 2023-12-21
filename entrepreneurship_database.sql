-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 14, 2023 at 06:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `entrepreneurship_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `Activities`
--

CREATE TABLE `Activities` (
  `id` int(11) NOT NULL,
  `ActivityText` varchar(255) DEFAULT NULL,
  `Responsible` varchar(50) DEFAULT NULL,
  `DiagnosticQuestionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Activities`
--

INSERT INTO `Activities` (`id`, `ActivityText`, `Responsible`, `DiagnosticQuestionId`) VALUES
(1, 'Asistir a capacitación modelo de negocio CANVAS', 'Coordinador- Emprendedor', 1),
(2, 'Asistir a taller modelo de negocio y manual corporativo', 'Coordinador- Emprendedor', 2),
(3, 'Estructurar la misión y visión', 'Emprendedor acompaña Especialista', 2),
(4, 'Estructurar el análisis DOFA', 'Emprendedor acompaña Especialista', 2),
(5, 'Estructurar el análisis del Sector', 'Emprendedor acompaña Especialista', 2),
(6, 'Asistir a capacitación Plan Estratégico', 'Especialista- Emprendedor', 3),
(7, 'Estructurar Plan Estratégico', 'Emprendedor acompaña Especialista', 3),
(8, 'Asistir a taller de organigrama', 'Coordinador- Emprendedor', 4),
(9, 'Estructurar organigrama', 'Emprendedor acompaña Especialista', 4),
(10, 'Asistir a taller de manual de funciones', 'Coordinador- Emprendedor', 5),
(11, 'Estructurar Manual de Funciones', 'Emprendedor acompaña Especialista', 5),
(12, 'Asesoria de cumplimiento y revisión de actividades (Requisito*)', 'Especialista - Emprendedor', NULL),
(13, 'Asistir a taller de mercado objetivo', 'Coordinador- Emprendedor', 6),
(14, 'Asistir a curso de Mercadeo y ventas', 'Coordinador- Emprendedor', 6),
(15, 'Asistir a curso de servicio al cliente.', 'Coordinador- Emprendedor', 6),
(16, 'Estructurar el mercado objeto y mercadeo', 'Emprendedor acompaña Especialista', 6),
(17, 'Asistir asesoria en marca, imagen, producto y empaque.', 'Especialista- Emprendedor', 7),
(18, 'Elaboración del Portafoleo de Servicio - Diseño de marca', 'Emprendedor acompaña Especialista', 7),
(19, 'Asistir a taller de Marketing Digital', 'Coordinador- Emprendedor', 8),
(20, 'Diseño o actualización de redes sociales y/o pagina web', 'Emprendedor acompaña Especialista', 8),
(21, 'Asistir a taller de Distribución', 'Coordinador- Emprendedor', 8),
(22, 'Elaboración de Plan de Distribución', 'Emprendedor acompaña Especialista', 8),
(23, 'Asistir a taller de PITCH', 'Coordinador- Emprendedor', 9),
(24, 'Asistir a taller de Vitrinismo', 'Coordinador- Emprendedor', 9),
(25, 'Asesoria de cumplimiento y revisión de actividades (Requisito*)', 'Especialista - Emprendedor', NULL),
(26, 'Asistir a taller de preparación a feria (Requisito y asistirá a ferias)', 'Emprendedor- Especialista', NULL),
(27, 'Asistir a feria cumpliendo con las condiciones', 'Emprendedor', NULL),
(28, 'Asistir capacitación Plan de Aprovisionamiento', 'Coordinador- Emprendedor', 10),
(29, 'Estructurar Plan de Aprovisionamiento', 'Emprendedor acompaña Especialista', 10),
(30, 'Asistir capacitación Plan de Inventarios', 'Coordinador- Emprendedor', 11),
(31, 'Estructurar Plan de Inventarios', 'Emprendedor acompaña Especialista', 11),
(32, 'Asistir capacitación Plan de Mantenimiento', 'Coordinador- Emprendedor', 12),
(33, 'Estructurar Plan de Mantenimiento', 'Emprendedor acompaña Especialista', 12),
(34, 'Elaboración de fichas técnicas de P/S', 'Emprendedor acompaña Especialista', 13),
(35, 'Asistir a taller de flujograma de producción', 'Coordinador- Emprendedor', 14),
(36, 'Elaboración de flujograma', 'Emprendedor acompaña Especialista', 14),
(37, 'Investigar la normatividad legal vigente aplicable al emprendimiento', 'Emprendedor', 15),
(38, 'Estructurar matriz de normatividad vigente o normograma', 'Emprendedor acompaña Especialista', 15),
(39, 'Asesoria de cumplimiento y revisión de actividades (Requisito*)', 'Especialista - Emprendedor', NULL),
(40, 'Taller de código de barras', 'Emprendedor- Especialista', 16),
(41, 'Elaborar código de barras', 'Emprendedor acompaña Especialista', 16),
(42, 'Asistir a capacitación de Manipulación de alimentos', 'Emprendedor', 17),
(43, 'Acompañar el proceso de solicitud de Registro Invima', 'Especialista', 18),
(44, 'Asistir a taller de tabla nutricional', 'Emprendedor- Especialista', 19),
(45, 'Elaborar tabla nutricional', 'Emprendedor acompaña Especialista', 19),
(46, 'Asesoria de cumplimiento y revisión de actividades (Requisito*)', 'Especialista - Emprendedor', NULL),
(47, 'Asistir a taller de Plan Financiero', 'Coordinador- Emprendedor', 20),
(48, 'Elaboración de plan financiero', 'Especialista - Emprendedor', 20),
(49, 'Asistir a taller de costos', 'Coordinador- Emprendedor', 21),
(50, 'Asesoria para costeo del producto/ servicio', 'Especialista - Emprendedor', 21),
(51, 'Elaboración de plan de costos', 'Emprendedor acompaña Especialista', 21),
(52, 'Asistir a taller de flujo de caja y punto de equilibrio', 'Especialista - Emprendedor', 22),
(53, 'Asesoria para la elaboración del presupuesto y flujo de caja', 'Especialista - Emprendedor', 22),
(54, 'Asesoria de cumplimiento y revisión de actividades (Requisito*)', 'Especialista - Emprendedor', NULL),
(55, 'Asistir a curso de plan de Exportación', 'Especialista - Emprendedor', 23),
(56, 'Elaboración del Plan Exportador', 'Especialista - Emprendedor', 23),
(57, 'Otras actividades complementarias', 'Emprendedor', 23);

-- --------------------------------------------------------

--
-- Table structure for table `AssignedActivities`
--

CREATE TABLE `AssignedActivities` (
  `id` int(11) NOT NULL,
  `CompletionDate` datetime DEFAULT NULL,
  `Observations` varchar(100) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `activitiesId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `DiagnosticQuestions`
--

CREATE TABLE `DiagnosticQuestions` (
  `id` int(11) NOT NULL,
  `QuestionText` varchar(255) DEFAULT NULL,
  `sectionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `DiagnosticQuestions`
--

INSERT INTO `DiagnosticQuestions` (`id`, `QuestionText`, `sectionId`) VALUES
(1, 'Tiene estructurado un modelo de negocio', 1),
(2, 'Cuenta con un proceso de Direccionamiento Estrategico. (Misión, Visión, Análisis del sector y Análisis DOFA- Debilidades, Oportunidades, Fortalezas y Amenazas)', 1),
(3, 'Cuenta con un Plan Estratégico: conforme con los nuevos proveedores, nuevos clientes, nuevos competidores, nuevos productos competidores, nuevas tecnologías y nuevas regulaciones.', 1),
(4, 'Tiene Organigrama definido.', 1),
(5, 'Tiene un Manual de Funciones escrito', 1),
(6, 'Tiene claramente definido su mercado objetivo, sus estrategias de penetración, posicionamiento y comercialización. ', 2),
(7, 'Cuenta con un portafolio de productos y/o servicios estructurado ', 2),
(8, 'Tiene Desarrollado un Plan de Estrategias de Marketing y de Distribución. (Plaza, Precio, Promoción y Producto)', 2),
(9, 'Tiene conocimientos en servicio al cliente, PITCH y vitrinismo', 2),
(10, 'Tiene un Plan de Aprovisionamiento estructurado', 3),
(11, 'Tiene un Plan de Inventario estructurado', 3),
(12, 'Tiene un Plan de Mantenimiento estructurado', 3),
(13, 'Tiene Fichas Tecnicas de sus Productos y Servicios.', 3),
(14, 'La Empresa posee un Flujograma de Produccion', 3),
(15, 'La Emperesa Tiene Conocimiento de la Normatividad Legal para su operación.', 3),
(16, 'Cuenta con código de barras', 4),
(17, 'Cuenta con Certificación de Manipulación de Alimentos Vigente			', 4),
(18, 'Cuenta con Registro Invima para la Calida de sus Productos.			', 4),
(19, 'Cuenta con Tabla Nutricional			\r\n			', 4),
(20, 'Cuenta con Plan Financiero			\r\n			', 5),
(21, 'Cuenta con Plan de Costos			\r\n			\r\n			', 5),
(22, 'Lleva presupuesto, flujo de caja y contabilidad (punto de equilibrio)			\r\n			', 5),
(23, 'Cuenta con un Plan de Exportación			\r\n			', 6);

-- --------------------------------------------------------

--
-- Table structure for table `Sections`
--

CREATE TABLE `Sections` (
  `id` int(11) NOT NULL,
  `SectionName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Sections`
--

INSERT INTO `Sections` (`id`, `SectionName`) VALUES
(1, '1.  PROCESO DE PLANEAMIENTO ESTRATEGICO'),
(2, '2.  MERCADEO Y VENTAS'),
(3, '3.   PLANIFICACION Y PROCESO DE PRODUCCION '),
(4, '4.   ASPECTOS GENERALES DE LA CALIDAD (Agroindustria)'),
(5, '5.   MONITOREO DE COSTOS Y CONTABILIDAD'),
(6, '6.   PLAN DE EXPORTACIÓN');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Activities`
--
ALTER TABLE `Activities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `DiagnosticQuestionId` (`DiagnosticQuestionId`);

--
-- Indexes for table `AssignedActivities`
--
ALTER TABLE `AssignedActivities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activitiesId` (`activitiesId`);

--
-- Indexes for table `DiagnosticQuestions`
--
ALTER TABLE `DiagnosticQuestions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sectionId` (`sectionId`);

--
-- Indexes for table `Sections`
--
ALTER TABLE `Sections`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Activities`
--
ALTER TABLE `Activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `AssignedActivities`
--
ALTER TABLE `AssignedActivities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `DiagnosticQuestions`
--
ALTER TABLE `DiagnosticQuestions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `Sections`
--
ALTER TABLE `Sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Activities`
--
ALTER TABLE `Activities`
  ADD CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`DiagnosticQuestionId`) REFERENCES `DiagnosticQuestions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `AssignedActivities`
--
ALTER TABLE `AssignedActivities`
  ADD CONSTRAINT `assignedactivities_ibfk_1` FOREIGN KEY (`activitiesId`) REFERENCES `Activities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `DiagnosticQuestions`
--
ALTER TABLE `DiagnosticQuestions`
  ADD CONSTRAINT `diagnosticquestions_ibfk_1` FOREIGN KEY (`sectionId`) REFERENCES `Sections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
