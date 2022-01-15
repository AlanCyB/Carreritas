var carreritas=["Lucia","Roberto","Maria","Jesus","Andrea","Jose"];

function lasCarreritas(entrada){

   console.log("Posiciones al inicio ");

   var indice=0;
   for (elemento of entrada) {
       indice++;
       console.log(indice, elemento);
     }
   //[entrada[2],entrada[4]] = [entrada[4], entrada[2]]; intercambio
   entrada.splice(2,0,entrada.splice(4,1)[0])
   entrada.splice(1, 0, 'Cristobal');
   entrada.splice(2, 0, 'Fernanda');
   entrada.splice(3, 0, 'Armando');
   entrada.pop();
   entrada.unshift('Federico');

   console.log("Posiciones al final ");

   indice=0;
   for (elemento of entrada) {
       indice++;
       console.log(indice, elemento);
     }

}

lasCarreritas(carreritas);