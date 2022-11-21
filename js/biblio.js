var Prodlist=[];


class product{
    constructor(a,b,c,d,e){
        this.id = a;
        this.Producto=b;
        this.Categoria=c;
        this.Precio=d;
        this.Existencia=e;
    }
       
}


function SaveData(){

    var cod,Producto,categoria;
    var Existencia,Precio;


    cod = formData.inputId.value;
    Producto = formData.inputProducto.value;
    categoria = formData.InputCategoria.value;
    Precio = formData.inputPrecio.value;
    Existencia = formData.inputExistencia.value;

    if(sessionStorage.getItem('list')===null){
        sessionStorage.setItem("list",JSON.stringify(Prodlist));
    }else{
        Prodlist=JSON.parse(sessionStorage.getItem('list'));
    }

    var prod = new product(cod,Producto,categoria,Precio,Existencia);
    Prodlist.push(prod);

    sessionStorage.setItem("list",JSON.stringify(Prodlist))
    
    alert("dato Guardado");
}


function petSelect(vas){

    Prodlist = JSON.parse(sessionStorage.getItem('list'));

    var table,thead,tbody;

    table="<table>"
    thead="<thead><tr><th>codigo</th><th>Producto</th><th>Categoria</th><th>Precio</th><th>Existencia</th><th>Detalles</th></tr></thead>";
    table+=thead;

    tbody="<tbody>";
    Prodlist.forEach(function(j){
        if(j.Categoria==vas.value){
            tbody+="<tr><td>"+j.id+"</td><td>"+j.Producto+"</td><td>"+j.Categoria+"</td><td>"+j.Precio+"</td><td>"+j.Existencia+"</td><td><button onclick='loadDetails(this)' value="+j.id+">Detalles</button></td></tr>";
        }else{
            if(vas.value==0){
                tbody+="<tr><td>"+j.id+"</td><td>"+j.Producto+"</td><td>"+j.Categoria+"</td><td>"+j.Precio+"</td><td>"+j.Existencia+"</td><td><button onclick='loadDetails(this)' value="+j.id+">Detalles</button></td></tr>";
        }
    }
    });

    tbody+="</tbody>";
    table+=tbody;
    table+="</table>";

    document.getElementById('viewtable').innerHTML=table;  
}


function filterTable(element){

    Prodlist = JSON.parse(sessionStorage.getItem('list'));

    var table,thead,tbody;
    table="<table>";
    thead="<thead><tr><th>codigo</th><th>Producto</th><th>Categoria</th><th>Precio</th><th>Existencia</th><th>Detalles</th></tr></thead>";
    table+=thead;

    tbody="<tbody>";
        Prodlist.forEach(function (i){
            if(i.Producto.toLowerCase().startsWith(element.value.toLowerCase())){
            tbody+="<tr><td>"+i.id+"</td><td>"+i.Producto+"</td><td>"+i.Categoria+"</td><td>"+i.Precio+"</td><td>"+i.Existencia+"</td><td><button onclick='loadDetails(this)' value="+i.id+">Detalles</button></td></tr>";
            }
        });
    tbody+="</tbody>";

    table+=tbody;
    table+="</table>";

    document.getElementById("filtro").innerHTML=table;

}

function loadDetails(element){
    sessionStorage.setItem('id',element.value);
    window.open('detail.html','_self');
}

function applyFilter(){

    var filter = sessionStorage.getItem('id');
    var  a, b, c, d ,e;

    Prodlist = JSON.parse(sessionStorage.getItem('list'));

    Prodlist.forEach(function(i){
        if (i.id == filter){
            a = i.id;
            b = i.Producto;
            c = i.Categoria;
            d = i.Precio;
            e = i.Existencia;
        }
    })

    document.getElementById('inputid').value=a
    document.getElementById('inputproducto').value=b
    document.getElementById('inputcategoria').value=c;
    document.getElementById('inputprecio').value=d;
    document.getElementById('inputexistencia').value=e;
    
}

function ResList(){

    sessionStorage.clear('list');

}
