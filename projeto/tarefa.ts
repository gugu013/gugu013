// 1️⃣ INTERFACE USUARIO
interface Usuario {
    nome: string
    email: string
    idade: number
    status: boolean
}

// 2️⃣ ARRAY DE USUÁRIOS
let listaDeUsuarios: Usuario[] = []

// 3️⃣ FUNÇÃO DE CADASTRO
function cadastrarUsuario(usuario: Usuario): void {
    listaDeUsuarios.push(usuario)
    console.log(`✅ Usuário "${usuario.nome}" cadastrado com sucesso!`)
}

// 4️⃣ FUNÇÃO DE LISTAGEM
function listarUsuarios(): void {
    console.log("\n📋 LISTA DE USUÁRIOS CADASTRADOS:")
    console.log("-----------------------------------")
    listaDeUsuarios.forEach((usuario, index) => {
        console.log(`👤 Usuário ${index + 1}:`)
        console.log(`   Nome: ${usuario.nome}`)
        console.log(`   Email: ${usuario.email}`)
        console.log(`   Idade: ${usuario.idade}`)
        console.log(`   Status: ${usuario.status ? "Ativo" : "Inativo"}`)
        console.log("-----------------------------------")
    })
}

// 🔹 TESTES
cadastrarUsuario({ nome: "Ana Silva", email: "ana@email.com", idade: 25, status: true })
cadastrarUsuario({ nome: "Carlos Souza", email: "carlos@email.com", idade: 30, status: false })
cadastrarUsuario({ nome: "Mariana Lima", email: "mariana@email.com", idade: 22, status: true })

listarUsuarios()
