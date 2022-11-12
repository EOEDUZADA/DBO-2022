let cacheName = "OpenGithubPWA";// 👈 any unique name

let filesToCache = [
  "/TestePWA/", // 👈 your repository name , both slash are important
  "service-worker.js",
  "js/main.js",
  "js/install-handler.js",
  "js/settings.js",
  "css/main.css",
  "assets/icons/icon.png",
  "manifest.json"
  // add your assets here 
  // ❗️❕donot add config.json here ❗️❕
];

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(cacheName).then((cache) => {
    console.log('installed successfully')
    return cache.addAll(filesToCache);
  }));
});

self.addEventListener('fetch', function (event) {

  if (event.request.url.includes('clean-cache')) {
    caches.delete(cacheName);
    console.log('Cache cleared')
  }

  event.respondWith(caches.match(event.request).then(function (response) {
    if (response) {
      console.log('served form cache')
    } else {
      console.log('Not serving from cache ', event.request.url)
    }
    return response || fetch(event.request);
  })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          console.log('service worker: Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});






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
			let inicia = document.querySelector(".iniciar");
			let inicio = false;
			let reinicio = document.querySelector(".reiniciar")
			let recorde = document.querySelector(".recorde");
			let fundo = document.querySelector(".fundo");
			let aumentar = 0;


	score.style.display = "none";


            // mover cursor 2 - automático
			
			function moveresquerda(){
				let div2Left= parseInt(getComputedStyle(div2).left);
				let fundoWidth= parseInt(getComputedStyle(fundo).width);
				let div2Width= parseInt(getComputedStyle(div2).width);
				
                
				div2.style.left = div2Left -5;
				console.time( 'How long does it take to run my "for"?' );
				if ( div2Left <= 0){



					aumentar++
					velocidade++;
					velocidade++;
					div2.style.left= +100 + "%";
					
					console.timeEnd( 'How long does it take to run my "for"?' );

			console.log(velocidade)
				
				}
			}


	
            // Mover cursor 1  - através dos botões
			function iniciar() {
				jaFoiClicado=true;
				setTimeout(function libera() {
				jaFoiClicado=false;
				
					//removes the jump class from the dino once it has jumped so that it can jump again
				}, 400);
				clicarBotao();
				pontinhos();
score.style.display="block";
inicia.style.display="none";


				if (contador != 0) {
					
					para();
				}
				
			
var velocity = largura / 12  

console.log(velocity)

	if(largura >= 320 && largura > 250) {


clearInterval(m);
		
		m = setInterval ("moveresquerda()",32);

			

	}


	if(largura <= 380 && largura > 250) {


		clearInterval(m);
				
				m = setInterval ("moveresquerda()",33);
		
					
		
			}


			if(largura <= 480 && largura > 380) {


				clearInterval(m);
						
						m = setInterval ("moveresquerda()",28);


			
				
							
				
					}

	if(largura < 380) {


		clearInterval(m);
				
				m = setInterval ("moveresquerda()",28.5 );
		
					
		
			}


			
	if(largura < 260) {


		clearInterval(m);
				
				m = setInterval ("moveresquerda()",30.5 );
		
					
		
			}

	

	}











	function move(Direcao) {

				

		if (contador != 0) {
			
			para();
		}
		


		if (Direcao == "acima") {
			timer = setInterval("acima()",30);



			
			
			contador ++;
			
score++;


		}
	
		
if( largura < 1200) {



			clearInterval(timer);
			timer = setInterval("acima()",80 - velocidade);
		

}


if(largura >= 320 && largura > 250) {



						clearInterval(timer)
				timer = setInterval("acima()",34);
				
							
				
					}


					if(largura < 260) {



						clearInterval(timer)
				timer = setInterval("acima()",39);
				
							
				
					}
				




}




	
	function acima() {
		let div1Top= parseInt(getComputedStyle(div1).top);

		
		div1.style.top = div1Top-5 ;
		if(div1Top <= 0 ){
			clearInterval(timer)
			timer = setInterval("baixo()",33);
		


		}

		

			

	}

function baixo() {
			let div1Top= parseInt(getComputedStyle(div1).top);
			let fundoHeight= parseInt(getComputedStyle(chao).height)-5;
			let div1Height= parseInt(getComputedStyle(div1).height);

			div1.style.top = div1Top+5;
			if(div1Top >= fundoHeight){
				clearInterval(timer);

				jaFoiClicado= false;
			
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
							inicio= true;
							velocidade=0;
							localScore();
						pontosarmazenados2 = true
							botaoreiniciar();
							recordes();
					
					
							
					}
					if (((div2Left >= div1Left)&&(div2Left <= div1Left + div1Width))&&
						((div2Top >= div1Top)&&(div2Top <= div1Top + div1Height))){
							para2();
							para();
							clicarBotao();
							inicio = true;
							velocidade=0;
						    
							localScore();
						
							pontosarmazenados2 = true
							botaoreiniciar();
							recordes();
						
							
	
							
							
					}
				}

function pontinhos() { 
	
	
	pontadas = setInterval((pontadas) => {


contar ++;
score.innerHTML = "SCORE: " + contar ;



},150);
}












		function localScore() {

		

			var nome = contar;
			
			
		
			// Pega a lista já cadastrada, se não houver vira um array vazio
			var array_recordes = JSON.parse(localStorage.getItem('array-recordes') || '[]');
			// Adiciona pessoa ao cadastro
			array_recordes.push(
				nome,
	
			);
		
			// Salva a lista alterada
			localStorage.setItem("array-recordes", JSON.stringify(array_recordes));
		
			console.log('Salva com sucesso.');
			
				 maximo =	array_recordes.sort(function(a, b){return b - a;});

		

			console.log(maximo[0]);
			console.log(maximo[1]);
			console.log(maximo[2]);
			botaoreiniciar();


contar=0;
		

  clearInterval(pontadas);


}


function recordes() {




recorde.style.display="block"

if(maximo[1] == undefined && maximo[2] == undefined) {


maximo[1]="";
maximo[2]="";

}
if(maximo[1] !== undefined && maximo[2] == undefined) {
	maximo[2]="";
	
	}
	

recorde.innerHTML = "BEST: " + maximo[0] + "          "+ maximo[1] + "          " + maximo [2] ;




}



function botaoreiniciar(){


div1.style.display = "none"

div2.style.display = "none"

	inicio = false;

reinicio.style.display = "flex";


}








				function reiniciar() {

					jaFoiClicado= false;

					div1.style.top= 50 + "%";
					div1.style.display="block"
					reinicio.style.display = "none";

					div2.style.display="block"

contar= 0;
velocidade=0;

clearInterval(m)
clearInterval(timer)

div2.style.left= +100 + "%";

iniciar();


				}









 // começa com false pra poder ser clicado pela primeira vez
var jaFoiClicado = false;
function clicarBotao() {
  if (!jaFoiClicado) {
	
	move(acima)
    console.log("primeira vez");
    // substitui aqui dentro pelo seu código
    jaFoiClicado = true;
  } 


}









				


		

            //Ao carregar a página estas linhas são executadas. 
			let contador = 0;
            let cont = 0;
	   		var m ="" //Funções que são chamadas a cada 15 e 5 milisegundos
			let n = setInterval("colisao()", 5);
			let contadorpulo = 0;
			
			
            
            document.querySelector("#acima").addEventListener("click", ()=>{move('acima')});
