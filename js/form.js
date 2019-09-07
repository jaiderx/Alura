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
	
	
	var tabela = document.querySelector("#tabela-pacientes");
	
		var insertLine = document.createElement("tr");
			var insCodData = document.createElement("td");
			var insNameData = document.createElement("td");
			var insPesoData = document.createElement("td");
			var insAltData = document.createElement("td");
			var insGordData = document.createElement("td");
			var tgimc = document.createElement("td");
			var insCondData = document.createElement("td");
	
	insCodData.textContent = cont+1;
	insNameData.textContent = Pessoa.Nome;
	insPesoData.textContent = Pessoa.Peso;
	insAltData.textContent = Pessoa.Altura;
	insGordData.textContent = Pessoa.Gordura;
	insertLine.classList.add("linha-paciente");
	tgimc.textContent = imcCalc;
	insCondData.textContent = diag.Cond;
	insCondData.classList.add(diag.Class);
	tgimc.classList.add("calcImc");
	alert("Paciente inserido com sucesso! ");
	
	
	
	tabela.appendChild(insertLine);	
	insertLine.appendChild(insCodData);
	insertLine.appendChild(insNameData);
	insertLine.appendChild(insPesoData);
	insertLine.appendChild(insAltData);
	insertLine.appendChild(insGordData);
	insertLine.appendChild(tgimc);
	insertLine.appendChild(insCondData);
})

function montaTr(Pessoa){
	
	var insertLine = document.createElement("tr");
		insertLine.classList.add("linha-paciente");
		
		
	var pesoTd = montaTd(Pessoa.Peso,"info-peso");
		
		
}

function montaTd(dado,classe){
	var td = document.createElement("td");
		td.textContent = dado;
		td.classList.add(classe);
		
	return 	td;
}
