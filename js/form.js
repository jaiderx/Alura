var clientes = document.querySelectorAll(".linha-paciente");
var cont = clientes.length;

var botaoAdicionar = document.querySelector("#adicionar-paciente");
	
	botaoAdicionar.addEventListener("click",function(event){ //Botão Adicionar
	event.preventDefault();
	console.log(carimbo()+"Botão adicionar clicado");
	
	var form = document.querySelector("#formAdd");
	var Pessoa = importForm(form);
	
	var imcCalc = CalcImc(Pessoa.Peso,Pessoa.Altura);
	var diag = Diagnostico(imcCalc);
	
	var pessoaTr = montaTr(Pessoa);
	
	var tabela = document.querySelector("#tabela-pacientes");
				tabela.appendChild(pessoaTr);	
	
	alert("Paciente inserido com sucesso! ");
	form.reset();
	
	/*
		var insertLine = document.createElement("tr");
				tabela.appendChild(insertLine);	
			var insCodData = document.createElement("td");
				insertLine.appendChild(insCodData);
			var insNameData = document.createElement("td");
				insertLine.appendChild(insNameData);
			var insPesoData = document.createElement("td");
				insertLine.appendChild(insPesoData);
			var insAltData = document.createElement("td");
				insertLine.appendChild(insAltData);
			var insGordData = document.createElement("td");
				insertLine.appendChild(insGordData);
			var tgimc = document.createElement("td");
				insertLine.appendChild(tgimc);
			var insCondData = document.createElement("td");
				insertLine.appendChild(insCondData);
	
	insCodData.textContent = cont+1;
	insNameData.textContent = Pessoa.Nome;
	insPesoData.textContent = Pessoa.Peso;
	insAltData.textContent = Pessoa.Altura;
	insGordData.textContent = Pessoa.Gordura;
	tgimc.textContent = imcCalc;
	insCondData.textContent = diag.Cond;
	insCondData.classList.add(diag.Class);
	tgimc.classList.add("calcImc");
	*/
	
});

