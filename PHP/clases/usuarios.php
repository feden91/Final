<?php

class usuario
{
	public $id;
	public $nombre;
 	public $apellido;
  	public $dni;
  	public $foto;
    public $clave;
    public $correo;
    public $direccion;
    public $localidad;
	public $tipo;

			public function GetId()
	{
		return $this->id;
	}
	public function GetApellido()
	{
		return $this->apellido;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetDni()
	{
		return $this->dni;
	}
	public function GetClave()
	{
		return $this->clave;
	}
	public function GetCorreo()
	{
		return $this->correo;
	}public function GetDireccion()
	{
		return $this->clave;
	}public function Getlocalidad()
	{
		return $this->clave;
	}
	public function GetFoto()
	{
		return $this->foto;
	}
	public function GetTipo()
	{
		return $this->tipo;
	}
	public function SetId($valor)
	{
		$this->id = $valor;
	}
	public function SetApellido($valor)
	{
		$this->apellido = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetClave($valor)
	{
		$this->clave = $valor;
	}
	
	public function SetDni($valor)
	{
		$this->dni = $valor;
	}
	public function SetFoto($valor)
	{
		$this->foto = $valor;
	}
	public function SetCorreo($valor)
	{
		$this->correo = $valor;
	}
	public function SetDireccion($valor)
	{
		$this->direccion = $valor;
	}
	public function SetLocalidad($valor)
	{
		$this->localidad = $valor;
	}
	public function SetTipo($valor)
	{
		$this->tipo = $valor;
	}	


	 	
	public static function TraerTodosLosUsuarios()
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM usuario");
		$consulta->execute();
		return $consulta->fetchall(PDO::FETCH_CLASS, "usuario");
	}
	public static function cantidadUsuariosclientes(){
		
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT count(*) as Cant FROM `usuario` WHERE tipo!='Administrador' or tipo!='Empleado' ");
		
		$consulta->execute();
		return $consulta->fetch(PDO::PARAM_INT);
	}
	public static function TraerUnUsuario($dni, $clave) 
	{	
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM usuario WHERE Dni='$dni' AND Clave='$clave'");
		$consulta->execute();
		$UsuarioBuscado=$consulta->fetchObject('usuario');
		return $UsuarioBuscado;				
	}

	public static function BorrarUnUsuario($dni)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("DELETE FROM usuario WHERE Dni='$dni'");
		$consulta->execute();
		return $consulta->rowCount();
	}

	public static function InsetarUnUsuario($usuario)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("INSERT into usuario (dni,apellido,nombre,foto,clave,correo,direccion,localidad,tipo) VALUES ('$usuario->dni', '$usuario->apellido','$usuario->nombre','$usuario->foto','$usuario->clave','$usuario->correo','$usuario->direccion','$usuario->localidad','$usuario->tipo')");
		$consulta->execute();
		return $objetoAccesoDato->RetornarUltimoIdInsertado();				
	}	

		public static function ModificarUnUsuario($usuario)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("UPDATE usuario SET Apellido='$usuario->apellido', Nombre='$usuario->nombre', Foto='$usuario->foto', Tipo='$usuario->tipo' WHERE Dni='$usuario->dni'");
		$consulta->execute();
	}


}



?>