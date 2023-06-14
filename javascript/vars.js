/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['Carroñero de la cueva de los murciélagos','Granjero de estiércol de gusano','Limpiadores de animales atropellados','Recolector de basura del barrio chino','Inspector de alcantarillado','Criador de cerdos','Sexador de pollitos','Vexcon','Limpiador de lodos','Techador de alquitrán caliente','Granjero de avestruz','Fabricante de queso','Camaronero','Bio-diesel-hombre','Micro algas hombre','Deshollinador','Vomitólogo aviar','Agricultor de pavo','Granjero de caimanes','Granjero de hongos','Plomero','Controlador de termitas','Reciclador de alimentos de casino','Técnico de garaje','Desmantelador de carrozas de desfile','Limpiador de calaveras','Granjero de geoduck','Limpiador de tanques de combustible','Marcado y necropsia de tiburones','Limpiador de pezuñas','Esquilador de alpacas','Cuidador de monos','Investigador de serpientes','Guardián de pingüinos','Fabricante de campanas','Oficial de control de mosquitos','Minero de carbón','Criador de insectos','Máquina para hacer caca','Registrador de mulas','Cavador de pozos','Excavador de cuevas','Minero de sal','Enólogo','Limpiador de barcos a vapor','Instalador de vallas publicitarias','Domador de serpientes','Curtidor de cuero','Pintor de puentes','Piscicultor','Recolector de huevos de cocodrilo','Cazador de gansos salvajes','Artista de efectos especiales','Fabricante de bolas de arrecife','Guardián de animales exóticos','Técnico de aislamiento por pulverización','Castrador de ovejas','Limpiador de pañales','Creador de bolonia','Taponador de minas abandonado','Representación de animales','Desplumadora de plumón de ganso','Farmacia araña','Constructor de locomotoras','Criador de perros de trineo','Trampero de sanguijuelas','Trabajador de la fábrica de maniquíes','Agricultor de huevos','Cosecha de lúpulo','Fabricante de pergamino','Granjero de gusanos','Fabricante de calabazas','Reciclador de colchones','Limpiador de ventanas de gran altura','Trituradora de inodoro','Ranchero de camellos','Fabricante de tofu','Fabricante de vidrio','Ingeniero de presas','Granja de renos','Fabricante de mármol','Técnico de fuegos artificiales','Gruñidor de gusanos','Fabricante de jarabe de arce','Especialista en control de animales','Granjero de grillos','Cazador de pollos','Técnico de bloqueo del lago','Acabador de hormigón','Trabajador de planta de procesamiento de huesos de vaca','Limpieza de boyas costeras','Comprobación de la profundidad de la mina','Debajo del aislador casero','Criador de animales exóticos','Fugitivo suplente','Tucker de la ruta de hielo','Gestión de especies invasoras','Exterminador de lamprea marina','Cocinero de acuario de tiburones','Trabajador de molino de maíz','Reubicación de animales','Instalador de pararrayos','Operador de fábrica de lana','Mecánico colocador de bolos','Encerador de spa de día','Detective de insectos','Probador de caballos','Procesador de carne personalizado','Removedor de gaviotas de basurero','Pollenador de palmeras datileras','Pavimentadora de asfalto','Destilador de ron','School children lice manager (hada del pelo)','Reemplazo de torres eléctricas','Creador de chatarra','Especialista en cosecha de arándanos','Desarrollador de sabor jelly bean','Buceador/coleccionista de esponjas','Pelador de troncos de cedro','Procesamiento de pescado en el mar de bering','Procesador de madera en rustic mill','Investigador y eliminador de termitas','Recolectores de cangrejos de río','Analista de adn','Cazador de cocodrilos','Pesca de cangrejos (captura más letal)','Minero de ópalo','Jellyballing (cosechadora de medusas bala de cañón)','Instalador de pisos epóxicos','Fraccionador de madera','Montador de remolcadores','Limpiador de torres de agua','Lechón de roca','Tallador de montaña','Limpiador de estadios de hockey','Cirujano de trauma de combate','Controlador/cazador de iguanas de florida'];
var jobs_used = [];
var quals = ['Astronave / Nave espacial','Medalla al mérito','Confesión','Agujero negro','Ambidextro','Pata de palo','Dragón','Vino en caja','Perfil de redes sociales','Cinturón de herramientas','Nacido en las calles','Miedo','Experto','Emocionalmente vacio','Préstamos estudiantiles','Caja','Abierto','Historia triste','Identidad secreta','Profundo','Anillo decodificador','Turbio','Capa','Chocolate','Monóculo','Manopla (Nudillos de bronce)','Filtrar','Espacio para crecer','Crédito adicional','Roca','La coartada perfecta','Bumerang','Receso','Furtivo','Inmunidad diplomática','Acento australiano','Convicción','No tiene sentido del humor','Acento alemán','Respeto a ti mismo','Minivan','Película','Acento británico','Dientes falsos','Habitación insonorizada','Espíritu','Habilidades de supervivencia','Katana','Un dolar','Caña','Conducir','Risa malvada','Problemas paternales','Pereza','Bigote de manillar','Sombrero elegante','Inestable','Sonrisa de un millón de dólares','Nunchakus','Agallas','Lector de mente','Escopeta de caño recortado','Absolutamente adorable','Licencia','No puedo mentir','Tijeras','Experiencia de campo','Alas','Cámara','Medicamento','Ve gente muerta','Cinta negra','Voz suave','Golosinas','Vision nocturna','Diseñado genéticamente','Manos suaves','Paquetes de propulsión','Gancho','Acento ruso','Puede desactivar bombas','No puedo sentir','Bisturí','Nada que perder','Final feliz','Orgullo','Envidiar','Vives con los peces','Consejo','Taburete','Cara de póquer','Compañero','Dulce','Mazo','Periodo de atención corto','Vela aromática','Espada llameante','Indeciso','Incendiario','Manzanas','Escupiendo fuego','Perfil de citas en línea','Traje de tres piezas','Dia de trabajo','Bola de cristal','Premio de consolación','Pasivo agresivo','Inteligencia artificial','Lluvia','Cincuenta tatuajes','Ron','Ética de trabajo','Experimentos','Coche deportivo','Caminante','Fondo fiduciario','Abogado del diablo','1%','Máquina del tiempo','Manos de jazz','Todos los problemas de la historia','Rasgado','Grado asociado','Corazón negro y frío','Garra','Sin sentido del olfato','Cobertizo','Muy mala puntería','Alturas','Acento sureño','Falta de criterio','Varita mágica','Codicia','Paciente','Aerotabla','Complejo de dios','Esbelta figura','Estilo','Tinta invisible','Peinado para cubrir la calvicie','Cadena','Tesoro','Gas incontrolable','Descortés','Reflejo nauseoso','Excusas','Decencia','El antídoto','Barba','Lío caliente','Cosas bonitas','Hocus pocus','Privilegio','Camuflaje','Visión de rayos x','Cascanueces','Cincuenta gatos','Espada de espuma','Poco profundo','Autotitulado','Gabardina','Sudor','Barcos','Polvo de hadas','Avión privado','Cuartos apretados','Acento italiano','Protegido','Pantalones de yoga','Club','Ladrillo','Pedazo de pastel','Paquete','Glotonería','Apocalipsis','Esbirro','Emocionalmente inestable','Grado en línea','Mala suerte','Acento francés','Alucinógenos','Mentiroso patológico','Probador de juegos','Orgánico','Archivos','Capitán','Perchero','Oye voces'];
var quals_used = [];

