const mimodulo=require('../src/modulo.js');
const expect=require('chai').expect;

describe("Testing a la funcion AreaTriangulo",()=>{
    it("Deberia de regresarme un numero ",()=>{
        let res = mimodulo.areaTriangulo(2,3)
        expect(res).to.be.a("number");
    })
})