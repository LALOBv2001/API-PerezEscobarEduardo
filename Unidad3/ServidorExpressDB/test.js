let chai=require('chai');
let chaiHttp=require('chai-http');
const expect=require('chai').expect;
chai.use(chaiHttp);
const url='http://localhost:8084'
describe('Busca un vuelo',()=>{
    it('deberia de buscar un vuelo',(done)=>{
        chai.request(url)
        .get('./vuelo/:id')
        .send('3')
        // NombrePiloto:'a',NombreCopiloto:'a',CapacidadPasajeros:200,CapacidadGalonesCombustible:'121',PaisDespegue:'si', PaisAterrizaje:'yes', CostoBoleto:1200, CapacidadEquipajePasajero:'1212', DuracionVueloHoras:'12'})
        .end(function(err,res){
            expect(res).to.have.status(200);
            expect(res.text).to.be.a('string');
            done();
        });
    });
});
