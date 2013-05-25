<?php
//ini_set("display_errors", 0);

$your_email ='emmanuel@emmanuelnegrete.net';// <<=== update to your email address


$errors = '';
$name = '';
$visitor_email = '';
$user_message = '';
if(isset($_POST['nombreCorreo']) && $_POST['nombreCorreo'] != "")
{
	$name = $_POST['nombreCorreo'];
	$visitor_email = $_POST['emailCorreo'];
	$asunto = $_POST['asuntoCorreo'];
	$user_message = $_POST['mensajeCorreo'];
	
	
	///------------Do Validations-------------
		if(empty($name)||empty($visitor_email)||empty($asunto)||empty($user_message)){
			echo"Por favor llena los campos";
			exit();
		}
		if(IsInjected($visitor_email)){
			echo"No debes ingresar esos caracteres.";
			exit();
		}
	
		if(empty($errors)){
			
			$to = $your_email;

			$body = "Nombre: $name\r\n";
			$body .= "Email: $visitor_email\r\n"; 
			$body .= "Mensaje:  $user_message\r\n";
			$headers = "MIME-Version: 1.0\r\n";
			$headers.= "Content-type: text/plain; charset=iso-8859-1\r\n";
			$headers.='From:'.$visitor_email;

			 if(mail($to,$asunto,$body,$headers)){
				echo"Tu mensaje ha sido enviado";
				exit();
			}else{
				echo"Ha habido una falla";
				exit();
			}
			   
		
		}
}
// Function to validate against any email injection attempts
function IsInjected($str)
{
$injections = array('(\n+)',
'(\r+)',
'(\t+)',
'(%0A+)',
'(%0D+)',
'(%08+)',
'(%09+)',

);
$inject = join('|', $injections);
$inject = "/$inject/i";
if(preg_match($inject,$str))
{
return true;
}
else
{
return false;
}
}
?>
