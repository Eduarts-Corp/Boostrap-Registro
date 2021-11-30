// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{  //Este else se ingresa para que en caso dado de que la validacion de los datos sea correcta llama a la funcion registrar
                  //usuario que tenemos en la parte de abajo y pueda capturar los datos
            RegistrarUsuario();
            event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistrarUsuario(){
    alert("Usuario Almacenado Correctamente")
    //A traves de esta funcion se intentara capturar los datos ingresados
    let nombre = document.querySelector("#txtnombre").value;
    let apellido = document.querySelector("#txtapellido").value;
    let correo = document.querySelector("#txtcorreo").value;
    let celular = document.querySelector("#txtcelular").value;
    let rol = document.querySelector("#txtrol").value;

    let url=`http://127.0.0.1:3000/usuarios`; // nuestra cadena de conexion para poder llevar esto a la bd (tener Spyder y Proj Visual corriendo)
    let datos = {   // con este vamos a poder enviarle esta cadena de datos al metodo
      nombre : nombre,
      apellido : apellido,
      correo : correo,
      celular : celular,
      rol : rol

      

    }; // Estos datos de conexion los vamos a enviar a traves de un fetch que nos ayuda mucho para poder enviar los elementos
    
    fetch(url,{
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type':'application/json'
      }

    }).then(res => res.json())
    .then(mensaje => {    
      console.log(mensaje)
    })
    
  }

  
  

 

