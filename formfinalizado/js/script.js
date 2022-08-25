const steps = Array.from(document.querySelectorAll("form .step"));  
 const nextBtn = document.querySelectorAll("form .next-btn");  
 const prevBtn = document.querySelectorAll("form .previous-btn");  
 const finalizarBtn = document.querySelectorAll("form .finalizar-btn");
 const form = document.querySelector("form");  
 nextBtn.forEach((button) => {  
  button.addEventListener("click", () => {  
   changeStep("next");  
  });  
 });  
 prevBtn.forEach((button) => {  
  button.addEventListener("click", () => {  
   changeStep("prev");  
  });  
 });
 
 
 finalizarBtn.forEach((button) => {  
  button.addEventListener("click", () => {  
   changeStep("finalizar");  
  });  
 });




 form.addEventListener("submit", (e) => {  
  e.preventDefault();  
  form.reset()
  const inputs = [];  
  form.querySelectorAll("input").forEach((input) => {  
   const { name, value } = input;  
   inputs.push({ name, value });  
  });  
  console.log(inputs);  
   
 });  
 function changeStep(btn) {  
  let index = 0;  
  const active = document.querySelector(".active");  
  index = steps.indexOf(active);  
  steps[index].classList.remove("active");  
  if (btn === "next" && count==0 && count2==0) {  
   index++;  
  } else if (btn === "prev") {  
   index--;  
  }  

  else if (btn === "finalizar" && count2==0) {  
   index++;  
  }  
 
 
  steps[index].classList.add("active");  
 }  

 let formulario = document.querySelector("#formulario");
let erro = document.querySelector("#erro");
let count=0;
let count2 = 0;
let nome = document.querySelector("#nome");
let cpf = document.querySelector("#cpf");
let senha = document.querySelector("#senha");
let confirmasenha = document.querySelector("#confirmasenha")
let prof = document.querySelector("#prof");
let dados = document.querySelector("#dados");
let exp = document.querySelector("#exp");
let dadonome = document.querySelectorAll("#Nome");
let i = 0;


console.log(dadonome)
function verifica(e){
    //apaga as mensagens de erro
    if (document.querySelector("#erroNome") != null) {
        document.querySelector("#erroNome").remove();
        nome.style.borderColor = "black";
        count--
        
    }
    if (document.querySelector("#erroCpf") != null) {
        document.querySelector("#erroCpf").remove();
        cpf.style.borderColor = "black";
        count--
    }
    if (document.querySelector("#erroSenha") != null) {
        document.querySelector("#erroSenha").remove();
        senha.style.borderColor = "black"; 
        count--
    }
   
    if (document.querySelector("#erroConfirmasenha") != null) {
        document.querySelector("#erroConfirmasenha").remove();
        confirmasenha.style.borderColor = "black"; 
        count--
    }


   




    //Chama os testes
    count=0;
    vNome(e);
    vCpf(e);
    vSenha(e);
    vConfirmasenha(e);
    
    if ( count==0 )
    {   
    

    }
    else
    {
      
    }
}


function vNome(e) {
    
    if (nome.value == "") {
        let test= false;
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroNome");
            let erroTexto = document.createTextNode("Preencha o campo nome.");
            erroDiv.appendChild(erroTexto);
            erro.appendChild(erroDiv);
            let ln = document.createElement("br");
            erro.appendChild(ln);
            nome.style.borderColor = "red";
            nome.focus();
            count++;
    }

    

    else { 

    
  
    
    }
    
}



function vCpf(e) {
    
    if (cpf.value == "" || cpf.value.length != 11) {
        
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroCpf");
            let erroTexto = document.createTextNode("O campo cpf deve ter 11 caracteres.");
            erroDiv.appendChild(erroTexto);
            erro.appendChild(erroDiv);
            let ln = document.createElement("br");
            erro.appendChild(ln);
            cpf.style.borderColor = "red";
            cpf.focus();
            count++;
        }

        else {
            
     
        }
    }
