function adicionarItem(id, vacina, data, dataProximaVacina) {
    // Obtém a referência do tbody da tabela
    var tabela = document.getElementById("minhaTabela").getElementsByTagName('tbody')[0];

    // Cria uma nova linha na tabela
    var novaLinha = tabela.insertRow();

    // Cria e adiciona as novas células na linha
    var celulaId = novaLinha.insertCell(0);
    var celulaVacina = novaLinha.insertCell(1);
    var celulaData = novaLinha.insertCell(2);
    var celulaDataProximaVacina = novaLinha.insertCell(3);

    // Adiciona os valores nas células
    celulaId.textContent = id;
    celulaVacina.textContent = vacina;
    celulaData.textContent = data;
    celulaDataProximaVacina.textContent = dataProximaVacina;
}
