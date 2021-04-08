//lista di mail
var e_mails = (
'carlo.best@live.it',
'julian30hl@msn.it',
'long85@hotmail.it',
'drooptest95@live.it',
'linvinghere@ook.it',
'yahoo@live.it',
'lore.seiz@live.it');

//inserimento dati utente
var log_mail = prompt('Immettere mail: ')
document.getElementById('email') .innerHTML = '' + log_mail;
var exist = false;

//ciclo lettura 
for(var i=0; i<e_mails.length; i++){
  var mailUtente = e_mails[i]
  //ciclo if ed else per risposta log in
  if(mailUtente === log_mail){
    exist = true;
  }
}

if(exist){
  document.getElementById('esito') .innerHTML = 'Mail esistente!';
}else{
  document.getElementById('esito') .innerHTML = 'Mail non esistente prego riprovare!';

}