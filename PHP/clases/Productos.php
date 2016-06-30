<?php
require_once"accesoDatos.php";
class Producto
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id;
	public $nombre;
 	public $codigo;
  	public $descripcion;
  	public $stock;
  	public $precio;
    public $foto;
    
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetId()
	{
		return $this->id;
	}
	public function GetCodigo()
	{
		return $this->codigo;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetDescripcion()
	{
		return $this->descripcion;
	}
	public function GetStock()
	{
		return $this->stock;
	}
	public function GetPrecio()
	{
		return $this->precio;
	}
	
	public function GetFoto()
	{
		return $this->foto;
	}

	public function SetId($valor)
	{
		$this->id = $valor;
	}
	public function SetCodigo($valor)
	{
		$this->codigo = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetDescripcion($valor)
	{
		$this->descripcion = $valor;
	}
	public function SetStock($valor)
	{
		$this->stock = $valor;
	}
	public function SetPrecio($valor)
	{
		$this->precio = $valor;
	}
	public function SetFoto($valor)
	{
		$this->foto = $valor;
	}
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($codigo=NULL)
	{
		if($codigo != NULL){
			$obj = Producto::TraerUnProducto($codigo);
			
			$this->stock = $obj->stock;
			$this->nombre = $obj->nombre;
			$this->descripcion = $obj->descripcion;
			$this->precio = $obj->precio;
			$this->foto = $obj->foto;
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->codigo."-".$this->nombre."-".$this->stock."-".$this->descripcion."-".$this->precio."-".$this->foto;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnProducto($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		//$consulta =$objetoAccesoDato->RetornarConsulta("select * from producto where id =:id");
		$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnProducto(:id)");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$productoBuscado= $consulta->fetchObject('producto');
		return $productoBuscado;	
					
	}
	
	public static function TraerTodasLosProductos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM producto");
				$consulta->execute();
		
		 
		return $consulta->fetchAll(PDO::FETCH_CLASS, "producto");	
	}
	
	public static function BorrarProducto($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM producto WHERE id=:id");	
		
		$consulta->execute();
		return $consulta->rowCount();
		
	}

		
	
	public static function ModificarProducto($producto)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			/*$consulta =$objetoAccesoDato->RetornarConsulta("
				update persona 
				set nombre=:nombre,
				apellido=:apellido,
				foto=:foto
				WHERE id=:id");
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();*/ 
			$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE producto SET nombre='$producto->nombre', codigo='$producto->codigo', stock='$producto->stock', descripcion='$producto->descripcion', precio='$producto->precio',foto='$producto->foto' WHERE codigo='$producto->codigo'");
			// $consulta->bindValue(':id',$persona->id, PDO::PARAM_INT);
			// $consulta->bindValue(':nombre',$persona->nombre, PDO::PARAM_STR);
			// $consulta->bindValue(':apellido', $persona->apellido, PDO::PARAM_STR);
			// $consulta->bindValue(':foto', $persona->foto, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
  public function validarusuario($usuario,$descripcion)
     {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
           // $consulta =$objetoAccesoDato->RetornarConsulta("select * from usuario where correo='$usuario' and clave='$clave'");
            $consulta =$objetoAccesoDato->RetornarConsulta("CALL validarpersona(:nombre,:clave)");
            $consulta->bindValue(':nombre',$nombre, PDO::PARAM_INT);
            $consulta->bindValue(':clave', $clave, PDO::PARAM_STR);
             $consulta->execute(); 
            $UsuarioBuscado= $consulta->fetchObject('persona');
            return $UsuarioBuscado;

     }
	public static function InsertarProducto($producto)
	{
		 
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("INSERT into producto (nombre,codigo,descripcion,stock,precio,foto) VALUES ('$producto->nombre', '$producto->codigo','$producto->descripcion','$producto->stock','$producto->precio','$producto->foto')");
		$consulta->execute();
		return $objetoAccesoDato->RetornarUltimoIdInsertado();	
		
	
				
	}	
//--------------------------------------------------------------------------------//



	public static function TraerPersonasTest()
	{
		$arrayDePersonas=array();

		$persona = new stdClass();
		$persona->id = "4";
		$persona->nombre = "rogelio";
		$persona->apellido = "agua";
		$persona->dni = "333333";
		$persona->foto = "333333.jpg";

		//$objetJson = json_encode($persona);
		//echo $objetJson;
		$persona2 = new stdClass();
		$persona2->id = "5";
		$persona2->nombre = "Bañera";
		$persona2->apellido = "giratoria";
		$persona2->dni = "222222";
		$persona2->foto = "222222.jpg";

		$persona3 = new stdClass();
		$persona3->id = "6";
		$persona3->nombre = "Julieta";
		$persona3->apellido = "Roberto";
		$persona3->dni = "888888";
		$persona3->foto = "888888.jpg";

		$arrayDePersonas[]=$persona;
		$arrayDePersonas[]=$persona2;
		$arrayDePersonas[]=$persona3;
		 
		

		return  $arrayDePersonas;
				
	}	


}
