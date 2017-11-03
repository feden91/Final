<?php
require_once"AccesoDatos.php";


class compra
{
	public $id;
	
 	public $codigo;
  	public $fecha;

    
    public $dni;
    public $cantidad;
    public $precio;
     public $total;
    public $estado;
	
//--GETTERS Y SETTERS
public function GetId()
{
	return $this->id;
}
public function GetCodigo()
{
	return $this->codigo;
}
public function GetFecha()
{
	return $this->fecha;
}
public function GetDni()
{
	return $this->dni;
}
public function GetCantidad()
{
	return $this->cantiidad;
}
public function GetPrecio()
{
	return $this->precio;
}public function GetTotal()
{
	return $this->total;
}
public function GetEstado()
{
	return $this->estado;
}
public function SetId($valor)
{
	$this->id = $valor;
}
public function SetCodigo($valor)
{
	$this->codigo = $valor;
}
public function SetFecha($valor)
{
	$this->fecha = $valor;
}
public function SetCantidad($valor)
{
	$this->cantidad = $valor;
}

public function SetDni($valor)
{
	$this->dni = $valor;
}
public function SetPrecio($valor)
{
	$this->precio = $valor;
}
public function SetTotal($valor)
{
	$this->total = $valor;
}
public function SetEstado($valor)
{
	$this->estado = $valor;
}
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR


//--------------------------------------------------------------------------------//
//--TOSTRING	
  public function ToString()
{
	  return $this->codigo."-".$this->fecha."-".$this->dni."-".$this->cantidad."-".$this->precio."-".$this->total;
}
	 	
	public static function TraerTodasLasCompras()
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM compra  ");
		$consulta->execute();
		return $consulta->fetchall(PDO::FETCH_CLASS, "compra");
	}


	
	public static function TraerUnaCompra($id) 
	{	
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM compra WHERE id='$id' ");
		$consulta->execute();
		$compraBuscado=$consulta->fetchObject('compra');
		return $compraBuscado;				
	}
	public static function comprasXmes() 
	{	
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT count(*) as Cant2 FROM compra");
		$consulta->execute();
		$compraBuscado=$consulta->fetch(PDO::PARAM_INT);
		return $compraBuscado;				
	}

	public static function comprasTot() 
	{	
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT sum(total) as sum1 FROM compra");
		$consulta->execute();
		$compraBuscado=$consulta->fetch(PDO::PARAM_INT);
		return $compraBuscado;				
	}
	public static function comprasTotPagas() 
	{	
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT count(*) as Cant4  FROM compra WHERE estado!='Pendiente de pago'");
		$consulta->execute();
		$compraBuscado=$consulta->fetch(PDO::PARAM_INT);
		return $compraBuscado;				
	}
	
	public static function BorrarUnaCompra($id)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("DELETE FROM compra WHERE id='$id'");
		$consulta->execute();
		return $consulta->rowCount();
	}

	public static function InsertarUnaCompra($compra)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("INSERT into compra (codigo,fecha,dni,cantidad,precio,total,estado) VALUES ('$compra->codigo','$compra->fecha','$compra->dni','$compra->cantidad','$compra->precio','$compra->total','$compra->estado')");
		$consulta->execute();
		return $objetoAccesoDato->RetornarUltimoIdInsertado();				
	}	

		public static function ModificarUncompra($compra)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("UPDATE compra SET codigo='$compra->codigo', producto='$compra->producto', precio='$compra->precio' WHERE fecha='$compra->fecha'");
		$consulta->execute();
	}

	public static function ModificarEstadoCompra($compra)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("UPDATE compra SET estado='$compra->estado' WHERE id='$compra->id'");
		$consulta->execute();
	}
}



?>