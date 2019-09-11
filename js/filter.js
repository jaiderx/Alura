filtro.addEventListener("input",function(){
	var input = this.value;
	
	var clientes = document.querySelectorAll(".linha-paciente"); 
	if(this.value.length>0){
	
	for (var i=0; i<clientes.length; i++) {
	var cliente = clientes[i];
	var tdnome = cliente.querySelector(".info-nome");
		var nome = tdnome.textContent;
		var expressao = new RegExp(this.value,"i");
		if (!expressao.test(nome)){
			cliente.classList.add("invisible");
		}else{
			cliente.classList.remove("invisible");
		}
	}
	}else{
		for (var i = 0; i< clientes.length; i++){
			var cliente = clientes[i];
			cliente.classList.remove("invisible");
		}
	}

});

