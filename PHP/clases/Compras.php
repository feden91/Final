<?php

class compra
{
	public $id;
	
 	public $codigo;
  	public $fecha;

    
    public $dni;
    public $cantidad;
    public $precio;
     public $total;
    
	

	 	
	public static function TraerTodasLasCompras()
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM compras  ");
		$consulta->execute();
		return $consulta->fetchall(PDO::FETCH_CLASS, "compra");
	}


	
	public static function TraerUnaCompra($fecha, $total) 
	{	
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM compras WHERE fecha='$fecha' AND codigo='$codigo'");
		$consulta->execute();
		$compraBuscado=$consulta->fetchObject('compra');
		return $compraBuscado;				
	}

	public static function BorrarUnaCompra($id)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("DELETE FROM compras WHERE id='$id'");
		$consulta->execute();
		return $consulta->rowCount();
	}

	public static function InsertarUnaCompra($compra)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("INSERT into compras (codigo,fecha,dni,cantidad,precio,total) VALUES ('$compra->codigo','$compra->fecha','$compra->dni','$compra->cantidad','$compra->precio','$compra->total')");
		$consulta->execute();
		return $objetoAccesoDato->RetornarUltimoIdInsertado();				
	}	

		public static function ModificarUncompra($compra)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("UPDATE compras SET codigo='$compra->codigo', producto='$compra->producto', precio='$compra->precio' WHERE fecha='$compra->fecha'");
		$consulta->execute();
	}


}



?>