let info = document.querySelectorAll(".nomeproduto");


function carrinho(produto){


   let armazenar = localStorage.setItem("produto" + produto )
   let nome = localStorage.getItem()

    if(produto == armazenar) {
console.log("Já existe")
    }

    info.innerHTML= "BEST";

console.log(produto)

}