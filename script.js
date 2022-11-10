//array de objetos
const cursos = [
    {curso: "HTML e CSS" ,
    descricao: "",
    duracao: "1 mes",
    valor: 500
    },
    {curso: "JavaScript" ,
    descricao: "",
    duracao: "2 meses",
    valor: 900
    },
    {curso: "ApisRest" ,
    descricao: "",
    duracao: "6 meses",
    valor: 2000
    }
]

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

//funcao de parcelamento de curso

const parcelarCurso = (parcela, cursoParcelar) =>{

    let procurar = cursos.find(procurar => procurar.curso === cursoParcelar)

    console.log(procurar)

    if (parcela <= 2 && parcela >=1) {
            let desconto = procurar.valor - (procurar.valor * 0.2)
            let descontoParcela = desconto / parcela
            return `O curso ${procurar.curso} ficou no valor total de R$${desconto}. Em ${parcela} de R$${descontoParcela.toFixed(2)} reais. Foi concedido desconto de 20%`
    }else if(parcela > 2 && parcela <= 12){
        let valorParcela = procurar.valor / parcela
        return `O curso ${procurar.curso} ficou no valor total de R$${cursos[0].valor}. Em ${parcela} de R$${valorParcela.toFixed(2)} reais.`
    }else{
        return `Numero de parcelas invalido`
    }
}

console.log(parcelarCurso(1, "JavaScript"))


//funcoes de buscar

/* const buscarCurso = (nomeCurso) =>{
/*     const buscarCurso = cursos.curso[0].find(element => element === nomeCurso)

} 

const buscarTurma = (nomeTurma) =>{
}

const buscarEstudante = (nomeEstudante) =>{
} 
*/

// funcao de matricular

/* const matricular = (nome, curso, turma, nParcelas) =>{
    const arrayEstudante = [nome, curso, turma, nParcelas]
    console.log(arrayEstudante)
} */

//console.log(buscarCurso("JavaScript"))
console.log(cursos)


