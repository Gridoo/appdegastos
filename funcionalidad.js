const nombres=[];
const pagos=[];

function tocar() {
    let x= document.getElementById("nombre").value;
    let y= document.getElementById("pago").value;
    nombres.push(x);
    pagos.push(y);
    mostrar(x);
    mostrar(y);
    recorrer();
}

function mostrar (x) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(x);
  newDiv.appendChild(newContent);

  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

function recorrer(){
  let suma=0;
  for (let i = 0; i < pagos.length; i++) {
    suma += Number(pagos[i]);
  }
  mostrar(suma);
}