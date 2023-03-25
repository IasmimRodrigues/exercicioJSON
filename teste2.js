let table = document.querySelector('table');
let th = document.querySelector('th');

let requestJSON = './indexedDB.json';

let request = new XMLHttpRequest();

request.open(requestJSON);

request.responseType = 'json';
request.send();

request.onload = function() {
    let alunos = request.response;

    populateHeader(alunos);
    showHeroes(alunos);
}

function populateHeader(jsonObj) {
    let myTh = document.createElement('th');
    myTh.textContent = jsonObj['squadName'];
    Headers.appendChild(myTh);

}