//counters
var scores = {}; //example, will populate with function later
var numPlayers = 0;
var currentBoss = 0;
var currentPlayer = 1; //tracks which player/employee is going up for quals
var qualCounter = 1;

//Helper Functions
function getJob(){
	if(jobs.length === 0){
		jobs = jobs.concat(jobs_used);
		jobs_used = [];
	}
	var index = Math.floor(Math.random() * jobs.length); //random var
	var result = jobs[index]; //returns result later
	jobs_used = jobs_used.concat(jobs.splice(index, 1)); //puts the jobs into used arr
	return result; //returns result
}
function getQual(){
	if(quals.length === 0){
		quals = quals.concat(quals_used);
		quals_used = [];
	}
	var index = Math.floor(Math.random() * quals.length); //random var
	var result = quals[index]; //returns result later
	quals_used = quals_used.concat(quals.splice(index, 1)); //puts the quals into used arr
	return result; //returns result
}
function nextBoss(){
	return (currentBoss+1 == numPlayers)?0:currentBoss+1; // basically cycles through the players properly
}
function pName(x){
	return Object.keys(scores)[x]; //return dictionary entry using index
}


/***********Animations*************/
//Animate Functions
function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	$('#MainPage .howPlay').hide();
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		$(nSelector).hide();
	}
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		setTimeout(quickAnim, 750+(75*i), nSelector, 'zoomIn',);
	}
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
	setTimeout(quickAnim, 1250, '#MainPage .howPlay', 'zoomIn');
}
function roundStartAnim(){
	setTimeout(quickAnim, 1100, "#GamePage", "slideInDown");
	
	$("#GamePage").children().hide();
	$("#GamePage h1").show();
	var timeoutCounter = 2100;
	var timeoutInterval = 500;
	$("#GamePage").children().each(function () {
	  	if(!$(this).is("h1") && !$(this).is("div#pickWinner")){
	  		setTimeout(quickAnimObj, timeoutCounter, $(this), "slideInRight");
	  		timeoutCounter+=timeoutInterval;
	  	}
	});
	
}

//Animate Helper Functions
function quickAnim(selector, animName){
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
    $(this).show();
  });
};
function quickAnimObj(Obj, animName){
  Obj.addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Obj.removeClass(animName + ' animated');
    Obj.show();
  });
};

function quickAnimHide(selector, animName){
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

animateTitle();

