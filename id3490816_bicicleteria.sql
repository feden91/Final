-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 07, 2017 at 04:54 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id3490816_bicicleteria`
--

-- --------------------------------------------------------

--
-- Table structure for table `compra`
--

CREATE TABLE `compra` (
  `id` int(50) NOT NULL,
  `codigo` int(50) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `dni` varchar(50) NOT NULL,
  `cantidad` int(50) NOT NULL,
  `precio` float NOT NULL,
  `total` float NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `compra`
--

INSERT INTO `compra` (`id`, `codigo`, `fecha`, `dni`, `cantidad`, `precio`, `total`, `estado`) VALUES
(20, 1, '2017/10/18', '432432342432', 1, 23, 23, 'Pendiente de pago'),
(21, 1, '2017/10/19', '432432342432', 1, 23, 23, 'Preparandose para envio'),
(22, 1, '2017/10/27', '1234567', 3, 23, 69, 'Preparandose para envio'),
(23, 2, '2017/10/27', '1234567', 22, 4, 88, 'Preparandose para envio'),
(27, 1, '2017/11/2', '1234567', 1, 23, 23, 'Preparandose para envio'),
(29, 1, '2017/11/2', '1234567', 1, 23, 23, 'Preparandose para envio'),
(30, 1, '2017/11/2', '1234567', 1, 23, 23, 'Pedido Entregado'),
(31, 2, '2017/11/6', '1234567', 1, 4, 4, 'Preparandose para envio');

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `stock` int(100) NOT NULL,
  `precio` float NOT NULL,
  `foto` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `codigo`, `descripcion`, `stock`, `precio`, `foto`, `tipo`) VALUES
(2, 'Cadena', '1', 'Cadena de cambio varios colores', 9, 23, 'a.jpg', 'Partes'),
(3, 'pata de cambio', '2', '4', 10, 4, '1.jpg', ''),
(5, 'Casco Cerrado', '10', 'Casco Freestyle', 5, 410, 'BikeHelmetWhiteBackground1600-759x500.jpg', 'Indumentaria'),
(6, 'Casco Ciclismo', '11', 'Casco Estilo Ciclismo.Varios colores.', 6, 700, 'como-elegir-el-casco-para-montar-en-bici.jpg', 'Indumentaria'),
(7, 'Guantes Fox', '12', 'Guantes Marca Fox Regulables', 32, 1050, '63982778fa2840cfa07a915691e3c2af-catalog.jpg', 'Indumentaria'),
(8, 'Guantes Enduro', '14', 'Guantes Economicos', 8, 700, 'guantes_2_dedos_enduro.jpg', 'Indumentaria'),
(9, 'Conjunto Ciclismo Livestrong', '15', 'Conjunto Ciclismo Livestrong.Varios Talles.', 3, 2000, '444444.jpg', 'Indumentaria'),
(10, 'Palancas tres piezas asfalto', '16', 'Palancas tres piezas con caja a bolillas.', 5, 500, '2342342.jpg', 'Partes'),
(11, 'Palancas tres piezas Glint', '19', 'Palancas tres piezas con caja a rulemanes.', 4, 1000, '242342.jpg', 'Partes'),
(12, 'Maza Eclat', '24', 'Maza Eclat driver de 9 a rulemanes', 7, 1500, 'prod136210_imgset.jpg', 'Partes'),
(13, 'Bicicleta rodado 12 Spiderman', '30', 'Bicicleta rodado 12 Spiderman', 2, 3000, '2_big.jpg', 'r12'),
(14, 'Bicicleta rodado 14 Niña.', '31', 'Bicicleta rodado 14 Niña.', 2, 3500, '14.jpg', 'r14'),
(15, 'Bicicleta rodado 16 Olmo', '28', 'Bicicleta rodado 16 Olmo', 2, 4000, '16.jpg', 'r16'),
(16, 'Bicicleta R20 Frestyle', '50', 'Bicicleta R20 Frestyle', 3, 6000, '20.jpg', 'r20'),
(17, 'Bicicleta R26 Mountain Bike', '71', 'Bicicleta R26 Mountain Bike', 2, 4000, '26.jpg', 'r26'),
(18, 'Bicicleta R28', '72', 'Bicicleta R28 Estilo Fixed', 3, 5000, '28.jpg', 'r28');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
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
  `id` int(20) NOT NULL,
  `tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`nombre`, `apellido`, `localidad`, `direccion`, `dni`, `correo`, `clave`, `foto`, `id`, `tipo`) VALUES
('fede', 'nun', '1234', '123456789 ', '432432342432', 'algo@algo.com', 'lanus', 'Mushroom2.PNG', 3, 'Administrador'),
('cliente', 'cliente ', 'loc cliente', 'calle lalala 1234', '1234567', 'cliente@cliente.com', 'lanus', 'Mushroom2.PNG', 5, 'Cliente'),
('Empleado', 'Empleado', 'EmpleadoLOC', 'callefalsa12345', '123214325', 'Empleado@Empleado.com', 'lanus', 'pordefecto.png', 6, 'Empleado');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `compra`
--
ALTER TABLE `compra`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
