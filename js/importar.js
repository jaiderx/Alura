botaoImportar.addEventListener("click",function(){
	console.log("buscando ok");
	
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
	
	xhr.addEventListener("load",function(){
		//console.log(xhr.responseText);
		var response = xhr.responseText;
		var pacientesJson = JSON.parse(response);
		console.log(pacientesJson);
		
		pacientesJson.forEach(function(Pessoa){
			var pessoaImport = {
				nome:Pessoa.nome,
				peso: Pessoa.peso,
				Altura: Pessoa.altura,
				Gordura: Pessoa.gordura,
				imc:CalcImc(Pessoa.peso,Pessoa.altura)
			}
				incluiPaciente(pessoaImport);
		});
		
	});
	
	xhr.send();
	
	//
});