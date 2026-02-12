const URL = "https://dummyjson.com/products";
const produto = document.getElementById("produto");
const carregando = document.getElementById("carregando");

async function chamarApi() {
  carregando.innerText = "carregando...";
  const resposta = await fetch(URL);
  if (resposta.status === 200) {
    const object = await resposta.json();
    object.products.forEach((Element) => {
      criarParagrafo(Element.id + "- " + Element.title);
    });
    carregando.innerText = "concluído...";
  } else {
    carregando.innerText = "deu ruim...";
  }
}

function criarParagrafo(texto) {
  const p = document.createElement("p");
  p.innerHTML = texto;
  document.body.appendChild(p);
}
