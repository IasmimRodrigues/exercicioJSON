fetch("index.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (alunos) {
    let placeholder = document.querySelector("#data-json");
    let out = "";

    for (let aluno of alunos) {
      out += `
            <tr>
                <td> ${aluno.nome}</td>
                <td> ${aluno.disciplina}</td>
                <td> ${aluno.media}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
  });

function ordenarNome() {
  alunos.sort((a, b) => a.nome.localeCompare(b.nome));

  alunos();
}

function ordenarNota() {
  alunos.sort((a, b) => b.media - a.media);

  alunos();
}

function calcularMedia() {
  let total = alunos.reduce((soma, aluno) => soma + aluno.media, 0);

  const media = total / alunos.length;

  alert(`A média das notas é ${media.toFixed(2)}`);
}
alunos();

botaoNome.addEventListener("click", ordenarNome);
botaoNota.addEventListener("click", ordenarNota);
botaoMedia.addEventListener("click", calcularMedia);
