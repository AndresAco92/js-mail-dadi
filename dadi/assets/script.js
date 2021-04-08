var numbUtente = prompt('Prova la tua fortuna, Inserisci un numero dal 1 al 6:');
document.getElementById('utente') .innerHTML = 'Questo è il tuo numero: <br>' + numbUtente;
if(numbUtente<1 || numbUtente>6){
  alert('valore non valido rispetta le regole!')
}

var pc_contro = Math.floor(Math.random(1) * 9);;
document.getElementById('pc_win') .innerHTML = 'Questo è il mio numero: <br>' + pc_contro;

if(numbUtente > pc_contro){
  document.getElementById('vincita') .innerHTML = 'Complimenti hai vinto tu!';
}else if(numbUtente < pc_contro){
  document.getElementById('vincita') .innerHTML = 'Ho vinto IO!';
}else{
  document.getElementById('vincita') .innerHTML = 'Questo è un pareggio!';
}