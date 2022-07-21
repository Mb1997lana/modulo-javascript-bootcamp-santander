const alunos = [
	{
		nome: 'Murilo',
		nota: 9,
		turma: '2-5',
	},
	{
		nome: 'Jessica',
		nota: 7,
		turma: '2-5',
	},
	{
		nome: 'Xeyevina',
		nota: 10,
		turma: '2-5',
	},
    {
		nome: 'Guilherme',
		nota: 5,
		turma: '2-5',
	},
    {
		nome: 'Rafael',
		nota: 3,
		turma: '2-5',
	},
    {
		nome: 'Jardel',
		nota: 4,
		turma: '2-5',
	},
    {
		nome: 'Caique',
		nota: 10,
		turma: '2-5',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));