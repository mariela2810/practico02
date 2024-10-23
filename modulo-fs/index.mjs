import { error } from 'console'
import fs from 'fs'
//lee un archivo de manera asincronica
fs.readFile('../example.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log('Contenido del archivo: ', data)
})
//escribe en un nuevo archivo
fs.writeFile('../newfile.txt', 'contenido nuevo', (err, data)=>{
    if(err) throw err;
    console.log('archivo creado y escrito')
})
//renombrar un archivo
fs.rename('../newfile.txt', '../renamedfile.txt', (err, data)=>{
    if(err) throw err;
    console.log('Archivo renombrado')
})