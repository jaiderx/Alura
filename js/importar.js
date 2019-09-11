botaoImportar.addEventListener("click",function(){
	console.log("buscando...");
	
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
	
	xhr.addEventListener("load",function(){
		
		if (xhr.status == 200){
		console.log(xhr.status);
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
		
		}else{
			console.log("Erro");
		}
	});
	
	xhr.send();
	
	//
});