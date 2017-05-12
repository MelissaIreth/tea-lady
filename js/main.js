
function mostrarData(){
	var name = document.getElementById("name").value;
	var lastname = document.getElementById("lastname").value;
	var mail = document.getElementById("mail").value;
	var address = document.getElementById("address").value;
	var fono = document.getElementById("fono").value;
	var select = document.getElementById("select").value;
	var clientes = document.getElementById("clientes")

	if(name == ""){
		alert("Debes poner tu nombre");
		return false;
	}else if(lastname == ""){
		alert("Debes poner tu apellido");
		return false;
	}else if(mail == ""){
		alert("Debes poner tu correo");
		return false;
	}else if(address == ""){
		alert("Debes ingresar tu dirección");
		return false;
	}else if(fono == ""){
		alert("Debes ingresar tu numero de telefono");
		return false;
	}else if(select == ""){
		alert("Debes seleccionar una opción");
		return false;
	}else if(!document.getElementById("check").checked){
        alert("Recuerda! tenemos actividades y sorteos!");
        return false;
    }else{

clientes.innerHTML = "<br><br><br>Nombre: "+name+" "+lastname+"<br>Email: "+mail+"<br>Dirección: "+address+"<br>Telefono: "+fono+"<br>Selección: "+select+"<br><br><br>";

}
}