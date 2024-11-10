


console.log(hola);
const DolarText = document.querySelectorAll('.dolar');

// Assuming you have a way to fetch the current dollar rate
const Dolar = 4.5; // Replace this with the actual fetched value

function Dolarhoy(dolar) {
  return dolar;
}

DolarText.forEach(element => {
  element.textContent = Dolarhoy(Dolar);
});

console.log(Dolar);