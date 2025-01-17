//ARRAY DE OBJETOS

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
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "2022/11/30",
        termino: "2023/01/30",
        numAlunos: 150,
        periodo: "Noturno",
        concluida: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "2022/10/30",
        termino: "2022/12/30",
        numAlunos: 200,
        periodo: "Integral",
        concluida: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "2022/09/15",
        termino: "2022/10/15",
        numAlunos: 180,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "2022/11/01",
        termino: "2022/12/01",
        numAlunos: 80,
        periodo: "Integral",
        concluida: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "2022/07/04",
        termino: "2022/08/04",
        numAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Blackwell",
        curso: "APIs Rest",
        inicio: "2022/03/20",
        termino: "2022/09/20",
        numAlunos: 100,
        periodo: "Integral",
        concluida: true
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "2022/01/12",
        termino: "2022/07/12",
        numAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "2022/10/18",
        termino: "2023/04/18",
        numAlunos: 90,
        periodo: "Integral",
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

//-------------------------------
//BUSCAR TURMA
//-------------------------------

const buscarTurma = () => {

    const inputTurma = document.getElementById('buscar-box').value.toLowerCase()

    const filtrarTurma = turmas.filter(turmaProcurada => turmaProcurada.turma.toLowerCase().includes(inputTurma))// filtra o nome da turma e coloca dentro da variavel filtrar turma, essa variavel vira um array com o resultado

    //se o tamanho do array for maior que zero entao retorna  a variavel filtrarTurma, se nao achar, retorna turma nao encontrada
    filtrarTurma.length > 0 ? gerarCard(filtrarTurma) : gerarCard(turmas)


    document.getElementById('buscar-box').value = ""

    return filtrarTurma

}


//--------------------------------
//FUNCAO MATRICULAR
//--------------------------------

const matricular = () => {

    let nome = document.getElementById('nome-box-matricular').value
    let curso = document.getElementById('selecionar-curso').value
    let turma = document.getElementById('selecionar-turma').value
    let nParcelas = document.getElementById('nparcela-box-matricular').value
    let matricula = document.getElementById('section-aluno-matriculado')

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

    const divMatricular = `<div class="aluno-matriculado-h1">
                <h1> Aluno Matriculado </h1>
                <img src="./imagens/Vector.png">
            </div>
            <div class="aluno-matriculado">
                <p>Aluno Matriculado</p>
                <p>Nome: ${nome}</p>
                <p>Curso: ${curso}</p>
                <p>Turma: ${turma}</p>
            </div>`



    document.getElementById('nome-box-matricular').value = ""
    document.getElementById('selecionar-curso').value = ""
    document.getElementById('selecionar-turma').value = ""
    document.getElementById('nparcela-box-matricular').value = ""

    return matricula.innerHTML = divMatricular

}

//---------------------------------
//FUNCAO ALTERAR CURSO DA MATRICULA
//---------------------------------

const alterarCurso = () => {
    let selecionarCurso = document.getElementById('selecionar-curso')
    let turma = document.getElementById('selecionar-turma')

    if (selecionarCurso.value === "HTML e CSS") {
        return turma.innerHTML = "<option>Curie</option><option>Zhenyi</option><option>Clarke</option>"
    } else if (selecionarCurso.value === "JavaScript") {
        return turma.innerHTML = "<option>Hipática</option><option>Sibyla</option>"
    } else {
        return turma.innerHTML = "<option>Blackwell</option><option>Elion</option><option>Burnell</option>"
    }

}

//-------------------------------
//BUSCAR CURSO
//-------------------------------


