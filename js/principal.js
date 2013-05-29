$(document).ready(function(){
	/*--- verifica si un elemento está vacio ---*/

	function isEmpty(obj) {
	    if (typeof obj == 'undefined' || obj === null || obj === '') return true;
	    if (typeof obj == 'number' && isNaN(obj)) return true;
	    if (obj instanceof Date && isNaN(Number(obj))) return true;
	    return false;
	}

	/*--- verifica si un elemento está vacio ---*/
	
	function cargaInicio(identificador){
		var nombreServ;
		var servAct = $(".tituloServicio");
		var cambioAjax = $(".ajaxCambio");
		var direccion;
		switch(identificador){
			
			case "servProfesionales":
				direccion="servicio_Profesionales.html";
				nombreServ="SERVICIOS PROFESIONALES.";
			break;
			case "servSectorPrivado":
				direccion="servicios_al_sector_privado.html";
				nombreServ="SERVICIOS AL SECTOR PRIVADO.";
			break;
			case "servSectorPublico":
				direccion="servicios_al_sector_publico.html";
				nombreServ="SERVICIOS AL SECTOR PÚBLICO.";
			break;
			case "nosotros":
				direccion="nosotros.html";
				nombreServ="NOSOTROS.";
			break;
		}

		cambioAjax.fadeOut("fast",function(){
				cambioAjax.load("cargaAjax/"+direccion,function(){
					cambioAjax.fadeIn("fast", function(){
						servAct.text(nombreServ);
					});
				});
		});
	}

	function cargaServicios(){
		$(".inicioServ").on({
				mouseenter:function(){
					$(this).css({"cursor":"pointer"});
				},click:function(){
					$(".ajaxCambio").fadeOut('fast',function(){
						$(this).load("cargaAjax/inicioServ.html",function(){
							$(this).fadeIn("fast");
						});
					});		
					$(".servicioActual").text("");
				}
		});
	}

	

	/*-------- Menu Inicio --------*/
	$(".servicioElite").on({
		mouseenter:function(event){
			event.preventDefault();
			if($(this).hasClass("seccionActiva") != true) {
				var servicio =$(".servicioElite");
				servicio.removeClass("seccionActiva",300);
				$(this).addClass("seccionActiva",100);
			}

			
			var idServicio = $(this).attr("id");

				switch(idServicio){
					case "servProfesionales":
						$(".tituloServicio").text("SERVICIOS PROFESIONALES");
					break;
					case "servSectorPrivado":
						$(".tituloServicio").text("SERVICIOS AL SECTOR PRIVADO");
					break;
					case "servSectorPublico":
					 	$(".tituloServicio").text("SERVICIOS AL SECTOR PÚBLICO");
					break;
					case "nosotros":
						$(".tituloServicio").text("NOSOTROS");
					break;
				}	

		},click:function(){ 
			
			cargaServicios();

			var idServicio = $(this).attr("id");
			cargaInicio(idServicio);
		 }
	});
	
	/*-------- Menu Inicio --------*/

	/*-------------Envio de correos---------------*/

	/*
	function enviarPorCorreo (click,cantidadInput,url,mensajeFinal){
		var botonClick = $("#"+click);

	}
	*/

	$(".botonEnvio").on("click",function(){
		var nombreMail = $(".nombreMail").val();
		var emailMail = $(".emailMail").val();
		var asuntoMail = $(".asuntoMail").val();
		var mensajeMail = $(".mensajeMail").val();

		var verificaCorreo = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		var errorNombre = $(".errorNombre");
		var errorCorreo = $(".errorEmail");
		var errorAsunto = $(".errorAsunto");
		var errorMensaje = $(".errorMensaje");

		errorMensaje.text("");
		errorNombre.text("");
		errorAsunto.text("");
		errorCorreo.text("");

		if (!isEmpty(nombreMail)){ 
			if(!isEmpty(emailMail)){
				if(verificaCorreo.test(emailMail)){ 
					if(!isEmpty(asuntoMail)){
						if(!isEmpty(mensajeMail)){ 
							var tipo = "POST"; 
							var direccion = "envioCorreo.php"; 
							$.post(direccion,{ nombreCorreo:nombreMail, emailCorreo:emailMail,asuntoCorreo:asuntoMail,mensajeCorreo:mensajeMail}, 
								function(responde){
									$(".botonEnvio").html("<p class='errorRojo'>"+responde+"</p>");
									$(".botonEnvio").removeClass("seccionActiva").off("click");
								}
							);   
						}else{

							errorMensaje.text("¡Vamos! escríbenos algo.");
							noSeEnvio();   
						} 
					}else{ 
						errorAsunto.text("¿Cuál es el asunto del mensaje?");
						noSeEnvio();
					}     
				}else{ 
					errorCorreo.text("Por favor escribe un correo válido.");
					noSeEnvio();
				}
			}else{
				errorCorreo.text("Ocupamos el correo para poder comunicarnos contigo.");
				noSeEnvio();
			}
		}else{     
			errorNombre.text("Escribe tu nombre, es para un mejor servico.");
			noSeEnvio();
		}

	});
	

/*-------------Envio de correos---------------*/
/*----------- smooth scrooll -----------*/

	$(".scroll").click(function(event){
			event.preventDefault();
			var servicoData = $(this).data("servicio");
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500,'swing', function(){
				cargaServicios();
				cargaInicio(servicoData);
				
			});
	});

	function noSeEnvio(){
		$('html,body').animate({scrollTop:$("#contactanos").offset().top}, 500);
		return false;
	}

/*----------- smooth scrooll -----------*/



});




