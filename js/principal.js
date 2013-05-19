$(document).ready(function(){
	$(window).stellar();

	

	/*-------- Menu Inicio --------*/
	$(".servicioElite").on({
		mouseenter:function(){

			if($(this).hasClass("seccionActiva") != true) {
				var servicio =$(".servicioElite");
				servicio.removeClass("seccionActiva",400);
				$(this).addClass("seccionActiva",400);
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
			var idServicio = $(this).attr("id");
			switch(idServicio){
					case "servProfesionales":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
$(".servicioActual").text("Asesoría y Planeación Fiscal.");
});
					break;
					case "servSectorPrivado":
						$(".ajaxCambio").load("cargaAjax/servicios_al_sector_privado.html", function() {
alert('Load was performed.');
$(".servicioActual").text("Auditoría Externa.");
});
					break;
					case "servSectorPublico":
					 	$(".ajaxCambio").load("cargaAjax/servicios_al_sector_publico.html", function() {
alert('Load was performed.');
$(".servicioActual").text("Planeación.");
});
					break;
					case "nosotros":
						$(".ajaxCambio").load("cargaAjax/nosotros.html", function() {
alert('Load was performed.');
$(".servicioActual").text("Hola.");
});
					break;
				}
		 }
	});
	
	/*-------- Menu Inicio --------*/



	/*-------- Sector privado --------*/


	$(".servicioPrivado").on({
		mouseenter:function(){
			if($(this).hasClass("seccionActiva") != true) {
				var servicio =$(".servicioPrivado");
				servicio.removeClass("seccionActiva",400);
				$(this).addClass("seccionActiva",400);
			}
			
			var idServicio = $(this).attr("id");

				switch(idServicio){
					case "auditoriaExterna":
						$(".servicioActual").text("Auditoría Externa.");
					break;
					case "adminRiesgos":
						$(".servicioActual").text("Administración de Riesgos.");
					break;
					case "diagOrganiza":
					 	$(".servicioActual").text("Diagnóstico Organizacional.");
					break;
					case "consulNego":
						$(".servicioActual").text("Consultoría de Negocios.");
					break;
					case "contraloExt":
						$(".servicioActual").text("Contraloría Externa.");
					break;
					case "asesoDesaLabo":
						$(".servicioActual").text("Asesoría y Desarrollo Laboral.");
					break;
				}	

		},click:function(){ 
			var idServicio = $(this).attr("id");
			switch(idServicio){
					case "auditoriaExterna":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
					case "adminRiesgos":
						$(".ajaxCambio").load("cargaAjax/servicios_al_sector_privado.html", function() {
alert('Load was performed.');
});
					break;
					case "diagOrganiza":
					 	$(".ajaxCambio").load("cargaAjax/servicios_al_sector_publico.html", function() {
alert('Load was performed.');
});
					break;
					case "consulNego":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
					case "contraloExt":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
					case "asesoDesaLabo":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
				}
		 }
	});

	/*-------- Sector privado --------*/

	/*-------- Servicios profesionales --------*/
	

	$(".servProfesional").on({
		mouseenter:function(){
			if($(this).hasClass("seccionActiva") != true) {
				var servicioProf =$(".servProfesional");
				servicioProf.removeClass("seccionActiva",400);
				$(this).addClass("seccionActiva",400);
			}
			
			var idServicio = $(this).attr("id");

				switch(idServicio){
					case "AsesoriaFiscal":
						$(".servicioActual").text("Asesoría y Planeación Fiscal.");
					break;
					case "AsesoriaPlaneacionCorp":
						$(".servicioActual").text("Asesoría y Planeación Corporativa.");
					break;
					case "AsesoPlanPatrimo":
					 	$(".servicioActual").text("Asesoría y Planeación Patrimonial.");
					break;
					case "ServContFinan":
						$(".servicioActual").text("Servicio Contable, Financiero, Fiscales.");
					break;
					case "AsesoPlaneaFinan":
						$(".servicioActual").text("Asesoría y Planeación Financiera.");
					break;
					case "AsesoCtrlInt":
						$(".servicioActual").text("Asesoría en Control Interno.");
					break;
					case "AudiFisFin":
						$(".servicioActual").text("Auditoría Fiscal y Financiera.");
					break;
					case "ServFis":
						$(".servicioActual").text("Servicios Fiscales.");
					break;
					case "ServLegalesCorp":
						$(".servicioActual").text("Servicios legales, corporativos y patrimoniales.");
					break;
					case "outsourcing":
						$(".servicioActual").text("Outsourcing.");
					break;
				}	

		},click:function(){ 
			var idServicio = $(this).attr("id");
			switch(idServicio){
					case "auditoriaExterna":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
					case "adminRiesgos":
						$(".ajaxCambio").load("cargaAjax/servicios_al_sector_privado.html", function() {
alert('Load was performed.');
});
					break;
					case "diagOrganiza":
					 	$(".ajaxCambio").load("cargaAjax/servicios_al_sector_publico.html", function() {
alert('Load was performed.');
});
					break;
					case "consulNego":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
					case "contraloExt":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
					case "asesoDesaLabo":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
				}
		 }
	});

	/*-------- Servicios profesionales --------*/

	/*-------- Servicios al sector publico --------*/
	

	$(".servicioPublico").on({
		mouseenter:function(){
			if($(this).hasClass("seccionActiva") != true) {
				var servicioProf =$(".servicioPublico");
				servicioProf.removeClass("seccionActiva",400);
					$(this).addClass("seccionActiva",400);
			}

			
			var idServicio = $(this).attr("id");

				switch(idServicio){
					case "planeacion":
						$(".servicioActual").text("Planeación.");
					break;
					case "estudioPreInv":
						$(".servicioActual").text("Estudios de pre-inversión.");
					break;
					case "gestionFinanAdmin":
					 	$(".servicioActual").text("Gestión Financiera y administrativa.");
					break;
					case "Presupuesto":
						$(".servicioActual").text("Presupuesto.");
					break;
					case "Auditoria":
						$(".servicioActual").text("Auditoría.");
					break;
					case "tecInf":
						$(".servicioActual").text("Tecnologías de la Información.");
					break;
					case "deudaPublica":
						$(".servicioActual").text("Deuda Pública.");
					break;
					case "ServFis":
						$(".servicioActual").text("Servicios Fiscales.");
					break;
					case "ServLegalesCorp":
						$(".servicioActual").text("Servicios legales, corporativos y patrimoniales.");
					break;
					case "outsourcing":
						$(".servicioActual").text("Outsourcing.");
					break;
				}	

		},click:function(){ 
			var idServicio = $(this).attr("id");
			switch(idServicio){
					case "auditoriaExterna":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
					case "adminRiesgos":
						$(".ajaxCambio").load("cargaAjax/servicios_al_sector_privado.html", function() {
alert('Load was performed.');
});
					break;
					case "diagOrganiza":
					 	$(".ajaxCambio").load("cargaAjax/servicios_al_sector_publico.html", function() {
alert('Load was performed.');
});
					break;
					case "consulNego":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
					case "contraloExt":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
					case "asesoDesaLabo":
						$(".ajaxCambio").load("cargaAjax/servicio_Profesionales.html", function() {
alert('Load was performed.');
});
					break;
				}
		 }
	});

	/*-------- Servicios al sector publico --------*/



	

});