const buscarCurso = () => {

    const inputCurso = document.getElementById('curso-box-financeiro').value.toLowerCase()

    let procurar = cursos.find(procurar => procurar.curso.toLowerCase().includes(inputCurso))

    if (procurar) {
        return procurar
    } else {
        return 'Curso nao encontrado'
    }

    //outros metodos de busca
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

//-------------------------------
//FUNCAO CARRINHO CURSOS
//-------------------------------

let carrinhoCursos = []

const adicionarCarrinho = (funcaoBuscarCurso) => {
    const addIcon = document.querySelector('.check-icon')

    addIcon.innerHTML = `<img class="carrinho-icon" src="./imagens/Vector.png">`

    const valorCurso = funcaoBuscarCurso.valor
    carrinhoCursos.push(valorCurso)
    return carrinhoCursos
}

//-----------------------------
//FUNCAO PARCELAR CURSO COMPLETA
//-----------------------------

const parcelarCurso = () => {

    let nParcelas = Number(document.getElementById('nparcela-box-financeiro').value)

    let mostrarValor = document.getElementById('mostrar-valor')

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
            mostrarValor.innerHTML = 'Quantidade de cursos inválido'
    }

    if (nParcelas < 3 && nParcelas > 0) {//desconto pela quantidade de parcelas
        desconto += 0.2
        valorDesconto = valorTotal - (valorTotal * desconto)

        mostrarValor.innerHTML = `<h1>Valor</h1>
        <p>O curso selecionado foi ${document.getElementById('curso-box-financeiro').value}.O valor do pagamento é de R$${valorDesconto.toFixed(2)} com 20% de desconto, parcelado em ${nParcelas} de R$${(valorDesconto / nParcelas).toFixed(2)}</p>`

    } else if (nParcelas > 2 && nParcelas < 13) {
        valorDesconto = valorTotal - (valorTotal * desconto)

        mostrarValor.innerHTML = `<h1>Valor</h1>
        <p>O curso selecionado foi ${document.getElementById('curso-box-financeiro').value}.O valor do pagamento é de R$${valorDesconto.toFixed(2)}, parcelado em ${nParcelas} de R$${(valorDesconto / nParcelas).toFixed(2)}</p>`

    } else {
        mostrarValor.innerHTML = `<p>Quantidade de parcelas inválido</p>`
    }

    //limpar campos

    carrinhoCursos = []

    document.getElementById('nparcela-box-financeiro').value = ""

    document.getElementById('curso-box-financeiro').value = "Selecione o curso"

    //remover check-icon
    let remover = document.querySelector(".carrinho-icon")

    remover.remove()

}

//-------------------------------
//BUSCAR ESTUDANTE
//-------------------------------
const buscarEstudante = () => {

    let inputEstudante = document.getElementById('nome-box-relatorio').value.toLowerCase()

    let procurar = estudantes.find(procurar => procurar.estudante.toLowerCase().includes(inputEstudante))

    if (procurar) {
        return procurar
    } else {
        document.getElementById('nome-box-relatorio').value = ""

        document.getElementById('relatorio-aluno').innerHTML = `<p>Aluno não cadastrado </p>`
    }

    //usando for para procurar estudante
    /* for (i = 0; i < estudantes.length; i++) {
        if (estudantes[i].estudante.toLowerCase().includes(inputEstudante) !== false) {
            return estudantes[i]
        }
    }

    document.getElementById('relatorio-aluno').innerHTML = `<p>Aluno não cadastrado </p>` */
}

//--------------------------------
//FUNCAO RELATORIO ESTUDANTE
//--------------------------------

const relatorioEstudante = (funcaoBuscarEstudante) => {

    let inputEstudante = document.getElementById('nome-box-relatorio').value.toLowerCase()

    let relatorioAluno = document.getElementById('relatorio-aluno')

    if (inputEstudante === "") {

        relatorioAluno.innerHTML = `<p>Aluno não cadastrado </p>`

    } else {
        document.getElementById('nome-box-relatorio').value = ""

        relatorioAluno.innerHTML = `<p>Aluno: ${funcaoBuscarEstudante.estudante}</p><p>Turma: ${funcaoBuscarEstudante.turma}</p><p>Curso: ${funcaoBuscarEstudante.curso}</p><p>Valor Total: ${funcaoBuscarEstudante.valor}</p><p>Valor Parcela: ${funcaoBuscarEstudante.parcelas}</p><p>Numero de Parcelas: ${funcaoBuscarEstudante.nParcelas}`
    }



}

//--------------------------------
//FUNCAO GERAR CARD E GRID
//--------------------------------

function criarGridTurma() {
    let resultado = ''

    const gridTurma = document.getElementById('grid-turmas')
    const turma = document.getElementById('buscar-box').value

    if (!turma) {
        resultado = turmas
    } else {
        resultado = buscarTurma(turma)
    }

    gridTurma.innerHTML = resultado.map((elemento) => {
        return gerarCard(elemento.turma, elemento.curso, elemento.inicio, elemento.termino, elemento.numAlunos, elemento.periodo, elemento.concluida)
    }).join('')

}

function gerarCard(turma, curso, inicio, termino, numAlunos, periodo, concluido) {

    return `
            <div class="div-turmas">
                <h1>${turma}</h1>
                <p >Curso: <span>${curso}</p>
                <p >Inicio: ${inicio}</p>
                <p >Término: ${termino}</p>
                <p >Número de Alunos: ${numAlunos}</p>
                <p class='card-caption'>Período: ${periodo}</p>
                <p >Concluído: ${concluido ? "Sim" : "Não"}</p>
            </div>
        `

}

//--------------------------------
//RESPONSIVIDADE
//--------------------------------

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "./imagens/menu-icon-button-7.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./imagens/menu-icon-button-click.png"
    }
}

//--------------------------------
//OUTROS
//--------------------------------


//ativando botao com o ENTER
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const btnBuscarTurma = document.querySelector("#botao-buscar-turma")

        btnBuscarTurma.click();
    }
})


