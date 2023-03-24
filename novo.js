fetch("novo.json")

.then(function(response) {
    return response.json();
})

.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";

    for(let product of products) {
        out += `
            <tr>
                <td> ${product.nome}</td>
                <td> ${product.disciplina}</td>
                <td> ${product.media}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
})