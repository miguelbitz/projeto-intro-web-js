//-----------------------------------------------------------------------
//----------------------------ARRAY DE OBJETOS---------------------------
//-----------------------------------------------------------------------

//CURSOS
const cursos = [
    {curso: "HTML e CSS" ,
    descricao: "tem duração de 1 meses e possui o valor de 500 reais",
    duracao: "1 mes",
    valor: 500
    },
    {curso: "JavaScript" ,
    descricao: "tem duração de 2 meses e possui o valor de 900 reais",
    duracao: "2 meses",
    valor: 900
    },
    {curso: "ApisRest" ,
    descricao: "tem duração de 6 meses e possui o valor de 2000 reais",
    duracao: "6 meses",
    valor: 2000
    }
]


//TURMAS
const turmas = [
    {nome:"Hipátia",
    curso: "JavaScript" ,
    inicio: "2022/11/30",
    termino: "2023/01/30",
    numAlunos: 150,
    pediodo: "Noturno",
    concluida: false
    }, 
     {nome:"Sibyla",
     curso: "JavaScript" ,
     inicio: "2022/10/30",
     termino: "2022/12/30",
     numAlunos: 200,
     pediodo: "Integral",
     concluida: false
    }, 
    {nome: "Curie",
    curso: "HTML e CSS" ,
    inicio: "2022/09/15",
    termino: "2022/10/15",
    numAlunos: 180,
    pediodo: "Noturno",
    concluida: true
    }, 
    {nome: "Zhenyi",
    curso: "HTML e CSS" ,
    inicio: "2022/11/01",
    termino: "2022/12/01",
    numAlunos: 80,
    pediodo: "Integral",
    concluida: false
    }, 
    {nome: "Clarke",
    curso: "HTML e CSS" ,
    inicio: "2022/07/04",
    termino: "2022/08/04",
    numAlunos: 200,
    pediodo: "Noturno",
    concluida: true
    }, 
    {nome: "Blackwell",
    curso: "APIs Rest" ,
    inicio: "2022/03/20",
    termino: "2022/09/20",
    numAlunos: 100,
    pediodo: "Integral",
    concluida: true
    }, 
    {nome: "Elion",
    curso: "APIsRest" ,
    inicio: "2022/01/12",
    termino: "2022/07/12",
    numAlunos: 200,
    pediodo: "Noturno",
    concluida: true
    }, 
    {nome: "Burnell",
    curso: "APIsRest" ,
    inicio: "2022/10/18",
    termino: "2023/04/18",
    numAlunos: 90,
    pediodo: "Integral",
    concluida: false
    }
]

