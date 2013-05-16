$(document).ready(function(){
	$(window).stellar();
	$(".servicioElite").on({
		mouseenter:function(){
		var servicio =$(".servicioElite");
		servicio.removeClass("seccionActiva",400);
		$(this).addClass("seccionActiva",400);
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


		},click: function(){ 
			var idServicio = $(this).attr("id");
		 }
	});

});