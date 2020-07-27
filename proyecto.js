var a = 10;

function noAgrupados(){
     let noAgrupados = document.getElementById("noAgrupados");
     let agrupados = document.getElementById("agrupados");
     noAgrupados.removeAttribute("onclick");
     agrupados.setAttribute("onclick","agrupados()");
     document.getElementById("divNoAgrupados").style.display="block";
     document.getElementById("divAgrupados").style.display="none";
     if(agrupados.hasAttribute("onclick")){
          mainA();
     }
}

function mainA(){
     var input = document.getElementById("input");
     let mediaNoAgrupados = document.getElementById("mediaNoAgrupados");
     let medianaNoAgrupados = document.getElementById("medianaNoAgrupados");
     let modaNoAgrupados = document.getElementById("modaNoAgrupados");
     let mostrarArray = document.getElementById("mostrarArray");
     let varianzaNoAgrupados = document.getElementById("varianzaNoAgrupados")
     let variacionNoAgrupados = document.getElementById("variacionNoAgrupados")
     let desviacionTipicaNoAgrupados = document.getElementById("desviacionTipicaNoAgrupados")
     let ejecutar = document.getElementById("ejecutarNoAgrupados") 
     let tipo = document.getElementsByClassName("tipoNoAgrupados")
     let percentilDato = document.getElementById("percentilDatoNoAgrupado")
     var coefDeAsimetria = document.getElementById("coeficienteDeAsimetriaNoAgrupados");  
     if(!tipo[0].checked)  tipo[0].click();
     var numeroTipo = 0
     var variables = []
     tipo[0].addEventListener("click",function(){
          if(tipo[1].checked){
               tipo[1].click();
          }
          numeroTipo = 0;
     })
     tipo[1].addEventListener("click",function(){
          if(tipo[0].checked){
               tipo[0].click();
          }
          numeroTipo = 1;
     })
     ejecutar.addEventListener("click",function(){
          var datos;
          if(variables.length > 0 ){
               datos=[]
               var x 
               var y
               for(i in variables){
                    if(i%2 == 0 || i == 0){
                         x = parseInt(variables[i].value);
                    }
                    if(!(i%2 == 0)){
                         for(let z = 1; z <= x ; z++){
                             y = parseFloat(variables[i].value)
                             datos.push(y)
                         }
                    }
               }
               x = 0
               y = 0
          }
          else{
               datos = procesoDatos();
          }
          
          var readMedia = hallarMediaNoAgrupados(datos);
          mediaNoAgrupados.innerHTML = "Media: " + readMedia;

          var readMediana = hallarMedianaNoAgrupados(datos);
          medianaNoAgrupados.innerHTML = "Mediana: " + readMediana;

          var readModa = hallarModaNoAgrupados(datos);
          alert("nota: el sistema falta ser corregido en la moda, ya que puede haber varias modas, la moda que es entregada es la primera repetitiva que encuentra el sistema");
          modaNoAgrupados.innerHTML = "Moda: " + readModa;
          
          var readVarianza = hallarVarianzaNoAgrupados(numeroTipo,datos,readMedia);
          var readVarianza = (Math.floor(readVarianza*100))/100
          varianzaNoAgrupados.innerHTML = "Varianza: " + readVarianza;

          var desviacionTipica = Math.sqrt(readVarianza);
          desviacionTipica = (Math.floor(desviacionTipica*100))/100;
          desviacionTipicaNoAgrupados.innerHTML = "Desviacion Tipica: " + desviacionTipica;

          var variacion = desviacionTipica*100/readMedia;
          variacion = (Math.floor(variacion*100))/100;
          variacionNoAgrupados.innerHTML = "Coeficiente de Variacion: " + variacion + "%";

          if(percentilDato.value > 0 && percentilDato.value <=100){
               readPercentil = hallarPercentilNoAgrupados(datos,percentilDato.value);
               var writePercentil = document.getElementById("percentilNoAgrupados");
               writePercentil.innerHTML = "Percentil(" + percentilDato.value + "): " + readPercentil
          }
          coefDeAsimetria.innerHTML = "Coeficiente de Asimetria de Pearson: " + (3*(readMedia- readMediana)/desviacionTipica); 
          

          mostrar(datos,mostrarArray);
     })
     input.addEventListener("onkeypress",soloNumeros);

     document.getElementById("opcion2").addEventListener("click",function(){
          document.getElementById("opcionOne").style.display="none";
          document.getElementById("opcionTwo").style.display="block";
          var cantTh = document.getElementsByClassName("th2").length;
          var intervalos = document.getElementsByClassName("interval2")
          var table = document.getElementById("table2");
          var creados = 0;
          intervalos[0].addEventListener("click",function(){
               variables = crearArrayOpcionTwo(cantTh,variables,table);
               creados++;
          });
     
          intervalos[1].addEventListener("click",function(){
               if(creados > 0){
                    var borrar = table.lastChild;
                    table.removeChild(borrar);
                    creados--;
                    variables.pop()
                    variables.pop()
               }
          });
     })
     document.getElementById("opcion1").addEventListener("click",function(){
          variables = []
          document.getElementById("opcionTwo").style.display="none";
          document.getElementById("opcionOne").style.display="block";
     })
}

