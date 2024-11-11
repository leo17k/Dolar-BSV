fetch("https://ve.dolarapi.com/v1/dolares/oficial")  
  .then(response => response.json())  
  .then(data => {  
    let arrayData = Object.values(data);  
    let Dolar = arrayData[4];
    console.log(Dolar);  

    let text = document.querySelector('.dolar');  
    text.textContent = Dolar;  
    let SS = document.getElementById('ss'); 
    const op = document.getElementById('Tranformar');  
    let xd = document.getElementById("BS");  
    let btn = document.getElementById("btn");  
    let h2 = document.getElementById("h2");  

    btn.addEventListener("click", () => {  
      const seltOP = op.value;

      if (seltOP === "$$ a BS") {  
        let Cantidad = parseFloat(xd.value); 
        let resultado = bsa$$(Dolar, Cantidad); 
        h2.textContent = resultado.toFixed(2) +' BS'; 
  
    } else if (seltOP === "BS a $$") {  
      let Cantidad = parseFloat(SS.value); 
      let resultado = $$abs(Dolar, Cantidad); 
      h2.textContent = resultado.toFixed(2) +' $$'; 

   }});  

    function $$abs(Dolar, Cantidad) {  
      return Cantidad / Dolar;  
    }  

    function bsa$$(Dolar, Cantidad) {  
      return Cantidad * Dolar;  
    }  

  })  
  .catch(error => console.log('sin conexión'));

const fechaUTC = new Date("2024-11-07T20:00:33.708Z");  
const fechaVenezuela = new Date(fechaUTC.getTime() - (1 * 60 * 60 * 1000));  


const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };  
const fechaFormatoVenezuela = fechaVenezuela.toLocaleDateString('es-VE', opcionesFecha);  


const opcionesHora = { hour: '2-digit', minute: '2-digit',  };  
const horaVenezuela = fechaVenezuela.toLocaleTimeString('es-VE', opcionesHora);  

console.log(horaVenezuela);
console.log(fechaFormatoVenezuela);


let fechaDolar = document.getElementById('fechaDolar');
let horaDolar = document.getElementById('horaDolar')

fechaDolar.textContent =   horaVenezuela + " " + fechaFormatoVenezuela;

