let email = document.getElementById('email');
let msg = document.getElementById('mensagem');

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let disciplina = document.getElementById('disciplina').value;
    if (!validarNome(nome)) {
        msg.innerHTML = msg.innerHTML = 'O campo nome é obrigatório';
        return;
    } 
    const resultado = calcularMedia();
    if (resultado >= 7) {
        msg.innerHTML = `Parabéns! Você foi aprovado na disciplina ${disciplina}`;
    } else {
        msg.innerHTML = `Que pena! Você não foi aprovado na disciplina ${disciplina}`
    }
    // Alternativa: ternary operator
    // msg.innerHTML = resultado >= 7 ? `Parabéns! Você foi aprovado na disciplina ${disciplina}` : `Que pena! Você não foi aprovado na disciplina ${disciplina}`;
});

const validarNome = (nome) => {
    if (!nome || nome.trim().length === 0) {
        return false;
    } 
    return true; 
}

const calcularMedia = () => {
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    const notas = parseInt(nota1) + parseInt(nota2);
    const media = notas / 2;
    return media;
}