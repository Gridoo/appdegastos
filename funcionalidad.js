const nombres=[];
const pagos=[];

function tocar() {
    let x= document.getElementById("nombre").value;
    let y= document.getElementById("pago").value;
    nombres.push=(x);
    pagos.push=(y);
    mostrar(x);
    mostrar(y);
}

function mostrar (x) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(x);
  newDiv.appendChild(newContent);

  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

console.log(nombres);
console.log(pagos);