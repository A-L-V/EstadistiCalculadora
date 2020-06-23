function agrupados(){
     document.getElementById("divAgrupados").style.display="block";
     document.getElementById("divNoAgrupados").style.display="none";
     var td = document.getElementsByClassName("td")
     console.log(td)
     var tr = document.getElementsByClassName("fila")
     var table = document.getElementById("table");
     var intervalos = document.getElementsByClassName("interval");
     var creados = 0
     var numFilas = [];
     var aleatorio = Math.random()*100
     if(aleatorio > 66 && aleatorio<100){
          console.log("a")
     }
     else if(aleatorio< 66 && aleatorio>33){
          console.log("b")
     }
     else{
          console.log("no el delegado")
     }



     intervalos[0].addEventListener("click",function(){
          /*var ultimo = tr.length -1
          tr[ultimo].appendChild(
          */
          var ultimo = td.length - 1
          console.log(td[ultimo])
          numFilas[creados] = new Filas("text",td,ultimo);
          numFilas[creados] = new Filas("number",td,ultimo)
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

class Filas{
     constructor(tipoInput,td,ultimo){
          var fila = document.createElement("tr");
          fila.setAttribute("class","fila");
          table.appendChild(fila);          
          
          var cuadro = document.createElement("td")
          cuadro.setAttribute("class","td")
          fila.appendChild(cuadro)

          var input = document.createElement("input")
          input.setAttribute("type",tipoInput)
          fila.appendChild(input)

     }
}



/*
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
/* */ 