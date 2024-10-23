import {EventEmitter} from 'events'
const emisor = new EventEmitter() //crea una instancia de la clase eventemitter
emisor.on('saludo', (nombre)=>{
    console.log(`¡Hola, ${nombre}!`)//define un evento personalizado
})
emisor.emit('saludo','mundo')//emite el evento saludo
