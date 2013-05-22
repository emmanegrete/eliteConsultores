$(document).ready(function(){
	
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

	$(window).stellar();

	

	/*-------- Menu Inicio --------*/
	$(".servicioElite").on({
		mouseenter:function(event){
			event.preventDefault();
			if($(this).hasClass("seccionActiva") != true) {
				var servicio =$(".servicioElite");
				servicio.removeClass("seccionActiva",300);
				$(this).addClass("seccionActiva",300);
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

			var idServicio = $(this).attr("id");
			cargaInicio(idServicio);
		 }
	});
	
	/*-------- Menu Inicio --------*/

});