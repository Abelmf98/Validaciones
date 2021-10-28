/**
  validacion.js
  @author Abel Mansilla <amansillafelipe.guadalupe@fundacionloyola.net>
  @License GPL v3 2021
**/

'use strict'

window.onload= iniciar

function iniciar(){
  let formulario = document.forms[0]
  formulario.onsubmit = validar
}

function prueba(){
  // alert('Estoy llegando')
   let exp = new RegExp (/(.*[a-z]){3}/)

  let evento = document.getElementById('iNombre').value
  if(exp.test(evento)){
    alert('El nombre es correcto')
  }else {
    alert('Error')
  }
}

function dni(){
  let cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
  cadena.split('');
  var Dni = document.getElementById('iNIF').value
  var dni_separado=Dni.split('');
  var exp = /^[0-9]{8}[A-Z]{1}$/;
  if(exp.test(Dni)){
      alert("El Dni es correcto");
      var suma = 0;
      var resto = 0;
      for(let i=0;i<=8;i++){
          suma = suma + dni_separado[i];
      }
      resto = suma % 23;
      if(Dni[8]==cadena(resto)){
          document.write("La letra introducida es correcta");
      }else{
          document.write("La letra introducida es incorrecta");
      }
  }else{
      alert("El Dni es incorrecto");
  }
}
function apellidos(){

  let eventoApellido = document.getElementById('iApellidos').value
  let separador = eventoApellido.split(' ')
  let numeroPalabra = separador.length
  if(numeroPalabra==2){
    alert('Correcto')
  }else{
    alert('Necesitas 2 apellidos')
  }
}
function telefono(){
  alert('telefono')
  let expt = new RegExp (/^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/)

  let eventoTelefono = document.getElementById('iTelefono').value
  alert(eventoTelefono)
  if(expt.test(eventoTelefono)){
    alert('El telefono es correcto')
  }else{
    alert('Error')
  }
}

/*function asturiano(){
  let asturiano = document.getElementById('sComunidad').value
  let no = document.getElementById('rNo').checked
  alert(asturiano)
  if(document.getElementById('sComunidad')==3){
    no.checked
  }
}*/
function validar(){
  console.log('Estoy validando')

  // Comprobar que el nombre tiene al menos 3 caracteres



  //Aceptacion politica de Privacidad
  if(!document.getElementById('iPolitica').checked)
  return false
  // evento.preventDefault()
  //return false

  //Compruebo el campo de Nombre
  if(document.getElementById('iNombre').length<2)
  return false

  // if(document.getElementById())
}
