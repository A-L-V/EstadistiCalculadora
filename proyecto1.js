function agrupados(){
     document.getElementById("divAgrupados").style.display="block";
     document.getElementById("divNoAgrupados").style.display="none";
     var table = document.getElementById("table");
     var intervalos = document.getElementsByClassName("interval");
     intervalos[0].addEventListener("click",function(){
          crear();
          
          
          
     })
     intervalos[1].addEventListener("click",function(){
          
          var borrar = table.lastChild;
          table.removeChild(borrar);
          
     })
}
function crear(){
     var tr = document.createElement("tr");
     tr.setAttribute("class","fila");
     table.appendChild(tr);
     //creacion de una td
     var td = document.createElement("td");
     let i = 1
     while(i < 3){
          tr.appendChild(td); 
          i++;
          if(i = 1){
               var input = document.createElement("input")
               input.setAttribute("type","text")
               input.setAttribute("class","columna1")
               td.appendChild(input)
          }
          if( i = 2){
               var texto = document.createElement(input)
               texto.setAttribute("type","class")
               texto.setAttribute("class","columna2")
               td.appendChild(texto)
          }

     }
     
     
          
}