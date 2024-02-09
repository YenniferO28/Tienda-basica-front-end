document.getElementById("bt_register").addEventListener("click", registro);
document.getElementById("bt_login").addEventListener("click", login);

baseDeDatos = JSON.parse(localStorage.getItem("sistema-de-login"))

if (!baseDeDatos){
    cargarDatosIniciales()
}

function cargarDatosIniciales(){
    baseDeDatos = {
        "prueba1@gmail.com": {
            nombre: "Prueba 1", contra: "abcd", correo: "prueba1@gmail.com", usuario: "prueba1"
        },
        "prueba2@gmail.com": {
            nombre: "Prueba 2", contra: "abcd", correo: "prueba2@gmail.com", usuario: "prueba2"
        },
        "prueba3@gmail.com": {
            nombre: "Prueba 3", contra: "abcd", correo: "prueba3@gmail.com", usuario: "prueba3"
        }
    }
}

function login(event){
    event.preventDefault();

        let correo = document.getElementById("logcorreo").value;
        let contra = document.getElementById("logcontra").value;

        if(!correo){
            alert("No hay Correo")
            return false;
        }

        if(!contra){
            alert("No hay Contraseña")
            return false;
        }
        let datos = baseDeDatos[correo]

        if(!datos){
            alert("El Correo No Esta Registrado")
            return false;
        }
        if(datos.contra != contra){
            alert("Contraseña Incorrecta")
            return false;
        }

    location.assign("carrito_consolas.html");
    
}

function guardarBaseDatos(){
    localStorage.setItem("sistema-de-login",JSON.stringify(baseDeDatos))
}

function registro(event){

    event.preventDefault()

        let nombre = document.getElementById("regnombre").value;
        let usuario = document.getElementById("regusuario").value;
        let correo = document.getElementById("regcorreo").value;
        let contra = document.getElementById("regcontra").value;

        if(!nombre){
            alert("No hay Nombre")
            return false;
        }

        if(!correo){
            alert("No hay Correo")
            return false;
}

        if(!usuario){
            alert("No hay Usuario")
            return false;
        }

        if(!contra){
            alert("No hay Contraseña")
            return false;
        }
        
        baseDeDatos[correo] = {}
        baseDeDatos[correo].nombre = nombre
        baseDeDatos[correo].usuario = usuario
        baseDeDatos[correo].contra = contra
        baseDeDatos[correo].correo = correo
        baseDeDatos[correo].log = 0
        guardarBaseDatos()
        
        alert("Usuario Registrado :3")
        location.reload();
}
