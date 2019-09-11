filtro.addEventListener("input",function(){
	var input = this.value;
	
	if(this.value.length>0){
	
	for (var i=0; i<clientes.length; i++) {
	var cliente = clientes[i];
	var tdnome = cliente.querySelector(".info-nome");
		var nome = tdnome.textContent;
		if (nome != this.value){
			cliente.classList.add("invisible");
		}else{
			cliente.classList.remove("invisible");
		}
		//event.target.remove();
	}
	}else{
		for (var i = 0; i< clientes.length; i++){
			var cliente = clientes[i];
			cliente.classList.remove("invisible");
		}
	}
	/*clientes.forEach(function(nome){
			let cliente = clientes.querySelector("info-nome");
			cliente.textContent = nome;
	});*/
});

// grid.addEventListener("dblclick",function(event){
	// event.target.parentNode.classList.add("fadeOut");

	// setTimeout(function(){
		// event.target.parentNode.remove();
	// },500);
// });


grid.addEventListener("click",function(event){
	console.log(event.target.textContent);
});
