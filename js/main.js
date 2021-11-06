
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// var table=document.createElement("table");
// table.border="2";
// var colunas=2;
// var row=table.insertRow(-1);
// for(var i=1;i<=colunas;i++)
// {
//     if(i==1)
//     {
//         var headerCell = document.createElement("TH");
//         headerCell.innerText = "Conversas";
//         row.appendChild(headerCell);
//     }
//     if(i==2)
//     {
//         var headerCell = document.createElement("TH");
//         headerCell.innerText = "Ações";
//         row.appendChild(headerCell);
//     }
// }
// for(var i=0;i<conversas.length;i++)
// {
//     row=table.insertRow(-1);
//     for(var j=1;j<=colunas;j++)
//     {
//     if(j==1)
//     {
//         var cell = row.insertCell(-1);
//         var a=document.createElement("a");
//         a.setAttribute("onclick","gochat(this.id);return false;");
//         a.setAttribute("id",conversas[i]["_id"]);
//         a.innerHTML=conversas[i]["Nome_da_conversa"];
//         cell.appendChild(a);

//     }
//     if(j==2)
//     {
//         var cell = row.insertCell(-1);
//         var a=document.createElement("a");
//         a.setAttribute("value","Sair da conversa");
//         a.setAttribute("onclick","sairconversa(this.id)");
//         a.innerHTML="Sair da conversa";
//         a.setAttribute("id",conversas[i]["_id"]);
//         cell.appendChild(a);
//     }
//     }
// }
// var dvTable = document.getElementById("dvTable");
// dvTable.appendChild(table); 
