var carro = [];
var spTotal = document.getElementById("total");
var listaCarro = document.getElementById("carrito");


function agregarCarro1(){
    var objProducto={
        id:1,
        nombre:"Producto1",
        precio:384,
    };
    carro.push(objProducto);
    calculartotal();
    mostrarenCarro();
}


function calculartotal(){
    var elTotal = 0;
    for(var p of carro)
        {
            elTotal+= p.precio;
        }
        spTotal.textContent= elTotal;
}

function mostrarenCarro(){
    listaCarro.textContent = "";
    var nodoProductoenCarro = document.createElement("li");
    nodoProductoenCarro.classList.add("list-group-item","text-right","mx-2");
    nodoProductoenCarro.textContent = objP.nombre + " - $" + objP.precio;
    listaCarro.appendChild(nodoProductoenCarro);
}

//append child: agregar un icono
