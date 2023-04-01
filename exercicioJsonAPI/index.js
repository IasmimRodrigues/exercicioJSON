async function buscarJSON(){
    const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    const names = await response.json();
    return names;
}
async function mostrarEstados(){
    let divMostrar = document.getElementById('mostrar');
    let dados = await buscarJSON();
    dados.map((estado)=>{
            divMostrar.innerHTML += `<li> ${estado.nome}</li>`
        })
};

async function agruparEstados() {
    let divMostrar = document.getElementById('mostrar');
    let dados = await buscarJSON();

    let regioesEstados = new Map();
    dados.forEach((estado) => {
        let regiao = estado.regiao.nome;
            if (!regioesEstados.has(regiao)) {
                regioesEstados.set (regiao, []);
            }
            regioesEstados.get(regiao).push(estado);
    });
           regioesEstados.forEach((estados, regiao) => {
            let estadosRegioes = estados.map((estado) => estado.nome);
            divMostrar.innerHTML += `<p><b>${regiao}:</b> ${estadosRegioes}<p>`;
           });
}

async function nomeEstado() {
    let uf = document.getElementById('uf').value.toUpperCase();
    if (uf.length !== 2) {
        alert('UF inválida!');
        return;
    }

    let ufs = await buscarJSON();
    let estado = ufs.find((estado) => estado.sigla === uf);
    let mostrarDiv = document.getElementById('mostrar');
    mostrarDiv.innerHTML = estado.nome;
}