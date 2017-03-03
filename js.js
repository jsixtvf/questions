var formElement=null;
var respCorrecta=null;
var respuestaSelect=null;
var respuestasCheckbox = [];
var respuestaRadio = [];
var respuestasMultiple = null;
var nota = 0;  //nota de la prueba sobre 3 puntos (hay 3 preguntas)

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el botón
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   inicializar();
   corregirNumber();
   corregirSelect();
   corregirCheckbox();
   corregirRadio();
   corregirMultiple();
   presentarNota();
   return false; 
 }
 
 //LEER XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "questions.xml", true);
 xhttp.send();
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
 
 //TEXT
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;
 ponerDatosInputHtml(tituloInput);
 //respCorrecta=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
 respCorrecta=xmlDoc.getElementsByTagName("answer")[0].innerHTML;
 
  //SELECT
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var tituloSelect=xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("jklm_005").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("jklm_005").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloSelect,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);

 //CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloCheckbox = xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opcionesCheckbox = [];
 var nopt = xmlDoc.getElementById("jklm_004").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("jklm_004").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);
 var nres = xmlDoc.getElementById("jklm_004").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("jklm_004").getElementsByTagName("answer")[i].innerHTML;
 }

 // RADIO
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var tituloRadio = xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opcionesRadio = [];
 var nopt = xmlDoc.getElementById("jklm_001").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio[i]=xmlDoc.getElementById("jklm_001").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosRadioHtml(tituloRadio,opcionesRadio);
 //respuestaRadio=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
   var nres = xmlDoc.getElementById("jklm_001").getElementsByTagName('answer').length;
   for (i = 0; i < nres; i++) { 
    respuestaRadio[i]=xmlDoc.getElementById("jklm_001").getElementsByTagName("answer")[i].innerHTML;
 }

 // MULTIPLE
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloMultiple = xmlDoc.getElementsByTagName("title")[4].innerHTML;
 var opcionesMultiple = [];
 var nopt = xmlDoc.getElementById("jklm_009").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesMultiple[i]=xmlDoc.getElementById("jklm_009").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosMultipleHtml(tituloMultiple,opcionesMultiple);
 //respuestasMultiple=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
 var nres = xmlDoc.getElementById("jklm_009").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasMultiple[i]=xmlDoc.getElementById("jklm_009").getElementsByTagName("answer")[i].innerHTML;
 }
}

//****************************************************************************************************
//implementación de la corrección

function corregirNumber(){
  //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
  //en este ejemplo hace una comparación de números enteros
  var s=formElement.elements[0].value;     
  if (s==respCorrecta) {
   darRespuestaHtml("P1: Exacto!");
   nota +=1;
  }
  else {
   darRespuestaHtml("P1: Te has equivocado");
   // if (s!=respCorrecta) darRespuestaHtml("P1: Te has equivocado");
    
  }
}

function corregirSelect(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[1];  
  if (sel.selectedIndex==respuestaSelect) {
   darRespuestaHtml("P2: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P2: Incorrecto");
}

//Si necesitáis ayuda para hacer un corregirRadio() decirlo, lo ideal es que a podáis construirla modificando corregirCheckbox
function corregirCheckbox(){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.historia.length; i++) {  //"historia" es el nombre asignado a todos los checkbox
   if (f.historia[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox.length; j++) {
     if (i==respuestasCheckbox[j]) escorrecta[i]=true;
    }
   } 
  }
  //Por cada opción que está chequedada, si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
  for (i = 0; i < f.historia.length; i++) {   
   if (f.historia[i].checked) {
    if (escorrecta[i]) {
     nota +=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: "+i+" correcta");    
    } else {
     nota -=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: "+i+" incorrecta");
    }   
   }
  }
}

function corregirRadio(){
 
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.historia1.length; i++) {  //"historia1" es el nombre asignado a todos los checkbox
   if (f.historia1[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestaRadio.length; j++) {
     if (i==respuestaRadio[j]) escorrecta[i]=true;
    }
   } 
  }
  //Por cada opción que está chequedada, si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
  for (i = 0; i < f.historia1.length; i++) {   
   if (f.historia1[i].checked) {
    if (escorrecta[i]) {
     nota +=1.0/respuestaRadio.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P4: "+i+" correcta");    
    } else {
     nota -=1.0/respuestaRadio.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P4: "+i+" incorrecta");
    }   
   }
  }
}

function corregirMultiple(){
 
 var selm = formElement.elements[2]; 
 // for(i=0;i<respuestasMultiple.length;i++){
  if (selm.selectedIndex==respuestasMultiple[i]){
   darRespuestaHtml("P5: Correcto");
   nota +=1;
  }else{ 
   darRespuestaHtml("P5: Incorrecto");
  }
 }   
//}
  
//****************************************************************************************************
// poner los datos recibios en el HTML
function ponerDatosInputHtml(t){
 document.getElementById("tituloInput").innerHTML = t;
}

function ponerDatosSelectHtml(t,opt){
  document.getElementById("tituloSelect").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv');
 document.getElementById('tituloCheckbox').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "historia_"+i);
    input.type="checkbox";
    input.name="historia";
    input.id="historia_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}

function ponerDatosRadioHtml(t,opt){
 var radioContainer=document.getElementById('radioDiv');
  document.getElementById('tituloRadio').innerHTML=t;
  for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
   label.setAttribute("for", "historia1_"+i);
    input.type="radio";
    input.name="historia1";
    input.id="historia1_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
 }  
}

function ponerDatosMultipleHtml(t,opt){
  document.getElementById('tituloMultiple').innerHTML=t;
 // var select = document.getElementById("mul").multiple=true;
 var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}


//****************************************************************************************************
//Gestionar la presentación de las respuestas
function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
   darRespuestaHtml("Nota: "+nota+" puntos sobre 3");
}

function inicializar(){
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}

//Comprobar que se han introducido datos en el formulario
function comprobar(){
   var f=formElement;
   var checked=false;
   for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
      if (f.color[i].checked) checked=true;
   }
   if (f.elements[0].value=="") {
    f.elements[0].focus();
    alert("Escribe un número");
    return false;
   } else if (f.elements[1].selectedIndex==0) {
    f.elements[1].focus();
    alert("Selecciona una opción");
    return false;
   } if (!checked) {    
    document.getElementsByTagName("h3")[2].focus();
    alert("Selecciona una opción del checkbox");
    return false;
   } else  return true;
}
