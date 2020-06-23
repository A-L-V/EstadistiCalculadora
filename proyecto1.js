function agrupados(){
     let noAgrupados = document.getElementById("noAgrupados")
     let agrupados = document.getElementById("agrupados")
     agrupados.removeAttribute("onclick")
     noAgrupados.setAttribute("onclick","noAgrupados()")
     document.getElementById("divAgrupados").style.display="block";
     document.getElementById("divNoAgrupados").style.display="none";
     if(noAgrupados.hasAttribute("onclick")){
          mainB();
     }
}


function mainB(){     
     var table = document.getElementById("table");
     var intervalos = document.getElementsByClassName("interval");
     var fila = document.getElementsByClassName("fila");
     var td = document.getElementsByClassName("td");
     var creados = 0;
     var cantiTh = document.getElementsByClassName("th").length
     var columna0 = document.getElementsByClassName("columna0")
     var columna1 = document.getElementsByClassName("columna1")
     var columna2 = document.getElementsByClassName("columna2")
    
     intervalos[0].addEventListener("click",function(){
          crearFila();
          crearTd(fila,fila.length-1,td,td.length,cantiTh);
          creados++;
     })
     intervalos[1].addEventListener("click",function(){
          if(creados > 0){
               var borrar = table.lastChild;
               table.removeChild(borrar);
               creados--;
          }
     })

     document.getElementById("mc").addEventListener("click",function(){
          hallarMc()
     })
     document.getElementById("Fi").addEventListener("click",function(){
          
          hallarFi(columna1,columna2)
          
     })
     
}
function hallarMc(){
     
}


function hallarFi(columna1,columna2){
     
     for(let i = 0; i<columna2.length;i++){
          if(i == 0){
               columna2[i].innerHTML = parseInt(columna1[i].value)
          }
          else{
               columna2[i].innerHTML = parseInt(columna1[i].value) + parseInt(columna1[i-1].value)
          }
     }
}



function crearFila(){
     var tr = document.createElement("tr");
     tr.setAttribute("class","fila");
     table.appendChild(tr);
}
function crearTd(fila,cantFila,td,cantTd,cantiTh){
     for(let i = 0; i <cantiTh; i++){
          var cuadro = document.createElement("td")
          cuadro.setAttribute("class","td")
          fila[cantFila].appendChild(cuadro)
          if(i == 2){
               cuadro.setAttribute("class","columna2")
          }
     }
     for(let i = 0; i<2;i++){
          var text = document.createElement("input")
          text.setAttribute("type","number")
          text.setAttribute("class","columna0")
          td[cantTd].appendChild(text)
     }
     cantTd++;
     var number = document.createElement("input")
     number.setAttribute("type","number")
     number.setAttribute("class","columna1")
     td[cantTd].appendChild(number)          
}
/* */ 