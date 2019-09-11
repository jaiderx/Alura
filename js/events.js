grid.addEventListener("dblclick",function(event){ //Remover paciente
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		event.target.parentNode.remove();
	},500);
});

filtro.addEventListener("input",function(){
	var input = this.value;
	
	var clientes = document.querySelectorAll(".linha-paciente"); //Filtrar Paciente
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