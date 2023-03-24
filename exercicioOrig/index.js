fetch("index.json")

.then(function(dados) {
    return dados.json();
})

.then(function(alunos){
    let placeholder = document.querySelector("#data-json");
    let out = "";

    for(let aluno of alunos) {
        out += `
            <tr>
                <td> ${aluno.nome}</td>
                <td> ${aluno.disciplina}</td>
                <td> ${aluno.media}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
     
    
})

