-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-06-2016 a las 04:51:58
-- Versión del servidor: 10.1.10-MariaDB
-- Versión de PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bicicleteria`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `BorrarProducto` (IN `idp` INT(50))  NO SQL
delete from producto	WHERE id=idp$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertarPersona` (IN `pnombre` VARCHAR(50), IN `papellido` VARCHAR(50), IN `pclave` VARCHAR(50), IN `pdni` INT(50), IN `pfoto` VARCHAR(50), IN `pcorreo` VARCHAR(50), IN `plocalidad` VARCHAR(50), IN `pdireccion` VARCHAR(50))  NO SQL
INSERT into usuario (nombre,apellido,clave,dni,foto,correo,localidad,direccion)
values
(pnombre,papellido,pclave,pdni,pfoto,pcorreo,plocalidad,pdireccion)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertarProducto` (IN `pnombre` VARCHAR(50), IN `pcodigo` VARCHAR(50), IN `pstock` INT(100), IN `pdescripcion` VARCHAR(100), IN `pprecio` FLOAT(50), IN `pfoto` VARCHAR(50))  NO SQL
INSERT into producto (nombre,codigo,stock,descripcion,precio,foto)
values
(pnombre,pcodigo,pstock,pdescripcion,pprecio,pfoto)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ModificarProducto` (IN `pid` INT, IN `pnombre` VARCHAR(50), IN `pcodigo` VARCHAR(50), IN `pstock` INT(100), IN `pdescripcion` VARCHAR(50), IN `pprecio` DECIMAL(50), IN `pfoto` VARCHAR(50))  NO SQL
update producto 
				set nombre=pnombre,
				codigo=pcodigo,
				stock=pstock,
                descripcion=pdescripcion,
                foto=pfoto
				WHERE id=pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `TraerTodosLosProductos` ()  NO SQL
select * from producto$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `TraerUnProducto` (IN `idp` INT(18))  NO SQL
select * from producto where id =idp$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `stock` int(100) NOT NULL,
  `precio` float NOT NULL,
  `foto` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `codigo`, `descripcion`, `stock`, `precio`, `foto`) VALUES
(2, 'cadena', '1', '15', 0, 0, 'a.jpg'),
(3, 'pata de cambio', '2', '4', 0, 4, '1.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `dni` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `clave` varchar(50) NOT NULL,
  `foto` varchar(50) NOT NULL,
  `id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`nombre`, `apellido`, `localidad`, `direccion`, `dni`, `correo`, `clave`, `foto`, `id`) VALUES
('fede', 'nu', '', '', '12345678', '', '1234', 'Mushroom2.PNG', 1),
('fede', 'nu', 'callefalsa1234', 'pordefecto.png', '1234', 'lanus', '1234', 'algo@algo', 2),
('fede', 'nu', '1234', 'Mushroom2.PNG', '0', 'algo@algo.com', 'lanus', '123456789', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