function vSenha(e) {
    
    if (senha.value == "" || senha.value.length < 8 || senha.value.length > 8) {
        
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroSenha");
                let erroTexto = document.createTextNode("A senha precisa ter 8 dígitos");
                erroDiv.appendChild(erroTexto);
                erro.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro.appendChild(ln);
                senha.style.borderColor = "red";
                senha.focus();
                count++;
        } 
        
        else {
            
        }
    }

    function vConfirmasenha(e) {
    
    if (confirmasenha.value != senha.value) {
        
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroConfirmasenha");
                let erroTexto = document.createTextNode("As senhas precisam ser iguais");
                erroDiv.appendChild(erroTexto);
                erro.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro.appendChild(ln);
                confirmasenha.style.borderColor = "red";
                confirmasenha.focus();
                count++;
        }  
    }


    







    
































    function verifica2(e){
    //apaga as mensagens de erro
  
    if (document.querySelector("#erroProf") != null) {
        document.querySelector("#erroProf").remove();
        prof.style.borderColor = "black"; 
        count2--
    }
    if (document.querySelector("#erroExp") != null) {
        document.querySelector("#erroExp").remove();
        exp.style.borderColor = "black"; 
        count2--
    }
    if (document.querySelector("#erroEstado") != null) {
        document.querySelector("#erroEstado").remove();
        count2--
    }
   
    
   
//NOMES




     


       


    //Chama os testes
    count2=0;
    vProf(e);
    vExp(e);
    vEstado(e);
    
    
    if ( count2==0 )
    
    { 
    
        document.querySelector(".h6zada").style.display="none";

    }
    else
    {
        
    }
}


function vProf(e) {
    
    if (prof.value == "") {
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroProf");
            let erroTexto = document.createTextNode("Preencha o campo da Profissão");
            erroDiv.appendChild(erroTexto);
            erro.appendChild(erroDiv);
            let ln = document.createElement("br");
            erro.appendChild(ln);
            prof.style.borderColor = "red";
            prof.focus();
            count2++;
    }

   

}

function vExp(e) {
    
    if (exp.value == "" || exp.value < 0 || exp.value > 50) {
        
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroExp");
                let erroTexto = document.createTextNode("A idade deve estar entre 0 e 50.");
                erroDiv.appendChild(erroTexto);
                erro.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro.appendChild(ln);
                exp.style.borderColor = "red";
                exp.focus();
                count2++;
        } 
        
    }

    function vEstado(e) {
    
 

       if (document.querySelector('input[name=estado]:checked')) {


        
        

        count--
        

       }

       else {



let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroEstado");
                let erroTexto = document.createTextNode("Preencha o estado");
                erroDiv.appendChild(erroTexto);
                erro.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro.appendChild(ln);
                exp.style.borderColor = "red";
                exp.focus();
                count2++;


       }



}

function escreve() {



   

        let dadosDiv = document.createElement("div");
        dadosDiv.setAttribute("id","Nome");
        let dadosTexto = document.createTextNode("Nome: " + nome.value);
        dadosDiv.appendChild(dadosTexto);
        dados.appendChild(dadosDiv);


       
        let dadosTextoCPF = document.createTextNode("CPF: " + cpf.value);
        dados.appendChild(dadosTextoCPF);
      
        
        let dadosDiv2 = document.createElement("div");
        dadosDiv.setAttribute("id","Exp");
        let dadosTextoExp = document.createTextNode("Anos de Experiência: " + exp.value);
        dadosDiv2.appendChild(dadosTextoExp);
        dados.appendChild(dadosDiv2);

        let dadosTextoSenha = document.createTextNode("Senha: " + senha.value);
        dados.appendChild(dadosDiv);
        dados.appendChild(dadosTextoSenha)

        let dadosTextoProf = document.createTextNode("Profissão: " + prof.value);
        dados.appendChild(dadosDiv);
        dados.appendChild(dadosTextoProf)

        let dadosTextoEstado = document.createTextNode("Estado: " + document.querySelector('input[name=estado]:checked').value);
        let dadosDiv3 = document.createElement("div");
        dadosDiv.setAttribute("id","Estado");
        dados.appendChild(dadosDiv3);
        dados.appendChild(dadosTextoEstado)

        document.querySelector("form .submit-btn").style.display="none";

        document.querySelector(".h6zada").style.display="block";

        document.querySelector(".h6zada").innerHTML="Seus dados";
        


    
}





const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

