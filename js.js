var formElement = null;
var respCorrecta = null;
var respCorrecta1 = null;
var respCorrecta2 = null;
var respCorrecta3 = null;
var respuestaSelect = null;
var respuestaSelect1 = null;
var respuestasCheckbox = [];
var respuestasCheckbox1 = [];
var respuestaRadio = [];
var respuestaRadio1 = [];
var respuestaRadio2 = [];
var respuestasMultiple = [];
var respuestasMultiple1 = [];
var nota = 0;


window.onload = function() {


    formElement = document.getElementById('myform');
    formElement.onsubmit = function() {
        inicializar();
        corregirText();
        corregirSelect();
        corregirCheckbox();
        corregirRadio();
        corregirMultiple();
        corregirRadio1();
        corregirRadio2();
        corregirText1();
        corregirText2();
        corregirMultiple1();
        corregirCheckbox1();
        corregirText3();
        corregirSelect1();
        presentarNota();
        return false;
    }


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
        }
    };
    xhttp.open("GET", "questions.xml", true);
    xhttp.send();
}


function gestionarXml(dadesXml) {
    var xmlDoc = dadesXml.responseXML;


    var tituloInput = xmlDoc.getElementsByTagName("title")[0].innerHTML;
    ponerDatosInputHtml(tituloInput);

    respCorrecta = xmlDoc.getElementsByTagName("answer")[0].innerHTML;


    var tituloSelect = xmlDoc.getElementsByTagName("title")[1].innerHTML;
    var opcionesSelect = [];
    var nopt = xmlDoc.getElementById("jklm_005").getElementsByTagName('option').length;
    for(i = 0; i < nopt; i++) {
        opcionesSelect[i] = xmlDoc.getElementById("jklm_005").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelectHtml(tituloSelect, opcionesSelect);
    respuestaSelect = parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);


    var tituloCheckbox = xmlDoc.getElementsByTagName("title")[2].innerHTML;
    var opcionesCheckbox = [];
    var nopt = xmlDoc.getElementById("jklm_004").getElementsByTagName('option').length;
    for(i = 0; i < nopt; i++) {
        opcionesCheckbox[i] = xmlDoc.getElementById("jklm_004").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckboxHtml(tituloCheckbox, opcionesCheckbox);
    var nres = xmlDoc.getElementById("jklm_004").getElementsByTagName('answer').length;
    for(i = 0; i < nres; i++) {
        respuestasCheckbox[i] = xmlDoc.getElementById("jklm_004").getElementsByTagName("answer")[i].innerHTML;
    }


    var tituloRadio = xmlDoc.getElementsByTagName("title")[3].innerHTML;
    var opcionesRadio = [];
    var nopt = xmlDoc.getElementById("jklm_001").getElementsByTagName('option').length;
    for(i = 0; i < nopt; i++) {
        opcionesRadio[i] = xmlDoc.getElementById("jklm_001").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosRadioHtml(tituloRadio, opcionesRadio);

    var nres = xmlDoc.getElementById("jklm_001").getElementsByTagName('answer').length;
    for(i = 0; i < nres; i++) {
        respuestaRadio[i] = xmlDoc.getElementById("jklm_001").getElementsByTagName("answer")[i].innerHTML;
    }


    var tituloMultiple = xmlDoc.getElementsByTagName("title")[4].innerHTML;
    var opcionesMultiple = [];
    var nopt = xmlDoc.getElementById("jklm_009").getElementsByTagName('option').length;
    for(i = 0; i < nopt; i++) {
        opcionesMultiple[i] = xmlDoc.getElementById("jklm_009").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosMultipleHtml(tituloMultiple, opcionesMultiple);

    var nres = xmlDoc.getElementById("jklm_009").getElementsByTagName('answer').length;
    for(i = 0; i < nres; i++) {
        respuestasMultiple[i] = xmlDoc.getElementById("jklm_009").getElementsByTagName("answer")[i].innerHTML;
    }



    var tituloRadio1 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
    var opcionesRadio1 = [];
    var nopt = xmlDoc.getElementById("jklm_002").getElementsByTagName('option').length;
    for(i = 0; i < nopt; i++) {
        opcionesRadio1[i] = xmlDoc.getElementById("jklm_002").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosRadioHtml1(tituloRadio1, opcionesRadio1);

    var nres = xmlDoc.getElementById("jklm_002").getElementsByTagName('answer').length;
    for(i = 0; i < nres; i++) {
        respuestaRadio1[i] = xmlDoc.getElementById("jklm_002").getElementsByTagName("answer")[i].innerHTML;
    }


    var tituloRadio2 = xmlDoc.getElementsByTagName("title")[6].innerHTML;
    var opcionesRadio2 = [];
    var nopt = xmlDoc.getElementById("jklm_006").getElementsByTagName('option').length;
    for(i = 0; i < nopt; i++) {
        opcionesRadio2[i] = xmlDoc.getElementById("jklm_006").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosRadioHtml2(tituloRadio2, opcionesRadio2);

    var nres = xmlDoc.getElementById("jklm_006").getElementsByTagName('answer').length;
    for(i = 0; i < nres; i++) {
        respuestaRadio2[i] = xmlDoc.getElementById("jklm_006").getElementsByTagName("answer")[i].innerHTML;
    }


    var tituloInput1 = xmlDoc.getElementsByTagName("title")[7].innerHTML;
    ponerDatosInputHtml1(tituloInput1);

    respCorrecta1 = xmlDoc.getElementsByTagName("answer")[3].innerHTML;


    var tituloInput2 = xmlDoc.getElementsByTagName("title")[8].innerHTML;
    ponerDatosInputHtml2(tituloInput2);

    respCorrecta2 = xmlDoc.getElementsByTagName("answer")[4].innerHTML;


    var tituloMultiple1 = xmlDoc.getElementsByTagName("title")[9].innerHTML;
    var opcionesMultiple1 = [];
    var nopt = xmlDoc.getElementById("jklm_010").getElementsByTagName('option').length;
    for(i = 0; i < nopt; i++) {
        opcionesMultiple1[i] = xmlDoc.getElementById("jklm_010").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosMultipleHtml1(tituloMultiple1, opcionesMultiple1);

    var nres = xmlDoc.getElementById("jklm_010").getElementsByTagName('answer').length;
    for(i = 0; i < nres; i++) {
        respuestasMultiple1[i] = xmlDoc.getElementById("jklm_010").getElementsByTagName("answer")[i].innerHTML;
    }



    var tituloCheckbox1 = xmlDoc.getElementsByTagName("title")[10].innerHTML;
    var opcionesCheckbox1 = [];
    var nopt = xmlDoc.getElementById("jklm_011").getElementsByTagName('option').length;
    for(i = 0; i < nopt; i++) {
        opcionesCheckbox1[i] = xmlDoc.getElementById("jklm_011").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckboxHtml1(tituloCheckbox1, opcionesCheckbox1);
    var nres = xmlDoc.getElementById("jklm_011").getElementsByTagName('answer').length;
    for(i = 0; i < nres; i++) {
        respuestasCheckbox1[i] = xmlDoc.getElementById("jklm_011").getElementsByTagName("answer")[i].innerHTML;
    }


    var tituloInput3 = xmlDoc.getElementsByTagName("title")[11].innerHTML;
    ponerDatosInputHtml3(tituloInput3);

    respCorrecta3 = xmlDoc.getElementsByTagName("answer")[5].innerHTML;


    var tituloSelect1 = xmlDoc.getElementsByTagName("title")[12].innerHTML;
    var opcionesSelect1 = [];
    var nopt = xmlDoc.getElementById("jklm_013").getElementsByTagName('option').length;
    for(i = 0; i < nopt; i++) {
        opcionesSelect1[i] = xmlDoc.getElementById("jklm_013").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelectHtml1(tituloSelect1, opcionesSelect1);
    respuestaSelect1 = parseInt(xmlDoc.getElementsByTagName("answer")[6].innerHTML);
}



function corregirText() {

    var s = formElement.elements[0].value;
    if(s == respCorrecta) {
        darRespuestaHtml("P1: Exacto!");
        nota += 1;
    } else {
        darRespuestaHtml("P1: Te has equivocado");


    }
}

function corregirSelect() {

    var sel = formElement.elements[1];
    if(sel.selectedIndex == respuestaSelect) {
        darRespuestaHtml("P2: Correcto");
        nota += 1;
    } else darRespuestaHtml("P2: Incorrecto");
}

function corregirCheckbox() {
    var f = formElement;
    var escorrecta = [];
    for(i = 0; i < f.historia.length; i++) {
        if(f.historia[i].checked) {
            escorrecta[i] = false;
            for(j = 0; j < respuestasCheckbox.length; j++) {
                if(i == respuestasCheckbox[j]) escorrecta[i] = true;
            }
        }
    }
    for(i = 0; i < f.historia.length; i++) {
        if(f.historia[i].checked) {
            if(escorrecta[i]) {
                nota += 1.0 / respuestasCheckbox.length;
                darRespuestaHtml("P3: " + "posicion " + i + " correcta");
            } else {
                nota -= 1.0 / respuestasCheckbox.length;
                darRespuestaHtml("P3: " + "posicion " + i + " incorrecta");
            }
        }
    }
}

function corregirRadio() {

    var f = formElement;
    var escorrecta = [];
    for(i = 0; i < f.historia1.length; i++) {
        if(f.historia1[i].checked) {
            escorrecta[i] = false;
            for(j = 0; j < respuestaRadio.length; j++) {
                if(i == respuestaRadio[j]) escorrecta[i] = true;
            }
        }
    }
    for(i = 0; i < f.historia1.length; i++) {
        if(f.historia1[i].checked) {
            if(escorrecta[i]) {
                nota += 1.0 / respuestaRadio.length;
                darRespuestaHtml("P4: " + "posicion " + i + " correcta");
            } else {
                nota -= 1.0 / respuestaRadio.length;
                darRespuestaHtml("P4: " + "posicion " + i + " incorrecta");
            }
        }
    }
}

function corregirMultiple() {



    var f = formElement;
    var escorrecta = [];
    var contador = 0;
    x = new Boolean(false);
    for(i = 0; i < f.mul.length; i++) {
        if(f.mul[i].selected) {
            escorrecta[i] = false;
            for(j = 0; j < respuestasMultiple.length; j++) {
                if(i == respuestasMultiple[j]) {
                    escorrecta[i] = true;
                    contador = contador + 1;
                    x = true;
                } else {
                    contador = contador - 1;
                    x = false;
                }
            }
        }
    }
    for(i = 0; i < f.mul.length; i++) {
        if(f.mul[i].selected) {

            if(escorrecta[i]) {
                nota += 1.0 / respuestasMultiple.length;
                darRespuestaHtml("P5 " + "posicion " + i + " correcta");
            } else {
                nota -= 1.0 / respuestasMultiple.length;
                darRespuestaHtml("P5: " + "posicion " + i + " incorrecta");
            }

        }

    }
    if(x && contador >= 2) {
        darRespuestaHtml("Tiene todas las opciones correctas seleccionadas. Respuesta correcta");
    } else {
        darRespuestaHtml("Tiene la respuesta incorrecta");
    }

}

function corregirRadio1() {

    var f = formElement;
    var escorrecta = [];
    for(i = 0; i < f.historia2.length; i++) {
        if(f.historia2[i].checked) {
            escorrecta[i] = false;
            for(j = 0; j < respuestaRadio1.length; j++) {
                if(i == respuestaRadio1[j]) escorrecta[i] = true;
            }
        }
    }
    for(i = 0; i < f.historia2.length; i++) {
        if(f.historia2[i].checked) {
            if(escorrecta[i]) {
                nota += 1.0 / respuestaRadio1.length;
                darRespuestaHtml("P6: " + "posicion " + i + " correcta");
            } else {
                nota -= 1.0 / respuestaRadio1.length;
                darRespuestaHtml("P6: " + "posicion " + i + " incorrecta");
            }
        }
    }
}


function corregirRadio2() {

    var f = formElement;
    var escorrecta = [];
    for(i = 0; i < f.historia3.length; i++) {
        if(f.historia3[i].checked) {
            escorrecta[i] = false;
            for(j = 0; j < respuestaRadio2.length; j++) {
                if(i == respuestaRadio2[j]) escorrecta[i] = true;
            }
        }
    }
    for(i = 0; i < f.historia3.length; i++) {
        if(f.historia3[i].checked) {
            if(escorrecta[i]) {
                nota += 1.0 / respuestaRadio2.length;
                darRespuestaHtml("P7: " + "posicion " + i + " correcta");
            } else {
                nota -= 1.0 / respuestaRadio2.length;
                darRespuestaHtml("P7: " + "posicion " + i + " incorrecta");
            }
        }
    }
}

function corregirText1() {

    var s = formElement.elements[7].value;
    if(s == respCorrecta1) {
        darRespuestaHtml("P8: Exacto!");
        nota += 1;
    } else {
        darRespuestaHtml("P8: Te has equivocado");

    }
}


function corregirText2() {

    var s = formElement.elements[8].value;
    if(s == respCorrecta2) {
        darRespuestaHtml("P9: Exacto!");
        nota += 1;
    } else {
        darRespuestaHtml("P9: Te has equivocado");


    }
}


function corregirMultiple1() {

    var f = formElement;
    var escorrecta = [];
    var contador = 0;
    x = new Boolean(false);
    for(i = 0; i < f.mul1.length; i++) {
        if(f.mul1[i].selected) {
            escorrecta[i] = false;
            for(j = 0; j < respuestasMultiple1.length; j++) {
                if(i == respuestasMultiple1[j]) {
                    escorrecta[i] = true;
                    contador = contador + 1;
                    x = true;
                } else {
                    contador = contador - 1;
                    x = false;
                }
            }
        }
    }
    for(i = 0; i < f.mul1.length; i++) {
        if(f.mul1[i].selected) {

            if(escorrecta[i]) {
                nota += 1.0 / respuestasMultiple1.length;
                darRespuestaHtml("P10 " + "posicion " + i + " correcta");
            } else {
                nota -= 1.0 / respuestasMultiple1.length;
                darRespuestaHtml("P10: " + "posicion " + i + " incorrecta");
            }

        }

    }
    if(x && contador >= 2) {
        darRespuestaHtml("Tiene todas las opciones correctas seleccionadas. Respuesta correcta");
    } else {
        darRespuestaHtml("Tienes la respuesta incorrecta");
    }
}

function corregirCheckbox1() {
    var f = formElement;
    var escorrecta = [];
    for(i = 0; i < f.historia4.length; i++) {
        if(f.historia4[i].checked) {
            escorrecta[i] = false;
            for(j = 0; j < respuestasCheckbox1.length; j++) {
                if(i == respuestasCheckbox1[j]) escorrecta[i] = true;
            }
        }
    }
    for(i = 0; i < f.historia4.length; i++) {
        if(f.historia4[i].checked) {
            if(escorrecta[i]) {
                nota += 1.0 / respuestasCheckbox1.length;
                darRespuestaHtml("P11: " + "posicion " + i + " correcta");
            } else {
                nota -= 1.0 / respuestasCheckbox1.length;
                darRespuestaHtml("P11: " + "posicion " + i + " incorrecta");
            }
        }
    }
}

function corregirText3() {

    var s = formElement.elements[4].value;
    if(s == respCorrecta3) {
        darRespuestaHtml("P12: Exacto!");
        nota += 1;
    } else {
        darRespuestaHtml("P12: Te has equivocado");

    }
}

function corregirSelect1() {

    var sel1 = formElement.elements[12];
    if(sel1.selectedIndex == respuestaSelect1) {
        darRespuestaHtml("P13: Correcto");
        nota += 1;
    } else darRespuestaHtml("P13: Incorrecto");
}



function ponerDatosInputHtml(t) {
    document.getElementById("tituloInput").innerHTML = t;
}

function ponerDatosSelectHtml(t, opt) {
    document.getElementById("tituloSelect").innerHTML = t;
    var select = document.getElementsByTagName("select")[0];
    for(i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function ponerDatosCheckboxHtml(t, opt) {
    var checkboxContainer = document.getElementById('checkboxDiv');
    document.getElementById('tituloCheckbox').innerHTML = t;
    for(i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "historia_" + i);
        input.type = "checkbox";
        input.name = "historia";
        input.id = "historia_" + i;;
        checkboxContainer.appendChild(input);
        checkboxContainer.appendChild(label);
    }
}

function ponerDatosRadioHtml(t, opt) {
    var radioContainer = document.getElementById('radioDiv');
    document.getElementById('tituloRadio').innerHTML = t;
    for(i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "historia1_" + i);
        input.type = "radio";
        input.name = "historia1";
        input.id = "historia1_" + i;;
        radioContainer.appendChild(input);
        radioContainer.appendChild(label);
    }
}

function ponerDatosMultipleHtml(t, opt) {
    document.getElementById('tituloMultiple').innerHTML = t;
    var select = document.getElementsByTagName("select")[1];
    for(i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function ponerDatosRadioHtml1(t, opt) {
    var radioContainer = document.getElementById('radioDiv1');
    document.getElementById('tituloRadio1').innerHTML = t;
    for(i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "historia2_" + i);
        input.type = "radio";
        input.name = "historia2";
        input.id = "historia2_" + i;;
        radioContainer.appendChild(input);
        radioContainer.appendChild(label);
    }
}

function ponerDatosRadioHtml2(t, opt) {
    var radioContainer = document.getElementById('radioDiv2');
    document.getElementById('tituloRadio2').innerHTML = t;
    for(i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "historia3_" + i);
        input.type = "radio";
        input.name = "historia3";
        input.id = "historia3_" + i;;
        radioContainer.appendChild(input);
        radioContainer.appendChild(label);
    }
}

function ponerDatosInputHtml1(t) {
    document.getElementById("tituloInput1").innerHTML = t;
}

function ponerDatosInputHtml2(t) {
    document.getElementById("tituloInput2").innerHTML = t;
}


function ponerDatosMultipleHtml1(t, opt) {
    document.getElementById('tituloMultiple1').innerHTML = t;
    var select = document.getElementsByTagName("select")[2];
    for(i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function ponerDatosCheckboxHtml1(t, opt) {
    var checkboxContainer = document.getElementById('checkboxDiv1');
    document.getElementById('tituloCheckbox1').innerHTML = t;
    for(i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "historia4_" + i);
        input.type = "checkbox";
        input.name = "historia4";
        input.id = "historia4_" + i;;
        checkboxContainer.appendChild(input);
        checkboxContainer.appendChild(label);
    }
}

function ponerDatosInputHtml3(t) {
    document.getElementById("tituloInput3").innerHTML = t;
}

function ponerDatosSelectHtml1(t, opt) {
    document.getElementById("tituloSelect1").innerHTML = t;
    var select = document.getElementsByTagName("select")[3];
    for(i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}



function darRespuestaHtml(r) {
    var p = document.createElement("p");
    var node = document.createTextNode(r);
    p.appendChild(node);
    document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota() {
    darRespuestaHtml("Nota: " + nota + " puntos sobre 13");
}

function inicializar() {
    document.getElementById('resultadosDiv').innerHTML = "";
    nota = 0.0;
}
