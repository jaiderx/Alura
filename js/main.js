tit1.textContent="Módulo IMC";
aba.textContent="Sistema Nutricionista";
console.log(carimbo()+tit1.textContent);

tgaga2.textContent = "Tabela de Pacientes";

//Busca todos os pacientes

for (var i=0; i<clientes.length; i++) { //varre cada um e faz a iteração do IMC	
		var pacientes = clientes[i];
		var Pessoa = importDoc(clientes,i);

		var validalt = validAlt(Pessoa.Altura);
		var validapes = validPes(Pessoa.Peso);
		
		if (validalt.Valid == false && validapes.Valid == false){ //Exibe Altura e Peso inválidos
			alert("Altura e peso do paciente "+Pessoa.Nome+" inválidos!");
			CorrigeAltura();
			CorrigePeso();
			validalt = validAlt(Pessoa.Altura);
			validapes = validPes(Pessoa.Peso);
			if (validalt.Valid == false && validapes.Valid == false){
				Pessoa.TdImc.textContent = "Erro Altura/Peso";
				pacientes.classList.add(validalt.Class);
				Pessoa.TdCond.textContent = "----";
			}
			else{
				Pessoa.TdImc.textContent = CalcImc(Pessoa.Peso,Pessoa.Altura);
			}
		}
		
		if (validalt.Valid == false && validapes.Valid == true){//Exibe Altura Inválida
			alert("Altura do paciente "+Pessoa.Nome+" inválida!");
			CorrigeAltura();
			validalt = validAlt(Pessoa.Altura);
			if (validalt.Valid == false && validapes.Valid == true) { 
				Pessoa.TdImc.textContent = validalt.Text;
				pacientes.classList.add(validalt.Class);
				Pessoa.TdCond.textContent = "----";
			}else{
				Pessoa.TdImc.textContent = CalcImc(Pessoa.Peso,Pessoa.Altura);
			}
		}
		if (validalt.Valid == true && validapes.Valid == false){ //Exibe Peso Inválido
			alert ("Peso do paciente "+Pessoa.Nome+" inválido!");
			CorrigePeso();
			validapes = validPes(Pessoa.Peso);
			if (validalt.Valid == true && validapes.Valid == false) {
				Pessoa.TdImc.textContent = validapes.Text;
				pacientes.classList.add(validapes.Class);
				Pessoa.TdCond.textContent = "----";
			}else{
				Pessoa.TdImc.textContent = CalcImc(Pessoa.Peso,Pessoa.Altura);
			}
		}
		if (validalt.Valid == true && validapes.Valid == true){ //Exibe cálculo IMC
				Pessoa.TdImc.textContent = CalcImc(Pessoa.Peso,Pessoa.Altura);
				Pessoa.TdImc.classList.add("calcImc");
		 }
		 
		var diag = Diagnostico(Pessoa.TdImc.textContent);
		if (Pessoa.TdCond.textContent != "----"){
			Pessoa.TdCond.textContent = diag.Cond;
			Pessoa.TdCond.classList.add(diag.Class);
		}
	}

