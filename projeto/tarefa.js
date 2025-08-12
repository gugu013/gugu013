// 2️⃣ ARRAY DE USUÁRIOS
var listaDeUsuarios = [];
// 3️⃣ FUNÇÃO DE CADASTRO
function cadastrarUsuario(usuario) {
    listaDeUsuarios.push(usuario);
    console.log("\u2705 Usu\u00E1rio \"".concat(usuario.nome, "\" cadastrado com sucesso!"));
}
// 4️⃣ FUNÇÃO DE LISTAGEM
function listarUsuarios() {
    console.log("\n📋 LISTA DE USUÁRIOS CADASTRADOS:");
    console.log("-----------------------------------");
    listaDeUsuarios.forEach(function (usuario, index) {
        console.log("\uD83D\uDC64 Usu\u00E1rio ".concat(index + 1, ":"));
        console.log("   Nome: ".concat(usuario.nome));
        console.log("   Email: ".concat(usuario.email));
        console.log("   Idade: ".concat(usuario.idade));
        console.log("   Status: ".concat(usuario.status ? "Ativo" : "Inativo"));
        console.log("-----------------------------------");
    });
}
// 🔹 TESTES
cadastrarUsuario({ nome: "Ana Silva", email: "ana@email.com", idade: 25, status: true });
cadastrarUsuario({ nome: "Carlos Souza", email: "carlos@email.com", idade: 30, status: false });
cadastrarUsuario({ nome: "Mariana Lima", email: "mariana@email.com", idade: 22, status: true });
listarUsuarios();
