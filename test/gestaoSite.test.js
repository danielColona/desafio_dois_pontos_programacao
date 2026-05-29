//Escreva 4 testes: 1) Sucesso, 2) Credencial expirada,
//  3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

import { autenticarUsuario } from '../src/gestaoSite.js'
import assert from 'node:assert'

describe('Teste de autenticação de usuário', function() {

    it('Deve autenticar o usuário com sucesso', function() {
        //Arrange
        const email = 'danielcolona@gmail.com'
        const senha = '12345678'
        //Act        
        const resultado = autenticarUsuario(email, senha);
        //Assert    
        assert.equal(resultado, 'Login realizado com sucesso');
    })

    it('Deve retornar mensagem de credencial expirada', function() {
        //Arrange
        const email = 'anasouza@gmail.com'
        const senha = '44332211'
        //Act
        const resultado = autenticarUsuario(email, senha);
        //Assert
        assert.equal(resultado, 'Renove suas credenciais');
    })  

    it('Deve retornar mensagem de usuário não encontrado', function() {
        //Arrange
        const email = 'usuariodesconhecido@gmail.com'
        const senha = '12345678'
        //Act
        const resultado = autenticarUsuario(email, senha);
        //Assert
        assert.equal(resultado, 'Usuário não encontrado');
    })

    it('Deve retornar mensagem de senha incorreta', function() {
        //Arrange
        const email = 'danielcolona@gmail.com'
        const senha = '87654321'
        //Act
        const resultado = autenticarUsuario(email, senha);
        //Assert
        assert.equal(resultado, 'Senha incorreta para o email informado');
    })

    it('Deve lançar erro quando email ou senha estão vazios', function() {
        //Arrange
        const email = ''
        const senha = '12345678'
        //Act & Assert
        assert.throws(() => autenticarUsuario(email, senha), Error, 'Por favor, preencha corretamente os campos de email e senha')
    })

    it('Deve lançar erro quando email é inválido (sem @)', function() {
        //Arrange
        const email = 'emailsemarroba.com'
        const senha = '12345678'
        //Act & Assert
        assert.throws(() => autenticarUsuario(email, senha), Error, 'Por favor, informe um email válido')
    })
})