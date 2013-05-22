$(document).ready(function(){
	
	$(window).stellar();
	$(".inicioServ").on("click",function(){
		$(".ajaxCambio").fadeOut('slow',function(){
			$(this).load("cargaAjax/inicioServ.html",function(){
				$(this).fadeIn("slow");
			});
		});		
		$(".servicioActual").text("");
	});
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
			$(".inicioServ").on("click",function(){
				$(".ajaxCambio").fadeOut('slow',function(){
					$(this).load("cargaAjax/inicioServ.html",function(){
						$(this).fadeIn("slow");
					});
				});		
				$(".servicioActual").text("");
			});
			var idServicio = $(this).attr("id");
			switch(idServicio){

					case "servProfesionales":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
							$(".servicioActual").text("Asesoría y Planeación Fiscal.");
						});
					break;
					case "servSectorPrivado":
						$(".ajaxCambio").load("cargaAjax/servicios_al_sector_privado.html", function() {
							
							$(".servicioActual").text("Auditoría Externa.");
						});
					break;
					case "servSectorPublico":
					 	$(".ajaxCambio").load("cargaAjax/servicios_al_sector_publico.html", function() {
							$(".servicioActual").text("Planeación.");
						});
					break;
					case "nosotros":
						$(".ajaxCambio").load("cargaAjax/nosotros.html", function() {
							$(".servicioActual").text("Antecedentes.");
						});
					break;
				}
		 }
	});
	
	/*-------- Menu Inicio --------*/

});