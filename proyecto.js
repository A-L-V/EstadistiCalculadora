function noAgrupados(){
     let noAgrupados = document.getElementById("noAgrupados")
     let agrupados = document.getElementById("agrupados")
     noAgrupados.removeAttribute("onclick")
     agrupados.setAttribute("onclick","agrupados()")
     document.getElementById("divNoAgrupados").style.display="block"
     document.getElementById("divAgrupados").style.display="none"
     if(agrupados.hasAttribute("onclick")){
          mainA();
     }
}
function mainA(){
     let input = document.getElementById("input");
     let button = document.getElementById("button");
     let output = document.getElementById("output");
     button.addEventListener("click", function(){
          var datos = input.value.split(",");
          
          for(let i = 0; i< datos.length; i++) datos[i]= parseFloat(datos[i]);  
               datos.sort(function(prev,next) {
               return prev - next; 
          });
          media = hallarMedia(datos);
          mediana = hallarMediana(datos);
          moda = hallarModa(datos);
          output.innerHTML = " media " +  media + "<br/>" + "mediana: " + mediana + "<br/>" + "moda: " + moda
          alert("nota: el sistema falta ser corregido en la moda, ya que puede haber varias modas, la moda que es entregada es la primera repetitiva que encuentra el sistema")
     })}


function hallarMedia(datos){
     var media = 0;
     for(let i = 0; i < datos.length; i++) media = media + datos[i];
     media = media/(datos.length)
     return media;  
}

function hallarMediana(datos){
     var mediana;
     if (datos.length % 2 == 0){
          mediana = datos[(datos.length/2)-1];
     }
     else{
          mediana = datos[((datos.length+1)/2)-1];
     }
     return mediana;
}

function hallarModa(datos){
     var numero = 0 ; valor = 0,rep = 0;
     for(let i = 0; i < datos.length; i++){
          numero = datos[i]
          if(rep <  verifica(numero,datos)){
               rep = verifica(numero,datos)
               valor= datos[i];
          }
     }
     return valor;
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