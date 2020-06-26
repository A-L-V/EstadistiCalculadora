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
     let mediaNoAgrupados = document.getElementsByClassName("mediaNoAgrupados")
     let medianaNoAgrupados = document.getElementsByClassName("medianaNoAgrupados")
     let modaNoAgrupados = document.getElementsByClassName("modaNoAgrupados")
     input.addEventListener("input",cuadro)
     
     mediaNoAgrupados[0].addEventListener("click",function(){
          datos = procesoDatos()
          hallarMediaNoAgrupados(datos,mediaNoAgrupados);
     })
     medianaNoAgrupados[0].addEventListener("click",function(){
          datos = procesoDatos()
          hallarMedianaNoAgrupados(datos,medianaNoAgrupados);
     })
     modaNoAgrupados[0].addEventListener("click",function(){
          datos = procesoDatos()
          hallarModaNoAgrupados(datos,modaNoAgrupados)
          alert("nota: el sistema falta ser corregido en la moda, ya que puede haber varias modas, la moda que es entregada es la primera repetitiva que encuentra el sistema")
     })
     document.getElementById("ejecutarNoAgrupados").addEventListener("click",function(){
          datos = procesoDatos()
          hallarMediaNoAgrupados(datos,mediaNoAgrupados);
          hallarMedianaNoAgrupados(datos,medianaNoAgrupados);
          hallarModaNoAgrupados(datos,modaNoAgrupados)
          alert("nota: el sistema falta ser corregido en la moda, ya que puede haber varias modas, la moda que es entregada es la primera repetitiva que encuentra el sistema")
     })

}

function cuadro(x){
}

function procesoDatos(){
     var datos = input.value.split(",");
          for(let i = 0; i< datos.length; i++) datos[i]= parseFloat(datos[i]);  
               datos.sort(function(prev,next) {
               return prev - next; 
          });
     return datos
}

function hallarMediaNoAgrupados(datos,mediaNoAgrupados){
     var media =0;
     for(let i = 0; i < datos.length; i++) media = media + datos[i];
     media = media/(datos.length)
     mediaNoAgrupados[1].innerHTML = (Math.floor(media*100))/100
}

function hallarMedianaNoAgrupados(datos,medianaNoAgrupados){
     var mediana;
     if (datos.length % 2 == 0){
          mediana = (datos[(datos.length/2)-1] + datos[datos.length/2])/2;
     }
     else{
          mediana = datos[((datos.length+1)/2)-1];
     }
     medianaNoAgrupados[1].innerHTML = (Math.floor(mediana*100))/100
}

function hallarModaNoAgrupados(datos,modaNoAgrupados){
     var numero = 0 ; valor = 0,rep = 0;
     for(let i = 0; i < datos.length; i++){
          numero = datos[i]
          if(rep <  verifica(numero,datos)){
               rep = verifica(numero,datos)
               valor= datos[i];
               
          }
     }

     modaNoAgrupados[1].innerHTML = (Math.floor(valor*100))/100
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