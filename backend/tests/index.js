const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server')

chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

describe("Palindromos",()=>{
    describe("GET /",() => {
        it("Obtem o relatorio",(done)=>{
            chai.request(app)
                .get('/palindromo')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res).to.be.an('object')                    
                    done();
                });
        })
        it("Executa um post para o palindromo e reponde como verdadeiro",(done)=>{
            chai.request(app)
                .post('/palindromo')
                .send({
                    first_word:'marrom',
                    second_word:'morram'
                })
                .end((err, res) => {
                    console.log(res.response)
                    expect(err).to.be.null;
                    expect(res).to.have.status(201);
                    expect(res).to.be.an('object')
                    expect(res).to.have.nested.property('body.data.palindromo.isPalindromo',true)
                    done();
                });
        })
        it("Executa um post para o palindromo e reponde como falso",(done)=>{
            chai.request(app)
                .post('/palindromo')
                .send({
                    first_word:'marrom',
                    second_word:'azul'
                })
                .end((err, res) => {
                    console.log(res.response)
                    expect(err).to.be.null;
                    expect(res).to.have.status(201);
                    expect(res).to.be.an('object')
                    expect(res).to.have.nested.property('body.data.palindromo.isPalindromo',false)
                    done();
                });
        })
    })
})