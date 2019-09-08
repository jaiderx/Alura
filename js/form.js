var clientes = document.querySelectorAll(".linha-paciente");
var cont = clientes.length;

var botaoAdicionar = document.querySelector("#adicionar-paciente");
	
	botaoAdicionar.addEventListener("click",function(event){ //Botão Adicionar
	event.preventDefault();
	console.log(carimbo()+"Botão adicionar clicado");
	
	var form = document.querySelector("#formAdd");
	var Pessoa = importForm(form);
	
	if (!validaPessoa(Pessoa)){
		console.log("Paciente inválido");;
		alert("Paciente não cadastrado. Dados inválidos");
		var erro = document.querySelector("#msgerro");
			erro.textContent = "Dados Inválidos";
		return;
	}
	
	var imcCalc = CalcImc(Pessoa.Peso,Pessoa.Altura);
	var diag = Diagnostico(imcCalc);
	
	var tabela = document.querySelector("#tabela-pacientes");
	var pessoaTr = montaTr(Pessoa);
	tabela.appendChild(pessoaTr);	
	
	alert("Paciente inserido com sucesso! ");
	form.reset();
	
});

