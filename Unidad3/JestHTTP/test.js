const request = require("supertest");
const url = "http://localhost:8084";
describe("Busca un vuelo con un callback", () => {
  it("deberia de buscar un vuelo y regresar un status 200", () => {
    request(url)
      .get("/vuelo")
      // .send('3')
      .end(function (err, res) {
        expect(res.status).toBe(200);
        // console.log(res.body);
      });
  });
});
