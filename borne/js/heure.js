window.onload=function() {
  horloge('div_horloge');
  /*affichageheure();*/
  triauto();
  
};

function horloge(el) {
  if(typeof el=="string") { el = document.getElementById(el); }
  function actualiser() {
    var date = new Date();
    var str = date.getHours();
    str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
    el.innerHTML = str;
  }
  actualiser();
  setInterval(actualiser,1000);
}

function triauto(){
    function actualisation(){
        var madate=new Date();
        var heures=madate.getHours();
        var minutes=madate.getMinutes();
        for (i=9;i<=heures;i++){
            if(document.getElementById('h'+i)){
               document.getElementById('h'+i).style.display='none';    
               }
        }
    }
    actualisation();
    setInterval(actualisation,1000);
}