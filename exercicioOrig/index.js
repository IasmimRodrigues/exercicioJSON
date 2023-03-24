fetch("index.json")

.then(function(response) {
    return response.json();
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

let alunosObj = JSON.parse(alunos);

function ordenarNome() {
    alunos.sort((a, b) => 
    a.aluno.nome.localeCompare(b.nome));
  }

  function ordenarNota() {
    alunos.sort((a, b) =>
    b.media - a.media);

    exibirAlunos();
  }

  function calcularMedia() {
    let total = alunos.reduce((soma, aluno) => soma + aluno.media, 0);

    const media = total / alunos.length;
    
    
    alert(`A média das notas é ${media.toFixed(2)}`);

  }
  exibirAlunos();

  const botaoNome = document.getElementById("nome");
      const botaoNota = document.getElementById("nota");
      const botaoMedia = document.getElementById("media");
      
      botaoNome.addEventListener("click", ordenarNome);
      botaoNota.addEventListener("click", ordenarNota);
      botaoMedia.addEventListener("click", calcularMedia);