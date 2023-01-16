//-----------------------------------------------------------------------
//----------------------------ARRAY DE OBJETOS---------------------------
//-----------------------------------------------------------------------

//CURSOS
const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "tem duração de 1 meses e possui o valor de 500 reais",
        duracao: "1 mes",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "tem duração de 2 meses e possui o valor de 900 reais",
        duracao: "2 meses",
        valor: 900
    },
    {
        curso: "ApisRest",
        descricao: "tem duração de 6 meses e possui o valor de 2000 reais",
        duracao: "6 meses",
        valor: 2000
    }
]


//TURMAS
const turmas = [
    {
        nome: "Hipátia",
        curso: "JavaScript",
        inicio: "2022/11/30",
        termino: "2023/01/30",
        numAlunos: 150,
        pediodo: "Noturno",
        concluida: false
    },
    {
        nome: "Sibyla",
        curso: "JavaScript",
        inicio: "2022/10/30",
        termino: "2022/12/30",
        numAlunos: 200,
        pediodo: "Integral",
        concluida: false
    },
    {
        nome: "Curie",
        curso: "HTML e CSS",
        inicio: "2022/09/15",
        termino: "2022/10/15",
        numAlunos: 180,
        pediodo: "Noturno",
        concluida: true
    },
    {
        nome: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "2022/11/01",
        termino: "2022/12/01",
        numAlunos: 80,
        pediodo: "Integral",
        concluida: false
    },
    {
        nome: "Clarke",
        curso: "HTML e CSS",
        inicio: "2022/07/04",
        termino: "2022/08/04",
        numAlunos: 200,
        pediodo: "Noturno",
        concluida: true
    },
    {
        nome: "Blackwell",
        curso: "APIs Rest",
        inicio: "2022/03/20",
        termino: "2022/09/20",
        numAlunos: 100,
        pediodo: "Integral",
        concluida: true
    },
    {
        nome: "Elion",
        curso: "APIsRest",
        inicio: "2022/01/12",
        termino: "2022/07/12",
        numAlunos: 200,
        pediodo: "Noturno",
        concluida: true
    },
    {
        nome: "Burnell",
        curso: "APIsRest",
        inicio: "2022/10/18",
        termino: "2023/04/18",
        numAlunos: 90,
        pediodo: "Integral",
        concluida: false
    }
]

//ESTUDANTES
const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipatica",
        curso: "JavaScript",
        valor: "900",
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Brunell",
        curso: "APIsRest",
        valor: "2000",
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500",
        nParcelas: 1,
        desconto: true,
        parcelas: 500
    }
]
//--------------------------------------------------------------------------
//----------------------------------FUNCOES---------------------------------
//--------------------------------------------------------------------------

//------------------------------FUNCAO BUSCAR----------------------------------

//USANDO WHILE

//BUSCAR CURSO
const buscarCurso = (nomeCurso) => {
    let procurar = cursos.find(procurar => procurar.curso.toLowerCase() === nomeCurso.toLowerCase())

    if (procurar) {
        return procurar
    } else {
        return 'Curso nao encontrado'
    }
    /*     for (i = 0; i < cursos.length; i++) {
            if (cursos[i].curso.toLocaleLowerCase() === nomeCurso) {
                return cursos[i]
            }
        }
    
        return 'Aluno nao encontrado'
    } */
    /*     for (i in cursos) {
            if (cursos[i].curso.toLowerCase() === nomeCurso.toLowerCase()) {
                return cursos[i]
            }
        }
    
        return 'Aluno nao encontrado' */
}

console.log(buscarCurso("html e css"))

//BUSCAR TURMA
const buscarTurma = (nomeTurma) => {
    const filtrarTurma = turmas.filter(turmaProcurada => turmaProcurada.nome.toLowerCase() === nomeTurma.toLowerCase())// filtra o nome da turma e coloca dentro da variavel filtrar turma, essa variavel vira um array com o resultado


    //se o tamanho do array for maior que zero entao retorna  a variavel filtrarTurma, se nao achar, retorna turma nao encontrada
    filtrarTurma.length > 0 ? console.log(filtrarTurma) : console.log('Turma nao encontrada')

}

