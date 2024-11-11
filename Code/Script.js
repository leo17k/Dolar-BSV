
document.addEventListener('DOMContentLoaded', () => {  
  const SS = document.getElementById('ss');  
  const BS = document.getElementById('BS');  
  const op = document.getElementById('Tranformar');  

 
  holapulto();  

 
  op.addEventListener('change', holapulto);  

  function holapulto() {  
      const seltOP = op.value;
      console.log("Opción seleccionada:", seltOP);

      
      if (seltOP === "$$ a BS") {  
          console.log("Seleccionado:$$ a BS");  
          SS.style.display = 'none';  
          BS.style.display = 'block';  
      } else if (seltOP === "BS a $$") {  
          console.log("Seleccionado: BS a $$");  
          BS.style.display = 'none';  
          SS.style.display = 'block';  
      } else {  
          console.log("No se seleccionó una opción válida.");  
      }  
  }  



});
