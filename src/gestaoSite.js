const usuarios = [
    { id: 1,
      nome: 'Daniel Colona', 
      email: 'danielcolona@gmail.com',
      senha: '12345678',
      expirado: false
    },
    { id: 2,
      nome: 'Maria Silva', 
      email: 'mariasilva@gmail.com',
      senha: '87654321',
      expirado: false
    },
    { id: 3,
      nome: 'João Pereira', 
      email: 'joaopereira@gmail.com',
      senha: '11223344',
      expirado: false
    },
    { id: 4,
      nome: 'Ana Souza', 
      email: 'anasouza@gmail.com',
      senha: '44332211',
      expirado: true
    }
]

console.log(usuarios)

export function autenticarUsuario(email, senha) {

    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].email == email) {
            if(usuarios[i].senha == senha) {
                if(usuarios[i].expirado) {
                    return 'Renove suas credenciais'
                } else {
                    return 'Login realizado com sucesso'
                }
            } else {    
                return 'Senha incorreta para o email informado'
            }
        }
    }
    return 'Usuário não encontrado'
}

console.log(autenticarUsuario('joaopereira@gmail.com', '11223344')) //teste função de autenticação

for(let i = 0; i < usuarios.length; i++) { //lista de emails dos usuários
    console.log(usuarios[i].email)
}   
