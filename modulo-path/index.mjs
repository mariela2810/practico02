import path from 'path'
const filePath = '/example.txt' //define ruta
const dirName = path.dirname(filePath) //obtiene la ruta del archivo
console.log('La ruta del archivo es: ', dirName)
const baseName = path.basename(filePath, '.txt') //obtiene el nombre del archivo sin extension
console.log('El nombre del archivo es: ', baseName)
const extName = path.extname(filePath) //obtiene la extension del archivo 
console.log('La extension del archivo es:', extName)
const newPath = path.join('/user', 'docs', 'newfile.txt') //crea una ruta unida
console.log('Nueva ruta', newPath)
