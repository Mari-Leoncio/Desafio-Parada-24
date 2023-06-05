function retornarNomeAleatorio() {
  var nomes = ["Mariane", "Fabrício", "Maria", "Beatriz", "Fábio", "Vitor", "Mauro", "Gilberto", "Maurício", "Silvia"];
  var indiceAleatorio = Math.floor(Math.random() * nomes.length);
  var nomeAleatorio = nomes[indiceAleatorio];

  document.getElementById("nomeAleatorio").textContent = nomeAleatorio;
}
