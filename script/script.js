$(document).ready(function(){

  $("#btn").click(function(){
    // console.log("click");
    getUsers();
  });

function getUsers(){
$.ajax({
  url:"https://mini-shop-rg.herokuapp.com/products",
  type:"GET",
  dataType:"json",
  success : function(respuesta){
    var lisUsuarios =$("#usuarios");
      console.log(respuesta);
    var collectioUsers = respuesta;

  for(var i = 0; i < collectioUsers.length; i++ ){
      var productos = collectioUsers[i];
    lisUsuarios.append(`<div class="container">
    <img src=${productos.image} class="im">
    <p class="p2"> Numero del producto: ${productos.id}<p>
    <p class="p2">Nombre del producto: ${productos.name}<p>
    <p class="p2"> Precio:${productos.price} Stock: ${productos.stock}<p>
    <br>
    <div><p id="p3">${productos.description}</p></div>
      <br>
      <button type="button" name="button" id="btd">Buy</button>
    </div>`);
    }
  },
  error : function(error){
    alert("ha ocurrido un error");
  },
  complete : function(status){

    alert("peticion finalizada");
  }
});

}
});
