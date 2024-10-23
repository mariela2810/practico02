import os from 'os'
console.log('Arquitectura sistema: ', os.arch())//obtiene la arquitectura del sistema
console.log('Sistema operativo', os.platform())//obtiene el S.O. de la maquina
console.log('Total de memoria', os.totalmem())//obtiene el total de memoria de la maquina
console.log('Memoria libre', os.freemem())//obtiene el total de memoria libre
console.log('Info de la cpu', os.cpus())//obtiene informacion de la cpu