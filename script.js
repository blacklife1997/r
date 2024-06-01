const form = document.querySelector('#form');
form.addEventlistener("submit",(e)=>{
  e.preventDefault();
  var text = document.querySelector("#text").value;
  var token = '7406125179:AAHoPgVt8PnU3aNdVgtiT7f2tPHebMHRI9c';
  var chat_id = '6834401290';
  var apiUrl = 'https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}';
  const response = fetch(apiUrl);
})
