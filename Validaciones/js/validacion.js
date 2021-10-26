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

function validar(evento){
  console.log('Estoy validando')


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
