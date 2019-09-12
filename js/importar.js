botaoImportar.addEventListener("click",function(){
	console.log(carimbo()+"Buscando dados JSON...");
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
	
	xhr.addEventListener("load",function(){
		if (xhr.status == 200){
			
				botaoImportar.classList.remove("blinkOn");
				botaoImportar.classList.add("blinkOff");
			var response = xhr.responseText;
			var pacientesJson = JSON.parse(response);

			pacientesJson.forEach(function(json){
				var pessoaImport = {
					Nome:json.nome,
					Peso: json.peso,
					Altura: json.altura,
					Gordura: json.gordura,
					Imc:CalcImc(json.peso,json.altura)
				}
					incluiPaciente(pessoaImport);
			});
			
			console.log(carimbo()+ "Finish");
			
		}else{
					// setTimeout(function(){
						// botaoImportar.classList.remove("blinkOff");
						// botaoImportar.classList.add("blinkOn");
					// },300);
					// setTimeout(function(){
						// botaoImportar.classList.remove("blinkOn");
						// botaoImportar.classList.add("blinkOff");
					// },300);
				errocontd.textContent="Erro "+xhr.status+" ao tentar recuperar dados"
				console.log(carimbo()+"Erro");
				console.log(xhr.status);
				console.log(xhr.responseText);	
		}
	});
	
	xhr.send();
	
	//
});