function agrupados(){
     document.getElementById("divAgrupados").style.display="block";
     document.getElementById("divNoAgrupados").style.display="none";

     var table = document.getElementById("table");
     var intervalos = document.getElementsByClassName("interval");
     var creados = 0
     
     intervalos[0].addEventListener("click",function(){
          crear();
          creados++;
     })
     intervalos[1].addEventListener("click",function(){
          if(creados > 0){
               var borrar = table.lastChild;
               table.removeChild(borrar);
               creados--;
          }

     })
}



function crear(){
     var tr = document.createElement("tr");
     tr.setAttribute("class","fila");
     table.appendChild(tr);
     for( let i = 0; i<3;i++){
          var td = document.createElement("td")
          tr.appendChild(td)
          if ( i== 0){
               var text = document.createElement("input")
               text.setAttribute("type","text")
               text.setAttribute("class","columna1")
               td.appendChild(text)
          }
          if ( i == 1){
               var number = document.createElement("input")
               number.setAttribute("type","number")
               text.setAttribute("type","columna2")
               td.appendChild(number)
          }
     }    
}