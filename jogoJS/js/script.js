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
			let score = 0;
			let velocidade = 0;
			let pontos=0;
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
				
                
				div2.style.left = div2Left -4;
				if ( div2Left <= 0){

					velocidade++;
					velocidade++;
					div2.style.left= +90 + "vw";
					
				
			
				
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
			
				
if( largura < 375) {
	


	clearInterval(m);
					m = setInterval ("moveresquerda()",50 - velocidade );

					clearInterval(timer);
					timer = setInterval("acima()",80 - velocidade);
				

}

if(velocidade > 42 && largura > 300) {
clearInterval(m)
	m = setInterval ("moveresquerda()",9.7 );

clearInterval(timer);
timer = setInterval("acima()",30);


}

if(velocidade > 102 && largura > 300) {
clearInterval(m)
	m = setInterval ("moveresquerda()",8.9 );

clearInterval(timer);
timer = setInterval("acima()",30);



}

if(velocidade > 39 && largura < 299) {
clearInterval(m)
	m = setInterval ("moveresquerda()",9 );

clearInterval(timer);
timer = setInterval("acima()",30);



}

if(velocidade > 39 && largura < 220) {
clearInterval(m)
	m = setInterval ("moveresquerda()",9.4 );

clearInterval(timer);
timer = setInterval("acima()",30);



}


if(velocidade > 40 && largura > 190 && largura < 191) {

	clearInterval(m);
					m = setInterval ("moveresquerda()",50-40 );
	clearInterval(timer);
					timer = setInterval("acima()",30);

}
				
				if(velocidade > 75) {

clearInterval(m);
				m = setInterval ("moveresquerda()",50-42 );
clearInterval(timer);
				timer = setInterval("acima()",30);

}



if(velocidade > 85) {

clearInterval(m);
m = setInterval ("moveresquerda()",50-43 );
clearInterval(timer);
timer = setInterval("acima()",30);

}

if(velocidade > 95) {

clearInterval(m);
m = setInterval ("moveresquerda()",50-44 );
clearInterval(timer);
timer = setInterval("acima()",30);

}
				
		if(largura < 150) {
				clearInterval(m);
				m = setInterval ("moveresquerda()",35);
		
clearInterval(timer);
				timer = setInterval("acima()",28);
				

		

		if(velocidade > 27 && largura < 150) {
				clearInterval(m);
				m = setInterval ("moveresquerda()",28);
		
clearInterval(timer);
				timer = setInterval("acima()",28);
				

		}
	}

		if(velocidade > 37 && largura < 190 ) {
				clearInterval(m);
				m = setInterval ("moveresquerda()",13.6);
		
clearInterval(timer);
				timer = setInterval("acima()",44);
				

		}

		if(velocidade > 67 && largura < 190 ) {
				clearInterval(m);
				m = setInterval ("moveresquerda()",12);
		
clearInterval(timer);
				timer = setInterval("acima()",44);
				

		}

	

			
			
			
				

			

		
		


	}
			

		
			function acima() {
				let div1Top= parseInt(getComputedStyle(div1).top);
				div1.style.top = div1Top-5;
				if(div1Top <= 0 ){
					clearInterval(timer)
				
				div1.style.top= 18 + "vw";
			
				

			

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
							
							clicarBotao();
							
					}
					if (((div2Left >= div1Left)&&(div2Left <= div1Left + div1Width))&&
						((div2Top >= div1Top)&&(div2Top <= div1Top + div1Height))){
							para2();
							para();
							
							clicarBotao();
							
							
					}
				}

var jaFoiClicado = false; // começa com false pra poder ser clicado pela primeira vez

function clicarBotao() {
  if (!jaFoiClicado) {
	alert("                                  GAME OVER.\n\n" + "                                 Sua pontuação foi " + velocidade);
    console.log("primeira vez");
    // substitui aqui dentro pelo seu código
    jaFoiClicado = true;
  } 
}

			const colorDiv = document.querySelector('#fundo');
			const colorDiv1 = document.querySelector('#div1');
			const colorDiv2 = document.querySelector('#div2');
let counter = 0;
let counter2 =0;
let counter3 = 0;

const colorArr = ['black', 'white'];
const colorArr2 = ['white','black'];
const colorArr3 = ['aqua','purple'];

setInterval(
	()=> {
		counter++;
		counter2++;
		counter3++;
		
		if (counter == colorArr.length && counter2 == colorArr2.length) {
			counter = 0;
			counter2 = 0;
			counter3=0;
		}
		
		colorDiv.style.background = colorArr[counter];
		colorDiv1.style.background = colorArr3[counter3];
		colorDiv2.style.background = colorArr2[counter2];
	}, 10000
)




				

		

		

            //Ao carregar a página estas linhas são executadas. 
			let contador = 0;
            let cont = 0;
	   		let m = setInterval("moveresquerda()", 30); //Funções que são chamadas a cada 15 e 5 milisegundos
			let n = setInterval("colisao()", 5);
			let contadorpulo = 0;
			
			
            
            document.querySelector("#acima").addEventListener("click", ()=>{move('acima')});
