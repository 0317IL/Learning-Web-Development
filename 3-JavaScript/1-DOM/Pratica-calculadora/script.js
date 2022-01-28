function calcular(tipo, valor){
	if(tipo === 'acao'){
		if(valor === 'c'){
			//Limpeza do visor 
			document.getElementById('resultado').value = ''
		}

		if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
			document.getElementById('resultado').value += valor
		}

		if(valor === '='){
			//eval() utilizar do valor string como uma expressao matematica
			var valor_visor = eval(document.getElementById('resultado').value)
			document.getElementById('resultado').value = valor_visor
		}
	}else if(tipo === 'valor'){
		document.getElementById('resultado').value += valor
	}
}