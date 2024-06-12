console.log("Você sabe tocar algum instrumento?: Digite s  ou  n ")
let entrada_usuario = ""

process.stdin.on("data",function(data){
    entrada_usuario = data.toString().trim()
  if (entrada_usuario ==  "s"){
    console.log("legal")
  } else if (entrada_usuario == "n"){
    console.log ("que pena ")
  }


})