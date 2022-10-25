let numeros = []

function limpa(){

    if(numeros.length != 0){

        window.document.getElementsByTagName('div')[numeros[0]].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[1]].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[2]].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[3]].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[4]].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[5]].style.backgroundColor = 'white' 
    }

    
}

function geraNumeros(){

    var opcaoAleatorio = window.document.getElementById('idAleatorio')
    var opcaoLinha = window.document.getElementById('idLinhas')
    
    if(opcaoAleatorio.checked == true){

        console.log('modo aleatorio')

        limpa()

        aleatorios()

        naTela()

    }

    if(opcaoLinha.checked == true){

        console.log('modo por linha')

        limpa()

        aleatoriosPorLinha()

        naTela()
    }
    
}

function naTela(){
    
    window.document.getElementsByTagName('div')[numeros[0]].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[1]].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[2]].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[3]].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[4]].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[5]].style.backgroundColor = 'red'
}

function aleatoriosPorLinha(){
    
    numeros [0] = Math.floor(Math.random() * (10 - 1 + 1) +1) 
    numeros [1] = Math.floor(Math.random() * (20 - 11 + 1)) + 11
    numeros [2] = Math.floor(Math.random() * (30 - 21 + 1)) + 21
    numeros [3] = Math.floor(Math.random() * (40 - 31 + 1)) + 31
    numeros [4] = Math.floor(Math.random() * (50 - 41 + 1)) + 41
    numeros [5] = Math.floor(Math.random() * (60 - 50)) + 51  

    console.log(numeros)

}
function aleatorios(){
    
    for (let index = 0; index < numeros.length; index++) {
        
        numeros [index] = Math.floor(Math.random() * (60 - 1 + 1) + 1) 
         
    }

    console.log(numeros)
}