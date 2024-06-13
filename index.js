console.log("Você sabe tocar algum instrumento?: Digite 's' ou 'n' ");

let entrada_usuario = "";

process.stdin.on("data", function (data) {
  entrada_usuario = data.toString().trim().toLowerCase();

  if (entrada_usuario === "s") {
    console.log("Qual instrumento você toca?");
  } else if (entrada_usuario === "n") {
    console.log("Que pena.");
    process.exit();
  } else if (entrada_usuario === "sair") {
    console.log("Saindo...");
    process.exit();
  } else {
    let instrumento = entrada_usuario;

    switch (instrumento) {
      case "violao":
      case "violão":
        console.log("Violão");
        break;

      case "guitarra":
        console.log("Guitarra");
        break;

      case "violino":
        console.log("Violino");
        break;

      case "piano":
        console.log("Piano");
        break;

      default:
        console.log("Outro instrumento, legal");
        break;
    }
  }
});
