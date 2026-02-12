const URL = "https://dummyjson.com/users";
const textoUsuarios = document.getElementById("texto-usuarios");
const buscando = document.getElementById("buscando");

async function chamarApi() {
  buscando.innerHTML = "Buscando...";
  const resposta = await fetch(URL);
  if (resposta.status === 200) {
    const objeto = await resposta.json();
    objeto.users.forEach((texto) => {
      criarParagrafo(
        texto.id +
          "- " +
          texto.firstName +
          " " +
          texto.lastName +
          " || Age: " +
          texto.age,
      );
    });
    buscando.innerHTML = "Concluído...";
  } else {
    buscando.innerHTML = "Erro ao buscar usuários...";
  }
}

function criarParagrafo(texto) {
  const p = document.createElement("p");
  p.innerHTML = texto;
  document.body.appendChild(p);
}
