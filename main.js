// Variáveis globais para saldo e total da compra
var saldo = 0;
var totalCompra = 0;

// Função para adicionar um produto à lista
function adicionarProduto() {
    // Obtém o saldo do input apenas uma vez
    if (saldo === 0) {
        saldo = Number(input_saldo.value);
    }

    const nomeProduto = input_nome_produto.value;
    const quantidade = Number(input_quantidade.value);
    const valorUnitario = Number(input_valor_unitario.value);

    // Verifica se todos os campos estão preenchidos corretamente
    if (!nomeProduto || quantidade <= 0 || valorUnitario <= 0) {
        alert("Preencha todos os campos corretamente!");
    } else {
        const valorTotalProduto = quantidade * valorUnitario;

        // Verifica se o saldo é suficiente para a compra do produto
        if (valorTotalProduto > saldo) {
            alert("Saldo insuficiente para comprar este produto!");
        } else {
            // Atualiza saldo e total da compra
            saldo -= valorTotalProduto;
            totalCompra += valorTotalProduto;

            // Atualiza o HTML
            const lista = listaProdutos; // Assume que listaProdutos é um UL ou OL
            const novoItem = document.createElement('li'); // Cria um novo item de lista
            novoItem.innerHTML = `${quantidade}x ${nomeProduto} - ${valorTotalProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            lista.appendChild(novoItem);

            // Atualiza os totais na tela
            totalCompraElement.innerText = totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            saldoRestanteElement.innerText = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            // Limpa os inputs para o próximo produto
            input_nome_produto.value = '';
            input_quantidade.value = '';
            input_valor_unitario.value = '';
        }
    }
}