buscarTurma("elion")

//BUSCAR ESTUDANTE
const buscarEstudante = (nomeEstudante) => {

    for (i = 0; i < estudantes.length; i++) {
        if (estudantes[i].estudante.toLowerCase().includes(nomeEstudante.toLowerCase()) !== false) {
            return estudantes[i]
        }
    }

    return 'Aluno nao encontrado'
}

console.log(buscarEstudante("halle"))


//-------------------------------FUNCAO MATRICULAR--------------------------------

const matricular = (nome, curso, turma, nParcelas) => {

    //valor do curso para o array do novo estudante usando while
    let i = 0

    while (curso !== cursos[i]["curso"]) {
        i++
    }

    let valorCurso = cursos[i].valor

    const novoEstudante = {
        estudante: nome,
        curso: curso,
        turma: turma,
        nParcelas: nParcelas,
        valor: valorCurso,
        desconto: (nParcelas <= 2 ? true : false),
        parcelas: (valorCurso / nParcelas)
    }

    estudantes.push(novoEstudante)

    console.log(`Aluno Matriculado:\nNome: ${novoEstudante.estudante}\nCurso: ${novoEstudante.curso}\nTurma: ${novoEstudante.turma}`)

}


matricular("Miguel Alves", "JavaScript", "Clarke", 2)
console.log(estudantes)

//----------------------------FUNCAO CARRINHO CURSOS-------------------------------

const carrinhoCursos = []

const adicionarCarrinho = (funcaoBuscarCurso) => {
    const valorCurso = funcaoBuscarCurso.valor
    carrinhoCursos.push(valorCurso)
    return carrinhoCursos
}

adicionarCarrinho(buscarCurso("javascript"))
adicionarCarrinho(buscarCurso("html e css"))
adicionarCarrinho(buscarCurso("apisrest"))

console.log(carrinhoCursos)

//-------------------------FUNCAO PARCELAR CURSO COMPLETA--------------------------
//USANDO IF + FOR + SWITCH CASE

const parcelarCurso = (nParcelas, carrinhoCursos) => {

    let desconto = 0
    let valorTotal = 0

    for (i = 0; i < carrinhoCursos.length; i++) {
        valorTotal += carrinhoCursos[i] //valor total do carrinho
    }

    switch (carrinhoCursos.length) { //desconto pela quantidade de cursos
        case 3:
            desconto = 0.15
            break
        case 2:
            desconto = 0.1
            break
        case 1:
            desconto = 0
            break
        default:
            console.log('Quantidade de cursos inválido')
            break
    }

    //console.log(valorTotal)

    if (nParcelas < 3 && nParcelas > 0) {//desconto pela quantidade de parcelas
        desconto += 0.2
        valorDesconto = valorTotal - (valorTotal * desconto)

        console.log(`O valor do pagamento é de R$${valorDesconto.toFixed(2)} com 20% de desconto, parcelado em ${nParcelas} de R$${(valorDesconto / nParcelas).toFixed(2)}`)

    } else if (nParcelas > 2) {
        valorDesconto = valorTotal - (valorTotal * desconto)

        console.log(`O valor do pagamento é de R$${valorDesconto.toFixed(2)}, parcelado em ${nParcelas} de R$${(valorDesconto / nParcelas).toFixed(2)}`)

    } else {
        console.log(`Quantidade de parcelas inválido`)
    }
}


parcelarCurso(2, carrinhoCursos)

//-------------------------------FUNCAO RELATORIO ESTUDANTE--------------------------------

const relatorioEstudante = (funcaoBuscarEstudante) => {
    return `Aluno: ${funcaoBuscarEstudante.estudante}\nTurma: ${funcaoBuscarEstudante.turma}\nCurso: ${funcaoBuscarEstudante.curso}\nValor Total: ${funcaoBuscarEstudante.valor}\nValor Parcela: ${funcaoBuscarEstudante.parcelas}\nNumero de Parcelas: ${funcaoBuscarEstudante.nParcelas}`
}

console.log(relatorioEstudante(buscarEstudante("halle berry")))



function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "./imagens/menu-icon-button-7.png"
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./imagens/menu-icon-button-click.png"
    }
}
