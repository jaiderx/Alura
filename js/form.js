	botaoAdicionar.addEventListener("click",function(event){ //Botão Adicionar
	event.preventDefault();
	console.log(carimbo()+"Botão adicionar clicado");
	
	var Pessoa = importForm(form);
	
	var erros = valida(Pessoa);	
	
	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		alert("Paciente não cadastrado. Dados inválidos");
    return;
	}	

	var imcCalc = CalcImc(Pessoa.peso,Pessoa.Altura);
	var diag = Diagnostico(imcCalc);

	incluiPaciente(Pessoa);
	
	alert("Paciente inserido com sucesso! ");
	form.reset();
	ul.innerHTML="";
	
});

