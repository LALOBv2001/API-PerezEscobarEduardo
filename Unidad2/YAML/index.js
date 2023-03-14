const yaml=require('yaml')
const fs=require('fs')
const path=require('path')

const file = fs.readFileSync(path.join(__dirname,'/objetoYAML.yml'), 'utf8')
const valorObj=yaml.parse(file)
console.table(valorObj)

const file2 = fs.readFileSync(path.join(__dirname,'/array.yml'), 'utf8')
const valorObj2=yaml.parse(file2)
console.table(valorObj2)

const file3 = fs.readFileSync(path.join(__dirname,'/objetomixto.yml'), 'utf8')
const valorObj3=yaml.parse(file3)
console.table(valorObj3)

const file4 = fs.readFileSync(path.join(__dirname,'/arrayobjetos .yml'), 'utf8')
const valorObj4=yaml.parse(file4)
console.table(valorObj4)