function crearArrayOpcionTwo(cantTh,variables,table){
     var fila = document.createElement("tr");
     table.appendChild(fila)
     for(let i = 0; i < cantTh; i++){
          var td = document.createElement("td");
          fila.appendChild(td);
          var number = document.createElement("input");
          number.setAttribute("type","number");
          variables.push(number);
          td.appendChild(number);
     }
     return variables;
}

function hallarPercentilNoAgrupados(datos,p){
     var n = datos.length;
     var posicion = p*(n+1)/100;
     var entero = parseInt(posicion);
     var decimal = posicion - entero;
     var limiteInferior = datos[entero-1];
     var razon = datos[entero]  - limiteInferior;
     var percentil = limiteInferior + razon*decimal;
     percentil = Math.floor(percentil*100)/100;
     return percentil;
}

function mostrar(a,b){
     var texto = "";
     for(let i = 0; i < a.length; i++){
          texto = texto  + a[i] + ",";
     }
     b.innerHTML = texto;
}

function hallarVarianzaNoAgrupados(x,datos,media){
     let S = 0;
     for(let i = 0; i < datos.length;i++){
          S = ((datos[i] - media)*(datos[i] - media)) + S;
     }
     S =  S/(datos.length - x);
 
     S = (Math.floor(S*100))/100;
     return S;
}

function soloNumeros(e){
     key = e.keyCode;
     teclado = String.fromCharCode(key);
     numero = "0123456789,";
     especiales = "37-39-44-49-50-51-52-53-54-55-56-57-48";
     tecladoEspecial = false;
     for(var i in especiales){
          if(e.key == especiales[i]){
               a  = a + 1.3;
               input.style.width = a + "%";
               input.style.backgroundColor = "blue";
               if (parseInt(a % 80) === 0){
                    input.style.height = (a - 70) +"%";
               }
               tecladoEspecial = true;
               return tecladoEspecial;
          
          }
     }
     
     if((numero.indexOf(teclado) == -1) && (!tecladoEspecial)){
          input.style.backgroundColor = "red";
          return false;
     }
}        

function procesoDatos(){
     var datos = input.value.split(",");
          for(let i = 0; i< datos.length; i++) datos[i]= parseFloat(datos[i]);  
               datos.sort(function(prev,next) {
               return prev - next; 
          });
     return datos;
}

function hallarMediaNoAgrupados(datos){
     var media =0;
     for(let i = 0; i < datos.length; i++) media = media + datos[i];
     media = media/(datos.length);
     media = (Math.floor(media*100))/100;
     return media;
}

function hallarMedianaNoAgrupados(datos){
     var mediana;
     if (datos.length % 2 == 0){
          mediana = (datos[(datos.length/2)-1] + datos[datos.length/2])/2;
     }
     else{
          mediana = datos[((datos.length+1)/2)-1];
     }
     mediana = (Math.floor(mediana*100))/100;
     return mediana
}

function hallarModaNoAgrupados(datos){
     var numero = 0 ,valor = 0,rep = 0;
     for(let i = 0; i < datos.length; i++){
          numero = datos[i];
          if(rep <  verifica(numero,datos)){
               rep = verifica(numero,datos);
               valor= datos[i];
          }
     }
     moda = (Math.floor(valor*100))/100;
     return moda;
}

function verifica(num,datos){
     var x = 0;
     for(let i = 0; i < datos.length; i++){
          if(num == datos[i]){
               x++;
          }
     }
     return x;
}