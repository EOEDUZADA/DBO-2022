var sompulo = new Audio();
sompulo.src = 'pulo.wav';


var largura = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var altura = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
console.log(altura);
console.log(largura);



			let timer = "";
			let velocidade = 0;
			let pontos=0;
			let score = document.querySelector(".score");
			let contar = 0;
            // mover cursor 2 - automático
			function moverdireita(){
				let div2Left= parseInt(getComputedStyle(div2).left);
				let fundoWidth= parseInt(getComputedStyle(fundo).width);
				let div2Width= parseInt(getComputedStyle(div2).width);

				div2.style.left = div2Left +5;
				if ( div2Left >=  fundoWidth - div2Width){
					clearInterval(m);
					m = setInterval ("moveresquerda()",49);
				}
			}
			function moveresquerda(){
				let div2Left= parseInt(getComputedStyle(div2).left);
				let fundoWidth= parseInt(getComputedStyle(fundo).width);
				let div2Width= parseInt(getComputedStyle(div2).width);
				
                
				div2.style.left = div2Left -3;
				if ( div2Left <= 0){



					
					velocidade++;
					velocidade++;
					div2.style.left= +100 + "%";
					
				
			
				
				}
			}

	
            // Mover cursor 1  - através dos botões
			function move(Direcao) {

				

				if (contador != 0) {
					
					para();
				}
				


				if (Direcao == "acima") {
					timer = setInterval("acima()",35);



					
					
					contador ++;
					
score++;


				}
			
				
if( largura < 1200) {
	


	clearInterval(m);
					m = setInterval ("moveresquerda()",50 - velocidade );

					clearInterval(timer);
					timer = setInterval("acima()",80 - velocidade);
				

}



		
		


	}
			

		
			function acima() {
				let div1Top= parseInt(getComputedStyle(div1).top);
				div1.style.top = div1Top-5 ;
				if(div1Top <= 0 ){
					clearInterval(timer)
					
				
				div1.style.top= 50 + "%";
			
				

			

				}

					
		
			}

            // Parar cursores
			function para2(){
				clearInterval(m);
			}
			function para() {
				clearInterval(timer);
				
			}

			function colisao(){
				let div1Left= parseInt(getComputedStyle(div1).left);
				let div1Top= parseInt(getComputedStyle(div1).top);
				let div1Height= parseInt(getComputedStyle(div1).height);
				let div1Width= parseInt(getComputedStyle(div1).width);

				let div2Left= parseInt(getComputedStyle(div2).left);
				let div2Top= parseInt(getComputedStyle(div2).top);
				let div2Height= parseInt(getComputedStyle(div2).height);
				let div2Width= parseInt(getComputedStyle(div2).width);
				
				let fundoHeight= parseInt(getComputedStyle(fundo).height);
				let fundoWidth= parseInt(getComputedStyle(fundo).width);

			


					if (((div1Left >= div2Left)&&(div1Left <= div2Left + div2Width))&&
						((div1Top >= div2Top)&&(div1Top <= div2Top + div2Height))){
							para2();
							para();
							score=0;
							clicarBotao();
							
					}
					if (((div2Left >= div1Left)&&(div2Left <= div1Left + div1Width))&&
						((div2Top >= div1Top)&&(div2Top <= div1Top + div1Height))){
							para2();
							para();
							score= 0;
							clicarBotao();
							
							
					}
				}

var jaFoiClicado = false; // começa com false pra poder ser clicado pela primeira vez

function clicarBotao() {
  if (!jaFoiClicado) {
	alert("                                  GAME OVER.\n\n" + "                                Sua pontuação foi " + contar);
    console.log("primeira vez");
    // substitui aqui dentro pelo seu código
    jaFoiClicado = true;
  } 
}


setInterval(() => {


contar ++;
score.innerHTML = "SCORE: " + contar ;



},100);




				

		

		

            //Ao carregar a página estas linhas são executadas. 
			let contador = 0;
            let cont = 0;
	   		let m = setInterval("moveresquerda()", 30); //Funções que são chamadas a cada 15 e 5 milisegundos
			let n = setInterval("colisao()", 5);
			let contadorpulo = 0;
			
			
            
            document.querySelector("#acima").addEventListener("click", ()=>{move('acima')});
