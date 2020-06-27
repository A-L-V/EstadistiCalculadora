var a = 10

function noAgrupados(){
     document.getElementById("divNoAgrupados").style.display="block"
     document.getElementById("divAgrupados").style.display="none"
<<<<<<< Updated upstream

     let input = document.getElementById("input");
     let button = document.getElementById("button");
     let output = document.getElementById("output");
     button.addEventListener("click", function(){
          var datos = input.value.split(",");
=======
     if(agrupados.hasAttribute("onclick")){
          mainA();
     }
}
function mainA(){
     var input = document.getElementById("input");
     let mediaNoAgrupados = document.getElementsByClassName("mediaNoAgrupados")
     let medianaNoAgrupados = document.getElementsByClassName("medianaNoAgrupados")
     let modaNoAgrupados = document.getElementsByClassName("modaNoAgrupados")
     let mostrarArray = document.getElementById("mostrarArray")
     mediaNoAgrupados[0].addEventListener("click",function(){
          datos = procesoDatos()
          hallarMediaNoAgrupados(datos,mediaNoAgrupados);
          mostrar(datos,mostrarArray)
     })
     medianaNoAgrupados[0].addEventListener("click",function(){
          datos = procesoDatos()
          hallarMedianaNoAgrupados(datos,medianaNoAgrupados);
          mostrar(datos,mostrarArray)
     })
     modaNoAgrupados[0].addEventListener("click",function(){
          datos = procesoDatos()
          hallarModaNoAgrupados(datos,modaNoAgrupados)
          alert("nota: el sistema falta ser corregido en la moda, ya que puede haber varias modas, la moda que es entregada es la primera repetitiva que encuentra el sistema")
          mostrar(datos,mostrarArray)
     })
     document.getElementById("ejecutarNoAgrupados").addEventListener("click",function(){
          datos = procesoDatos()
          hallarMediaNoAgrupados(datos,mediaNoAgrupados);
          hallarMedianaNoAgrupados(datos,medianaNoAgrupados);
          hallarModaNoAgrupados(datos,modaNoAgrupados)
          alert("nota: el sistema falta ser corregido en la moda, ya que puede haber varias modas, la moda que es entregada es la primera repetitiva que encuentra el sistema")
          mostrar(datos,mostrarArray)
     })
     
     input.addEventListener("onkeypress",soloNumeros)
}

function mostrar(a,b){
     var texto = ""
     for(let i = 0; i < a.length; i++){
          texto = texto  + a[i] + ","
     }
     b.innerHTML = texto
}

function soloNumeros(e){
     key = e.keyCode
     teclado = String.fromCharCode(key);
     numero = "0123456789,";
     especiales = "37-39-44-49-50-51-52-53-54-55-56-57-48";
     tecladoEspecial = false;
     for(var i in especiales){
          if(e.key == especiales[i]){
               a  = a + 1.2
               input.style.width = a + "%"
               input.style.backgroundColor = "blue"
               if (parseInt(a % 80) === 0){
                    input.style.height = (a - 70) +"%"
               }
               tecladoEspecial = true
               return tecladoEspecial
          
          }
     }
     
     if((numero.indexOf(teclado) == -1) && (!tecladoEspecial)){
          input.style.backgroundColor = "red"
        
          return false;
     }
}
>>>>>>> Stashed changes

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