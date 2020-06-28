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
     var table = document.getElementById("table");
     var intervalos = document.getElementsByClassName("interval");
     var fila = document.getElementsByClassName("fila");
     var td = document.getElementsByClassName("td");
     var creados = 0;
     var media = document.getElementsByClassName("media");
     var mediana = document.getElementsByClassName("mediana");
     var moda = document.getElementsByClassName("moda");
     var cantiTh = document.getElementsByClassName("th").length;
     var columna0 = document.getElementsByClassName("columna0");
     var columna1 = document.getElementsByClassName("columna1");
     var columna2 = document.getElementsByClassName("columna2");
     var columna3 = document.getElementsByClassName("columna3");
     var columna4 = document.getElementsByClassName("columna4");

     intervalos[0].addEventListener("click",function(){
          crearFila();
          crearTd(fila,fila.length-1,td,td.length,cantiTh);
          creados++;
     });
     intervalos[1].addEventListener("click",function(){
          if(creados > 0){
               var borrar = table.lastChild;
               table.removeChild(borrar);
               creados--;
          }
     });

     media[0].addEventListener("click",function(){
          hallarMedia(columna4,media[1],columna2[columna2.length-1]);
     });

     mediana[0].addEventListener("click",function(){
          hallarMediana(columna2[columna2.length-1],columna2,fila,columna0,columna1,mediana);
     })

     moda[0].addEventListener("click",function(){
          hallarModa(columna2[columna2.length-1],columna2,fila,columna0,columna1,moda);
     })

     document.getElementById("mc").addEventListener("click",function(){
          hallarMc(columna0,columna3);
     });
     document.getElementById("Fi").addEventListener("click",function(){
          hallarFi(columna1,columna2);          
     });
     document.getElementById("fMc").addEventListener("click",function(){
          hallar_fMc(columna3,columna1,columna4);
     });

     document.getElementById("ejecutar").addEventListener("click",function(){
          
          hallarMc(columna0,columna3);
          hallarFi(columna1,columna2);
          hallar_fMc(columna3,columna1,columna4);
          hallarMedia(columna4,media[1],columna2[columna2.length-1]);
          hallarMediana(columna2[columna2.length-1],columna2,fila,columna0,columna1,mediana);
          hallarModa(columna2[columna2.length-1],columna2,fila,columna0,columna1,moda);
          alert("correo de contacto: richardalvaradoflores@gmail.com");
     })
     
}

function hallarModa(n,columna2,fila,columna0,columna1,escribirModa){
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


function hallarMediana(n,columna2,fila,columna0,columna1,escribirMediana){
     var posicion = (n.innerHTML)/2;
     var a = 0;
     while(posicion > columna2[a].innerHTML){
          a++;
     }
     var filaN = fila[a];
     var limiteInferior = parseFloat(columna0[a*2].value);
     var amplitud = parseFloat(columna0[(a*2)+1].value) - limiteInferior;  
     var FiAnterior;
     if(a > 0){
          FiAnterior = parseFloat(columna2[a-1].innerHTML);
     }
     else FiAnterior = 0
     var mediana = limiteInferior + ((amplitud*(posicion - FiAnterior))/parseFloat(columna1[a].value));
     escribirMediana[1].innerHTML = (Math.floor(mediana*100))/100;
}

function hallarMedia(columna4,mostrar,n){
     var media = 0;
     for(let i = 0; i < columna4.length;i++){
          media = parseFloat(media)+ parseFloat(columna4[i].innerHTML);
     }
     mostrar.innerHTML =+ (Math.floor(media/(n.innerHTML)*100))/100;
     
}

function hallar_fMc(columna3,columna1,columna4){
    
     for(let i = 0; i < columna4.length;i++){
          columna4[i].innerHTML = parseFloat(columna3[i].innerHTML)*parseFloat(columna1[i].value);
     }
}

function hallarMc(columna0,columna3){
     let x = 0
     for(let i = 0; i < columna3.length ;i++){
          columna3[i].innerHTML = (parseInt(columna0[x+1].value) + parseInt(columna0[x].value))/2;
          x=x+2;
     }
     
}

function hallarFi(columna1,columna2){
     columna2[0].innerHTML = parseInt(columna1[0].value);
     columna2[1].innerHTML = parseInt(columna1[1].value) + parseInt(columna2[0].innerHTML);
     
     for(let i = 0; i<columna2.length;i++){
          if(i == 0){
               columna2[i].innerHTML = parseInt(columna1[i].value);
          }
          else{
               columna2[i].innerHTML = parseInt(columna1[i].value) + parseInt(columna2[i-1].innerHTML);
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
          var cuadro = document.createElement("td");
          cuadro.setAttribute("class","td");
          fila[cantFila].appendChild(cuadro);
          if(i == 2){
               cuadro.setAttribute("class","columna2");
          }
          if(i ==3){
               cuadro.setAttribute("class","columna3");
          }
          if(i ==4){
               cuadro.setAttribute("class","columna4");
          }
     }
     for(let i = 0; i<2;i++){
          var text = document.createElement("input");
          text.setAttribute("type","number");
          text.setAttribute("class","columna0");
          td[cantTd].appendChild(text);
     }
     cantTd++;
     var number = document.createElement("input");
     number.setAttribute("type","number");
     number.setAttribute("class","columna1");
     td[cantTd].appendChild(number);  
}
/* */ 
