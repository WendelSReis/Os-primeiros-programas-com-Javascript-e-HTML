<script>

	function pulaLinha() {

		document.write("<br>");
		document.write("<br>");
	}

	function mostra(frase) {

		document.write(frase);
		pulaLinha();
	}

	var vitorias = parseInt(prompt("Entre com o número de vitórias."));
	alert (vitorias * 3);

	var empates = parseInt(prompt("Entre com o número de empates"));

	var pontos = (vitorias * 3) + empates;

	mostra("Os pontos do seu time é: " + pontos);

	if(pontos > 28) {

    mostra("Seu time está melhor do que no ano passado.");
}   
    if(pontos < 28) {

    mostra("Seu time está pior do que no ano passado.");
}

    if(pontos == 28) {

    mostra("Seu time está igual igual ao ano passado.");

}

<script>
