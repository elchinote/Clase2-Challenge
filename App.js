//EJERCICIO 1
// var React = require('react')
// var Component = React.Component
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//EJERCICIO 2
// // El valor de PI nunca debería cambiar
// var PI = 3.141592

// var acumulador = 0
// if (true) {
//   acumulador = acumulador + 10
// }

const PI = 3.141592;

let acumulador = 0

if (true) {
acumulador = acumulador + 10
}


//EJERCICIO 3
// function sumar(a, b) {
//   return a + b
// }
const sumar = (a, b) => a + b


//EJERCICIO 4
// function sumar(a, b) {
//   a = a === undefined ? 1 : a
//   b = b === undefined ? 2 : b
//   return a + b
// }
const sumar2 = (a = 1,b = 2) => a + b
  

//EJERCICIO 5
// function procrear(nombre, edad) {
//   return {
//     nombre: nombre,
//     edad: edad,
//   }
// }

const procrear = (nombre, edad) => ({nombre, edad});


//EJERCICIO 6
// var hijo = {
//   nombre: 'Juan',
//   edad: 30,
//   padre: {
//     nombre: 'Pedro',
//     edad: 90,
//   },
// }

// var nombreHijo = hijo.nombre
// var edadPadre = hijo.padre.edad

const hijo = {
  nombre: 'Juan',
  edad: 32,
  padre: {
    nombre: 'Pedro',
    edad:90,
  }, 
}
let nombreHijo = hijo.nombre
let edadPadre = hijo.padre.edad


//EJERCICIO 7
// var nombre = 'Juan'
// var apellido = 'Perez'
// var edad = 40

// // Notar como se mezclan el operador + de strings con el + de números cuando hacemos (50 - edad)
// console.log('El señor' + nombre + ' ' + apellido + ' va a cumplir 50 dentro de ' + (50 - edad) + ' años')
const nombre = 'Juan'
const apellido = 'Perez'
const edad = 40
let cadena = `El señor ${nombre} ${apellido} va a cumplir 50 dentro de 50 - ${edad} años`
console.log (cadena)


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Acumulador: {acumulador}</Text>
        <Text>Sumar: {sumar(15,15)}</Text>
        <Text>Sumar2: {sumar2()}</Text>
        <Text>Procrear: </Text>
        <Text>Console: {cadena}</Text>
        <Text>Hijo: {nombreHijo} {edadPadre}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
