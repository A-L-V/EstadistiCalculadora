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

function mainB(){     
     var creados = 0;
     var table = document.getElementById("table");
     var intervalos = document.getElementsByClassName("interval");
     var variables =[]
     var ejecutar = document.getElementById("ejecutar")
     var media = document.getElementById("media");
     var mediana = document.getElementById("mediana");
     var moda = document.getElementById("moda");
     var varianza = document.getElementById("varianza");
     var desviacionStandar = document.getElementById("desviacionStandar");
     var coeficienteVariacion = document.getElementById("coeficienteVariacion");
     var tipo = document.getElementsByClassName("tipo")
     var perceptilDato = document.getElementById("perceptilDato");
     var cantTh = document.getElementsByClassName("th").length;
     var coefDeAsimetria = document.getElementById("coeficienteDeAsimetria");  
     if(!tipo[0].checked)  tipo[0].click();
     var x = 0;
     tipo[0].addEventListener("click",function(){
          if(tipo[1].checked){
               tipo[1].click();
          }
          x = 0;
     })
     tipo[1].addEventListener("click",function(){
          if(tipo[0].checked){
               tipo[0].click();
          }
          x = 1;
     })

     intervalos[0].addEventListener("click",function(){
          crearArray(cantTh,variables);
          creados++;
     });

     intervalos[1].addEventListener("click",function(){
          if(creados > 0){
               var borrar = table.lastChild;
               table.removeChild(borrar);
               creados--;
               variables.pop()
          }
     });
     intervalos[0].click();

     ejecutar.addEventListener("click",function(){
          var writeMedia = hallarMedia(variables);
          media.innerHTML = "media: " + writeMedia;

          var writeMediana = hallarMediana(variables);
          mediana.innerHTML = "mediana: " + writeMediana;

          var writeModa = hallarModa(variables);
          moda.innerHTML = "moda: " + writeModa;

          var writeVarianza = hallarVarianza(variables,writeMedia,x);
          varianza.innerHTML = " varianza: " + writeVarianza;

          var desviationStandar = Math.sqrt(writeVarianza);
          desviationStandar = (Math.floor(desviationStandar*100))/100;
          desviacionStandar.innerHTML = "desviacion Estandar: " + desviationStandar;

          var coefiVariancion = desviationStandar*100/writeMedia;
          coefiVariancion = (Math.floor(coefiVariancion*100))/100;
          coeficienteVariacion.innerHTML = "coeficiente de variacion: " + coefiVariancion +"%";

          if(perceptilDato.value > 0 && perceptilDato.value <=100){
               readPerceptil = hallarPerceptil(variables,perceptilDato.value);
               var writePerceptil = document.getElementById("perceptil");
               writePerceptil.innerHTML = "Perceptil(" + perceptilDato.value + "): " + readPerceptil;
          }
          coefDeAsimetria.innerHTML = "Coeficiente de Asimetria de Pearson: " + (3*(writeMedia- writeMediana)/desviationStandar);

     })
}

function hallarPerceptil(variables,p){
     var n = sumaN(variables);
     var posicion = p*(n)/100;
     var a = 0;
     var x = 0;
     do{
          x = x + parseFloat(variables[a][2][1].value);
          if(posicion < x)
          {
               a = a;
          }
          else a++;
     }while( posicion > x)
     if( posicion == x){
          return parseFloat(variables[a][1][2].value);
     }    
     var limiteInferior = parseFloat(variables[a][1][1].value);
     var amplitud = parseFloat(variables[a][1][2].value) - limiteInferior;
     var fi = parseFloat(variables[a][2][1].value);
     if(a > 0){
          FiAnterior = x - fi;
     }
     else FiAnterior = 0; 
     var perceptil = limiteInferior + (amplitud*(posicion - FiAnterior)/fi);
     perceptil = (Math.floor(perceptil*100)/100);
     return perceptil;
}

function hallarVarianza(variables,media,x){
     var total = 0;
     for(let i = 0; i < variables.length; i++){
          var mc = (parseFloat(variables[i][1][2].value) + parseFloat(variables[i][1][1].value))/2;
          var mcXf = ((mc - media)*(mc - media))*parseFloat(variables[i][2][1].value);
          total = total + mcXf;
     }
     
     var n = sumaN(variables);
     var varianza = total/(n-x);
     varianza = (Math.floor(varianza*100))/100;
     return varianza;
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

          if(i == 0){
               var p = document.createElement("span");
               variables[cantFilas][1][0].appendChild(p)
               p.innerHTML = "--"
          }
           
     }
     var number = document.createElement("input");
     number.setAttribute("type","number"); 
     variables[cantFilas][2].push(number)
     variables[cantFilas][2][0].appendChild(number)
     return variables
}

function hallarModa(variables){
     var n = sumaN(variables);
     var a = 0;
     posicion = n/2
     var x = 0;
     do{
          x = x + parseFloat(variables[a][2][1].value);
          if(posicion < x)
          {
               a = a;
          }
          else a++;
     }while( posicion > x)
     if( posicion == x){
          return posicion
     }
     var limiteInferior = parseFloat(variables[a][1][1].value);
     var amplitud = parseFloat(variables[a][1][2].value) - limiteInferior;  
     var fiAnterior;
     var fiSuperior;
     if(a>0)  fiAnterior = variables[a-1][2][1].value;
     else fiAnterior = 0;
     if(a + 1 == variables.length)     fiSuperior = 0;
     else fiSuperior = variables[a+1][2][1].value;
     var d1 = variables[a][2][1].value - fiAnterior;
     var d2 = variables[a][2][1].value - fiSuperior;
     var moda = limiteInferior + (amplitud*(d1/(d1 + d2)));
     moda = (Math.floor(moda*100))/100;
     return moda;

}

function hallarMediana(variables){
     var n = sumaN(variables);
     var a = 0;
     posicion = n/2
     var x = 0;
     do{
          x = x + parseFloat(variables[a][2][1].value);
          if(posicion < x)
          {
               a = a;
          }
          else a++;
     }while( posicion > x)
     if( posicion == x){
          return posicion
     }
     var limiteInferior = parseFloat(variables[a][1][1].value);
     var amplitud = parseFloat(variables[a][1][2].value) - limiteInferior;  
     var FiAnterior;
     var fi = parseFloat(variables[a][2][1].value)
     if(a > 0){
          FiAnterior = x - fi;
     }
     else FiAnterior = 0;
     var mediana = limiteInferior + ((amplitud*(posicion - FiAnterior))/fi);
     mediana = Math.floor(mediana*100)/100;
     return mediana
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
     return media;
}

function sumaN(variables){
     var n = 0;
     for(let i = 0; i < variables.length; i++){
          n = n + parseFloat(variables[i][2][1].value)
     }
     return n;
}