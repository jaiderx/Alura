var tit1 = document.querySelector('.tit1');
var aba = document.querySelector('.nomeaba');

tit1.textContent="Módulo IMC";
aba.textContent="Sistema Nutricionista";
console.log(carimbo()+tit1.textContent);

var tgaga2 = document.querySelector('.aga2');
tgaga2.textContent = "Tabela de Pacientes";
tgaga2.style.textAlign = 'center';

//Busca todos os pacientes

for (var i=0; i<clientes.length; i++) { //varre cada um e faz a iteração do IMC	
		var pacientes = clientes[i];
		var Pessoa = importDoc(clientes,i);
		var altinvalida = validAltura(Pessoa.Altura);
		var pesoinv = validPeso(Pessoa.Peso);

		if (altinvalida == true && pesoinv == true){ //Exibe Altura e Peso inválidos
			alert("Altura e peso do paciente "+Pessoa.Nome+" inválidos!");
			CorrigeAltura();
			CorrigePeso();
			if (altinvalida == true && pesoinv == true){
				Pessoa.TdImc.textContent = "Erro Altura/Peso";
				pacientes.classList.add("erroAltPes");
				Pessoa.TdCond.textContent = "----";
			}
			else{
				Pessoa.TdImc.textContent = CalcImc(Pessoa.Peso,Pessoa.Altura);
			}
		}
		if (altinvalida == true && pesoinv == false){//Exibe Altura Inválida
			alert("Altura do paciente "+Pessoa.Nome+" inválida!");
			CorrigeAltura();
			if (altinvalida == true && pesoinv == false) { 
				Pessoa.TdImc.textContent = "Erro Altura";
				pacientes.classList.add("erroAltPes");
				Pessoa.TdCond.textContent = "----";
			}else{
				Pessoa.TdImc.textContent = CalcImc(Pessoa.Peso,Pessoa.Altura);
			}
		}
		if (altinvalida == false && pesoinv == true){ //Exibe Peso Inválido
			alert ("Peso do paciente "+Pessoa.Nome+" inválido!");
			CorrigePeso();
			if (altinvalida == false && pesoinv == true) {
				Pessoa.TdImc.textContent = "Erro Peso";
				pacientes.style.backgroundColor= "yellow";
				Pessoa.TdCond.textContent = "----";
			}else{
				Pessoa.TdImc.textContent = CalcImc(Pessoa.Peso,Pessoa.Altura);
			}
		}
		if (altinvalida == false && pesoinv == false){ //Exibe cálculo IMC
				Pessoa.TdImc.textContent = CalcImc(Pessoa.Peso,Pessoa.Altura);
				Pessoa.TdImc.classList.add("calcImc");
		 }
		 
		var diag = Diagnostico(Pessoa.TdImc.textContent);
		if (Pessoa.TdCond.textContent != "----"){
			Pessoa.TdCond.textContent = diag.Cond;
			Pessoa.TdCond.classList.add(diag.Class);
		}
	}





