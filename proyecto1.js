function agrupados(){
     document.getElementById("divAgrupados").style.display="block";
     document.getElementById("divNoAgrupados").style.display="none";
     var table = document.getElementById("table");
     var intervalos = document.getElementsByClassName("interval");
     intervalos[0].addEventListener("click",function(){
          var tr = document.createElement("tr");
          tr.style.backgroundColor = "red"
          table.appendChild(tr)
          console.log(tr)
          tr.innerHTML = "estoy aqui"
     })
     intervalos[1].addEventListener("click",function(){
          for(let i = 1; i < 3;i++){
               var borrar = table.lastChild;
               table.removeChild(borrar);
          }
     })
}