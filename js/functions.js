function CorrigeAltura() {
  let txt;
  let corrigealtura = prompt("Altura do paciente "+Pessoa.Nome+" inválida! Corrija ou confirme: ",Pessoa.Altura);
  if (corrigealtura == null || corrigealtura == "") {
	txt = Pessoa.Altura;
  } else {
	txt = corrigealtura;
	Pessoa.Altura=txt;
  }
  Pessoa.TdAltura.textContent=txt;
}
	
function CorrigePeso() {
  let txt;
  let corrigepeso = prompt("Peso do paciente "+Pessoa.Nome+" inválido! Corrija ou confirme: ",Pessoa.Peso);
  if (corrigepeso == null || corrigepeso == "") {
	txt = Pessoa.Peso;
  } else {
	txt = corrigepeso;
	Pessoa.Peso = txt;
  }
  Pessoa.TdPeso.textContent=txt;
}

function Diagnostico(imc){
	if (imc < 16) { //Subnutrição
			var Condicao = {
				Cond: "Magreza Grau III",
				Class:"pesoSub"
			}
	}
	if (imc >= 16 && imc < 17) { //Subnutrição
			var Condicao = {
				Cond: "Magreza Grau II",
				Class:"pesoSub"
			}
	}
	if (imc >= 17 && imc < 18.5) { //Abaixo do peso
			var Condicao = {
				Cond: "Magreza Grau I",
				Class:"pesoBai"
			}
	}
	if (imc >= 18.5 && imc < 25) { //Peso Ideal
			var Condicao = {
				Cond: "Peso Ideal - Eutrofia",
				Class:"pesoNor"
			}
	}
	if (imc >= 25 && imc < 30) { //Sobrepeso
			var Condicao = {
				Cond: "Sobrepeso",
				Class:"pesoSob"
			}
	}
	if (imc >= 30 && imc < 35) { //Obesidade I
			var Condicao = {
				Cond: "Obesidade Grau I",
				Class:"pesoObe"
			}
	}
	if (imc >= 35 && imc < 40) { //Obesidade II Severa
			var Condicao = {
				Cond: "Obesidade Grau II (Severa)",
				Class:"pesoSev"
			}
	}
	if (imc >= 40) { //Obesidade III Morbida
			var Condicao = {
				Cond: "Obesidade Grau III (Mórbida)",
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

function valida(pessoa){
	var erros = [];
	var valalt = validAlt(pessoa.Altura);
	var valpes = validPes(pessoa.Peso);
	if (!valalt.Valid) erros.push(valalt.Text);
	if (!valpes.Valid) erros.push(valpes.Text);
	if (pessoa.Nome.length == 0) erros.push("Nome em branco");
	if (pessoa.Altura.length == 0) erros.push("Altura em branco");
	if (pessoa.Peso.length == 0) erros.push("Peso em branco");
	if (pessoa.Gordura.length == 0) erros.push("Percentual de gordura em branco");
	
	return erros;
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
				Text: "Altura inválida!",
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

function CalcImc(peso,altura){
	let calcimc;
	calcimc=(peso/(Math.pow(altura,2))).toFixed(2);
	return calcimc;
}

function montaTr(Pessoa){
	var insertRow = document.createElement("tr");
		insertRow.classList.add("linha-paciente");
		diag = Diagnostico(Pessoa.Imc);
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
		if (classeExt != null || classeExt != "") td.classList.add(classeExt);		
	return 	td;
}

function exibeMensagensDeErro(erros) {
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
    });
}
	
function incluiPaciente(Pessoa){
	var pessoaTr = montaTr(Pessoa);
	grid.appendChild(pessoaTr);	
}

