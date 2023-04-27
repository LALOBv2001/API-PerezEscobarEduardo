const mimodulo=require('../src/modulo.js');
// const expect=require('chai').expect;

describe("Set de test al modulo",()=>{
test('Si le mando 2 y 3 debe regresar 3',()=>{
    expect(mimodulo.areaTriangulo(2,3)).toBe(3);
})
})

