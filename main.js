/* Elementos de pontos do placar  */
  let contadorPa = 0;
  let contador = 0;
  let limite = 15;

  /*Cronômetro*/
  let hr = 0;
  let min = 0;
  let sec = 0;
  let interv;
  let tempo;
  let score;

  /* Botões dos placar */
  const bt_m1A = document.querySelectorAll('.bt')[0].addEventListener('click', () => {
   document.querySelectorAll('h3')[0].innerHTML = --contadorPa;
  })
  const bt = document.querySelectorAll('.bt')[1].addEventListener('click', adicionar);
  
  const bt_m1V = document.querySelectorAll('.bt')[2].addEventListener("click", () => {
   document.querySelectorAll('h3')[1].innerHTML = --contador;
  });
  
  const bt2 = document.querySelectorAll('.bt')[3].addEventListener('click', function() {

   document.querySelectorAll('h3')[1].innerHTML = ++contador;

   if (contador == limite) {
    fim_de_partida();
   }
  });

  /* Botões dos cronômetro */
  const stop = document.querySelectorAll('.bt')[4].
  addEventListener('click', pauser_time);

  /* button reset time */
  const reset = document.querySelectorAll('.bt')[5].addEventListener('click', reiniciar);

  const ini = document.querySelectorAll(".bt")[6].addEventListener('click', play);




  function adicionar() {

   document.querySelectorAll('h3')[0].innerHTML = ++contadorPa;

   if (contadorPa == limite) {
    fim_de_partida();
    pauser_time();
    contadorPa = 0;
    contador = 0;
   }
  }

  function fim_de_partida() {
   document.querySelectorAll('h3')[0].innerHTML = '00';
   document.querySelectorAll('h3')[1].innerHTML = '00';

   score = document.getElementById('score').innerText = "tempo: " + tempo +". placar (" + contadorPa + "x" + contador + ")";

   document.getElementById('score').classList.add('anima');

   reiniciar();
  }

  function play() {
   cronometro();
   interv = setInterval(cronometro, 1000);

   document.getElementById('score').classList.remove('anima');
  }

  function pauser_time() {
   clearInterval(interv);
  }
  

  function reiniciar() {
   pauser_time();
   hr = 0;
   min = 0;
   sec = 0;

   contadorPa = 0;
   contador = 0;
   document.getElementById('time').innerText = '00:00:00';
   document.querySelectorAll('h3')[0].innerHTML = '00';
   document.querySelectorAll('h3')[1].innerHTML = '00';
  }

  function twornum(num) {
   if (num < 10) {
    return "0" + num;
   } else {
    return num;
   }
  }


  function cronometro() {
   sec++
   if (sec == 60) {
    min++;
    sec = 0;

    if (min == 59) {
     hr++;
     min = 0;
    }
   }
   tempo = document.getElementById('time').innerText = twornum(hr) + ":" + twornum(min) + ":" + twornum(sec);
  }
  