//ESTUDANTES
const estudantes = [
    {estudante: "Chris Evans",
    turma: "Hipatica",
    curso: "JavaScript",
    valor: "900",
    nParcelas: 9,
    desconto: false,
    parcelas: 100
    },
    {estudante: "Halle Berry",
    turma: "Brunell",
    curso: "APIsRest",
    valor: "2000",
    nParcelas: 4,
    desconto: false,
    parcelas: 500
    },
    {estudante: "Lashana Lynch",
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


//---------------------------FUNCAO PARCELAR CURSO--------------------------


// CONFORME DIZ NO PROJETO

const parcelarCurso = (parcela) =>{

    if (parcela <= 2 && parcela >=1) {
            let desconto = cursos[0].valor - (cursos[0].valor * 0.2)
            let descontoParcela = desconto / parcela
            return `O curso ${cursos[0].curso} ficou no valor total de R$${desconto}. Em ${parcela} de R$${descontoParcela.toFixed(2)} reais. Foi concedido desconto de 20%`
    }else if(parcela > 2 && parcela <= 12){
        let valorParcela = cursos[0].valor / parcela
        return `O curso ${cursos[0].curso} ficou no valor total de R$${cursos[0].valor}. Em ${parcela} de R$${valorParcela.toFixed(2)} reais.`
    }else{
        return `Número de parcelas inválido`
    }
}

//console.log(parcelarCurso(1))

//COM FIND

/* 
const parcelarCurso = (parcela, cursoParcelar) =>{

    let procurar = cursos.find(procurar => procurar.curso.toLowerCase() === cursoParcelar.toLowerCase())

    if (parcela <= 2 && parcela >=1) {
            let desconto = procurar.valor - (procurar.valor * 0.2)
            let descontoParcela = desconto / parcela
            return `O curso ${procurar.curso} ficou no valor total de R$${desconto}. Em ${parcela} de R$${descontoParcela.toFixed(2)} reais. Foi concedido desconto de 20%`
    }else if(parcela > 2 && parcela <= 12){
        let valorParcela = procurar.valor / parcela
        return `O curso ${procurar.curso} ficou no valor total de R$${cursos[0].valor}. Em ${parcela} de R$${valorParcela.toFixed(2)} reais.`
    }else{
        return `Número de parcelas inválido`
    }
}

console.log(parcelarCurso(1, "javascript"))
 */


//FUNCAO PARCELAR CURSO COM SWITCH

/*
//array do carrinho de cursos
const carrinhoCursos = [500, 900, 2000]

//valor carrinho com 1 curso
const valorTotalCarrinho1Curso = carrinhoCursos[0]

//valor carrinho com 2 cursos
const valorTotalCarrinho2Cursos = carrinhoCursos[0] + carrinhoCursos[1]

//valor carrinho com 3 cursos
const valorTotalCarrinho3Cursos = carrinhoCursos[0] + carrinhoCursos[1] + carrinhoCursos[2]

//valor carrinho com 3 cursos e desconto para quantidade
const valorDescontoCarrinho3Cursos = valorTotalCarrinho3Cursos - (valorTotalCarrinho3Cursos * 0.15)

//valor carrinho com 2 cursos e desconto para quantidade
const valorDescontoCarrinho2Cursos = valorTotalCarrinho2Cursos - (valorTotalCarrinho2Cursos * 0.10)

//valor carrinho com 3 cursos e desconto para quantidade + desconto pelo numero de parcelas
const valorDescontoCarrinho3CursosNumParcelas = valorDescontoCarrinho3Cursos - (valorTotalCarrinho3Cursos * 0.2)

//valor carrinho com 2 cursos e desconto para quantidade + desconto pelo numero de parcelas
const valorDescontoCarrinho2CursosNumParcelas = valorDescontoCarrinho2Cursos - (valorTotalCarrinho2Cursos * 0.2)

//valor carrinho com 1 curso e desconto pel numero de parcelas
const valorDescontoNumParcelas = carrinhoCursos[0] - (carrinhoCursos[0] * 0.20)

const parcelarCurso = (nParcelas, carrinhoCursos) =>{

    switch (valorTotalCarrinho3Cursos){
        case 3400:
            const valorDescontoCarrinho3CursosParcelas = valorDescontoCarrinho3Cursos / nParcelas
            const valorDescontoCarrinho3CursosParcelas2 = valorDescontoCarrinho3CursosNumParcelas / nParcelas
            if(carrinhoCursos.length == 3 && nParcelas <= 2){
                console.log(`O valor do pagamento é de R$${valorDescontoCarrinho3CursosNumParcelas.toFixed(2)} com 20% de desconto, parcelado em ${nParcelas} de R$${valorDescontoCarrinho3CursosParcelas2.toFixed(2)}`)
            }else if(carrinhoCursos.length == 3){
                console.log(`O valor do pagamento é de R$${valorDescontoCarrinho3Cursos.toFixed(2)} , parcelado em ${nParcelas} de R$${valorDescontoCarrinho3CursosParcelas.toFixed(2)}`)
            }
            break
        }

    switch (valorTotalCarrinho2Cursos){
        case 1400:
            const valorDescontoCarrinho2CursosParcelas = valorDescontoCarrinho2Cursos / nParcelas
            const valorDescontoCarrinho2CursosParcelas2 = valorDescontoCarrinho2CursosNumParcelas / nParcelas
            if(carrinhoCursos.length == 2 && nParcelas <= 2){
                console.log(`O valor do pagamento é de R$${valorDescontoCarrinho2CursosNumParcelas.toFixed(2)} com 20% de desconto, parcelado em ${nParcelas} de R$${valorDescontoCarrinho2CursosParcelas2.toFixed(2)}`)
            }else if(carrinhoCursos.length == 2){
                console.log(`O valor do pagamento é de R$${valorDescontoCarrinho2Cursos.toFixed(2)}, parcelado em ${nParcelas} de R$${valorDescontoCarrinho2CursosParcelas.toFixed(2)}`)
            }
            break
        
        case 2500:
            if(carrinhoCursos.length == 2 && nParcelas <= 2){
                console.log(`O valor do pagamento é de R$${valorDescontoCarrinho2CursosNumParcelas.toFixed(2)} com 20% de desconto, parcelado em ${nParcelas} de R$${valorDescontoCarrinho2CursosParcelas2.toFixed(2)}`)
            }else if(carrinhoCursos.length == 2){
                console.log(`O valor do pagamento é de R$${valorDescontoCarrinho2Cursos.toFixed(2)}, parcelado em ${nParcelas} de R$${valorDescontoCarrinho2CursosParcelas.toFixed(2)}`)
            }
            break
        case 2900:
            if(carrinhoCursos.length == 2 && nParcelas <= 2){
                console.log(`O valor do pagamento é de R$${valorDescontoCarrinho2CursosNumParcelas.toFixed(2)} com 20% de desconto, parcelado em ${nParcelas} de R$${valorDescontoCarrinho2CursosParcelas2.toFixed(2)}`)
            }else if(carrinhoCursos.length == 2){
                console.log(`O valor do pagamento é de R$${valorDescontoCarrinho2Cursos.toFixed(2)}, parcelado em ${nParcelas} de R$${valorDescontoCarrinho2CursosParcelas.toFixed(2)}`)
            }
            break
        }
        switch(valorTotalCarrinho1Curso){
            case 2000:
            case 900:
            case 500:
                const valorDescontoCarrinho1CursoParcelas = valorTotalCarrinho1Curso / nParcelas
                const valorDescontoCarrinho1CursosParcelas2 = valorDescontoNumParcelas / nParcelas
                if(carrinhoCursos.length == 1 && nParcelas <= 2){
                    console.log(`O valor do pagamento é de R$${valorDescontoNumParcelas.toFixed(2)} com 20% de desconto, parcelado em ${nParcelas} de R$${valorDescontoCarrinho1CursosParcelas2.toFixed(2)}`)
                }else if(carrinhoCursos.length == 1){
                    console.log(`O valor do pagamento é de R$${valorTotalCarrinho1Curso.toFixed(2)}, parcelado em ${nParcelas} de R$${valorDescontoCarrinho1CursoParcelas.toFixed(2)}`)
                }
            break
            default:
            console.log(`Valor ou numero de parcelas invalido`)
            break
        }
}

parcelarCurso(2, carrinhoCursos)
 */


//USANDO IF

/* 
const carrinhoCursos = [500, 900, 2000]

const parcelarCurso = (nParcelas, carrinhoCursos) =>{
    if(carrinhoCursos.length === 3 && nParcelas <= 2){//3 cursos com numero de parcelas menor que 2

        const valorTotalCarrinho3Cursos = carrinhoCursos[0] + carrinhoCursos[1] + carrinhoCursos[2]

        const valorDescontoCarrinho3CursosNumParcelas = valorTotalCarrinho3Cursos - (valorTotalCarrinho3Cursos * 0.15) - (valorTotalCarrinho3Cursos * 0.2)

        console.log(`O valor do pagamento é de R$${valorDescontoCarrinho3CursosNumParcelas} com 20% de desconto, parcelado em ${nParcelas} de R$${valorDescontoCarrinho3CursosNumParcelas / nParcelas}`)

    }else if(carrinhoCursos.length === 2 && nParcelas <= 2){// 2 cursos com numero de parcelas menor que 2

        const valorTotalCarrinho2Cursos = carrinhoCursos[0] + carrinhoCursos[1]

        const valorDescontoCarrinho2CursosNumParcelas = valorTotalCarrinho2Cursos - (valorTotalCarrinho2Cursos * 0.10) - (valorTotalCarrinho2Cursos * 0.2)

        console.log(`O valor do pagamento é de R$${valorDescontoCarrinho2CursosNumParcelas} com 20% de desconto, parcelado em ${nParcelas} de R$${valorDescontoCarrinho2CursosNumParcelas / nParcelas}`)

    }else if(carrinhoCursos.length == 3){//3 cursos com numero de parcelas maior que 2

        const valorTotalCarrinho3Cursos = carrinhoCursos[0] + carrinhoCursos[1] + carrinhoCursos[2]

        const valorDescontoCarrinho3Cursos = valorTotalCarrinho3Cursos - (valorTotalCarrinho3Cursos * 0.15)

        console.log(`O valor do pagamento é de R$${valorDescontoCarrinho3Cursos} , parcelado em ${nParcelas} de R$${valorDescontoNumParcelas / nParcelas}`)

    }else if(carrinhoCursos.length == 2){//2 cursos com numero de parcelas maior que 2

        const valorTotalCarrinho2Cursos = carrinhoCursos[0] + carrinhoCursos[1]

        const valorDescontoCarrinho2Cursos = valorTotalCarrinho2Cursos - (valorTotalCarrinho2Cursos * 0.10)

        console.log(`O valor do pagamento é de R$${valorDescontoCarrinho2Cursos}, parcelado em ${nParcelas} de R$${valorDescontoNumParcelas / nParcelas}`)

    }else if(nParcelas <= 2){//1 curso com numero de parcelas menor que 2

        const valorDescontoNumParcelas = carrinhoCursos[0] - (carrinhoCursos[0] * 0.20)

        console.log(`O valor do pagamento é de R$${valorDescontoNumParcelas} com 20% de desconto, parcelado em ${nParcelas} de R$${valorDescontoNumParcelas / nParcelas}`)

    }else{//1 curso com numero de parcelas maior que 2

        console.log(`O valor do pagamento é de R$${carrinhoCursos[0]} parcelado em ${nParcelas} de R$${carrinhoCursos[0] / nParcelas}`)

    }
}

parcelarCurso(2, carrinhoCursos)
 */



//---------------------------------FUNCAO BUSCAR------------------------------------

//USANDO WHILE

//BUSCAR CURSO
const buscarCurso = (nomeCurso) =>{
    
    let i = 0

    while(nomeCurso !== cursos[i]["curso"].toLowerCase()){
        i++
      }
      console.log(cursos[i])  
} 

buscarCurso("html e css")

//BUSCAR TURMA
const buscarTurma = (nomeTurma) =>{
    
    let i = 0

    while(nomeTurma !== turmas[i]["nome"]){
        i++
      }
      console.log(turmas[i])  
} 

buscarTurma("Hipátia")

//BUSCAR ESTUDANTE
const buscarEstudante = (nomeEstudante) =>{
    
    let i = 0

    while(nomeEstudante !== estudantes[i]["estudante"].toLowerCase()){
        i++
      }
      console.log(estudantes[i])  
} 

buscarEstudante("halle berry")


//USANDO FIND

//BUSCAR CURSO
/* 
const buscarCurso = (nomeCurso) =>{
    let procurarCurso = cursos.find(procurar => procurar.curso.toLowerCase() === nomeCurso.toLowerCase())

    if(procurarCurso){
        return procurarCurso
    }else{
        return `Curso ${nomeCurso} não existe`
    }
}

console.log(buscarCurso("javascript"))
 */

//BUSCAR TURMA
/*
const buscarTurma = (nomeTurma) =>{
    let procurarTurma = turmas.find(procurar => procurar.nome.toLowerCase() === nomeTurma.toLowerCase())

    if(procurarTurma){
        return procurarTurma
    }else{
        return `Turma ${nomeTurma} não existe`
    }
}
 */
//console.log(buscarTurma("curie"))

//BUSCAR ESTUDANTE
/* 
const buscarEstudante = (nomeEstudante) =>{
    let procurarEstudante = estudantes.find(procurar => procurar.estudante.toLowerCase() === nomeEstudante.toLowerCase())

    if(procurarEstudante){
        return procurarEstudante
    }else{
        return `Estudante ${nomeEstudante} não existe`
    }
}  */

//console.log(buscarEstudante("lashana lynch"))


//-------------------------------FUNCAO MATRICULAR--------------------------------

const matricular = (nome, curso, turma, nParcelas) =>{

    //----------------------------- LETRA MAIUSCULA-------------------------------
     //deixando primeira letra do nome em maiuscula
    const primeiraLetraNome = nome[0].toUpperCase()
    const restanteNome = nome.substring(1).toLowerCase()
    const nomePrimeiraMaiusculo =  primeiraLetraNome + restanteNome

    //deixando primeira letra do curso em maiuscula
    const primeiraLetraCurso = curso[0].toUpperCase()
    const restanteCurso = curso.substring(1).toLowerCase()
    const cursoPrimeiraMaiusculo =  primeiraLetraCurso + restanteCurso

    //deixando primeira letra da turma em maiuscula
    const primeiraLetraTurma = turma[0].toUpperCase()
    const restanteTurma = turma.substring(1).toLowerCase()
    const turmaPrimeiraMaiusculo =  primeiraLetraTurma + restanteTurma
    //------------------------------------------------------------

    //valor do curso para o array do novo estudante
    let procurarValor = cursos.find(procurar => procurar.curso.toLowerCase() === curso.toLowerCase())

    let valorCurso = procurarValor.valor

    //array novo estudante
    const novoEstudante = {
        estudante: nomePrimeiraMaiusculo,
        curso: cursoPrimeiraMaiusculo,
        turma: turmaPrimeiraMaiusculo,
        nParcelas: nParcelas,
        valor: valorCurso,
        desconto: (nParcelas <= 2 ? true : false),
        parcelas: (valorCurso / nParcelas)
    }
    
    estudantes.push(novoEstudante)

    console.log(`Aluno Matriculado:\nNome: ${novoEstudante.estudante}\nCurso: ${novoEstudante.curso}\nTurma: ${novoEstudante.turma}`)

}


matricular("miguel", "javascript", "clarke", 3)
console.log(estudantes)
