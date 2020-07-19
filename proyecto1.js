function agrupados(){
     let noAgrupados = document.getElementById("noAgrupados");
     let agrupados = document.getElementById("agrupados");
     agrupados.removeAttribute("onclick");
     noAgrupados.setAttribute("onclick","noAgrupados()");
     document.getElementById("divAgrupados").style.display="block";
     document.getElementById("divNoAgrupados").style.display="none";
     if(noAgrupados.hasAttribute("onclick")){
          mainB();
     };
}
var creados = 0;

function mainB(){     
     var table = document.getElementById("table");
     var intervalos = document.getElementsByClassName("interval");
     var variables =[]
     var media = document.getElementsByClassName("media");
     var mediana = document.getElementsByClassName("mediana");
     var moda = document.getElementsByClassName("moda");
     var cantTh = document.getElementsByClassName("th").length;

     intervalos[0].addEventListener("click",function(){
          crearArray(cantTh,variables);
     });
     intervalos[1].addEventListener("click",function(){
          if(creados > 0){
               var borrar = table.lastChild;
               table.removeChild(borrar);
               creados--;
          }
     });

     media[0].addEventListener("click",function(){
          hallarMedia(variables)
     });

     mediana[0].addEventListener("click",function(){
          hallarMediana(variables);
     })

     moda[0].addEventListener("click",function(){
          hallarModa();
     })
}

function crearArray(cantTh,variables){
     var fila = document.createElement("tr");
     variables.push([fila])
     table.appendChild(fila)
     var cantFilas = variables.length -1;
     for(let i = 0; i < cantTh; i++){
          var td = document.createElement("td");
          variables[cantFilas].push([td]);
          variables[cantFilas][0].appendChild(td);
      
     }
     for(let i = 0; i<2;i++){
          var number = document.createElement("input");
          number.setAttribute("type","number");
          variables[cantFilas][1].push(number)
          variables[cantFilas][1][0].appendChild(number)
     }
     var number = document.createElement("input");
     number.setAttribute("type","number"); 
     variables[cantFilas][2].push(number)
     variables[cantFilas][2][0].appendChild(number)
     return variables
}

function hallarModa(){
     var posicion = (n.innerHTML)/2;
     var a = 0
     while(posicion > columna2[a].innerHTML){
          a++;
     }
     var filaN = fila[a];
     var limiteInferior = parseFloat(columna0[a*2].value);
     var amplitud = parseFloat(columna0[(a*2)+1].value) - limiteInferior ;
     var fiAnterior;
     var fiSuperior;

     if(a>0)  fiAnterior = columna1[a-1].value;
     else fiAnterior = 0;

     if(a +1 == columna1.length)     fiSuperior = 0;
     else fiSuperior = columna1[a+1].value;

     var d1 = columna1[a].value - fiAnterior;
     var d2 = columna1[a].value - fiSuperior;
     var moda = limiteInferior + (amplitud*(d1/(d1 + d2)));
     escribirModa[1].innerHTML = (Math.floor(moda*100))/100;

}


function hallarMediana(variables){
     var n = sumaN(variables);
     var a = 0;
     posicion = n/2
     x = parseFloat(variables[0][2][1].value)
     while(posicion > x){
          x = x + parseFloat(variables[a][2][1].value);
          a++;
     }
     console.log(a)
     var limiteInferior = parseFloat(variables[a][1][1].value);
     var amplitud = parseFloat(variables[a][1][2].value) - limiteInferior;  
     var FiAnterior;
     var f = parseFloat(variables[a][1][2].value)
     if(a > 0){
          FiAnterior = parseFloat(variables[a-1][2][1].value);;
     }
     else FiAnterior = 0
     var mediana = limiteInferior + ((amplitud*(posicion - FiAnterior))/f);
     mediana = Math.floor(mediana*100)/100;
     console.log(mediana)
}

function hallarMedia(variables){
     var total = 0;
     var media = 0;
     var n = sumaN(variables);
     for(let i = 0; i < variables.length; i++){
          var mc = (parseFloat(variables[i][1][2].value) + parseFloat(variables[i][1][1].value))/2
          total = total + mc*parseFloat(variables[i][2][1].value)
     }
     media = total/n;
     media = Math.floor(media*100)/100;     
}
function sumaN(variables){
     var n = 0;
     for(let i = 0; i < variables.length; i++){
          n = n + parseFloat(variables[i][2][1].value)
     }
     return n;
}