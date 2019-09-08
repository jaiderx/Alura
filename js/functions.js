var clientes = document.querySelectorAll(".linha-paciente");

function CorrigeAltura() {
  var txt;
  var corrigealtura = prompt("Altura do paciente "+Pessoa.Nome+" inválida! Corrija ou confirme: ",Pessoa.Altura);
  if (corrigealtura == null || corrigealtura == "") {
	txt = Pessoa.Altura;
  } else {
	txt = corrigealtura;
	Pessoa.Altura=txt;
  }
  Pessoa.TdAltura.textContent=txt;
}
	
function CorrigePeso() {
  var txt;
  var corrigepeso = prompt("Peso do paciente "+Pessoa.Nome+" inválido! Corrija ou confirme: ",Pessoa.Peso);
  if (corrigepeso == null || corrigepeso == "") {
	txt = Pessoa.Peso;
  } else {
	txt = corrigepeso;
	Pessoa.Peso = txt;
  }
  Pessoa.TdPeso.textContent=txt;
}

function Diagnostico(imc){
	if (imc < 17) { //Subnutrição
			Condicao = {
				Cond: "Subnutrição",
				Class:"pesoSub"
			}
	}
	if (imc >= 17 && imc < 18.5) { //Abaixo do peso
			Condicao = {
				Cond: "Abaixo do Peso",
				Class:"pesoBai"
			}
	}
	if (imc >= 18.5 && imc < 25) { //Peso Ideal
			Condicao = {
				Cond: "Peso Ideal",
				Class:"pesoNor"
			}
	}
	if (imc >= 25 && imc < 30) { //Sobrepeso
			Condicao = {
				Cond: "Sobrepeso",
				Class:"pesoSob"
			}
	}
	if (imc >= 30 && imc < 35) { //Obesidade I
			Condicao = {
				Cond: "Obesidade I",
				Class:"pesoObe"
			}
	}
	if (imc >= 35 && imc < 40) { //Obesidade II Severa
			Condicao = {
				Cond: "Obesidade II (Severa)",
				Class:"pesoSev"
			}
	}
	if (imc >= 40) { //Obesidade III Morbida
			Condicao = {
				Cond: "Obesidade III (Mórbida)",
				Class:"pesoMor"
			}
	}
	return Condicao
}

function carimbo(){
	let t = new Date();
	return ("0" + t.getHours()).slice(-2)+":"+("0" + t.getMinutes()).slice(-2)+":"+("0" + t.getSeconds()).slice(-2)+" - "
}

function importForm(form){ //importa dados formulário
	//var	tdcond = .querySelector(".info-cond");
	var Pessoa = {
		Nome:form.nome.value,
		Peso: form.peso.value,
		Altura: form.altura.value,
		Gordura: form.gordura.value,
		Imc: CalcImc(form.peso.value, form.altura.value)
	}
	return Pessoa;
}

function importDoc(clientes,i){	//importa dados HTML	
	var tdnome = clientes[i].querySelector(".info-nome");
	var	tdimc = clientes[i].querySelector(".imc-res");
	var	tdpeso = clientes[i].querySelector(".info-peso");
	var	tdaltura = clientes[i].querySelector(".info-altura");
	var	tdcond = clientes[i].querySelector(".info-cond");
	var	tdgord = clientes[i].querySelector(".info-gordura");

	var Pessoa = {
			Nome: tdnome.textContent,
			Peso: tdpeso.textContent,
			Altura: tdaltura.textContent,
			Gordura: tdgord.textContent,
			Imc: tdimc.textContent,
			Cond: tdcond.textContent,
			TdNome:tdnome,
			TdImc: tdimc,
			TdPeso: tdpeso,
			TdAltura: tdaltura,
			TdGord: tdgord,
			TdCond:tdcond
		}
	return Pessoa;
}

function validAlt(altura){//testa altura válida
		if (altura > 0.2 && altura < 2.5){
			var valida = {
				Valid: true,
				Text: altura,
				Class: ""
			}
		}else{
			var valida = {
				Valid: false,
				Text: "Erro Altura",
				Class: "erroAltPes"
			}
		}
	return valida
}

function validPes(peso){//testa peso válido
	if(peso > 1 && peso <400){
			var valida = {
				Valid: true,
				Text: peso,
				Class: ""
			}
		}else{
			var valida = {
				Valid: false,
				Text: "Erro Peso",
				Class: "erroAltPes"
			}
		}
	return valida
}

function validAltura(altura){//testa altura inválida
	if (altura > 0.2 && altura < 2.5){
	return false;
	}else{
		return true;
	}
}

function validPeso(peso){//testa Peso inválido
	if(peso > 1 && peso <400){
			return false;
		}else {
			return true;
		}
}
	
function clicTit(){ //pega cliques no título
	console.log("Título clicado");
}

function CalcImc(peso,altura){
	var calcimc;
	calcimc=(peso/(Math.pow(altura,2))).toFixed(2);
	return calcimc;
}

function montaTr(Pessoa){
	var insertRow = document.createElement("tr");
		insertRow.classList.add("linha-paciente");
		diag = Diagnostico(Pessoa.Imc);
		insertRow.appendChild(montaTd(cont+1,"info-cod"));
		insertRow.appendChild(montaTd(Pessoa.Nome,"info-nome"));
		insertRow.appendChild(montaTd(Pessoa.Peso,"info-peso"));
		insertRow.appendChild(montaTd(Pessoa.Altura,"info-altura"));
		insertRow.appendChild(montaTd(Pessoa.Gordura,"info-gordura"));
		insertRow.appendChild(montaTd(Pessoa.Imc,"imc-res","calcImc"));
		insertRow.appendChild(montaTd(diag.Cond,diag.Class,"info-cond"));
		return insertRow;
	}

function montaTd(dado,classe,classeExt){
	var td = document.createElement("td");
		td.textContent = dado;
		td.classList.add(classe);
		if (classeExt != null || classeExt != ""){
			td.classList.add(classeExt);		
		}
	return 	td;
}

