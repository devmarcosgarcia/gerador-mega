let numeros = [0, 0, 0, 0, 0, 0]


function geraNumeros(){

    var opcaoAleatorio = window.document.getElementById('idAleatorio')
    var opcaoLinha = window.document.getElementById('idLinhas')

    limpa()
    
    if(opcaoAleatorio.checked == true){

        //console.log('modo aleatorio')

        aleatorios()

        naTela()

    }

    if(opcaoLinha.checked == true){

        //console.log('modo por linha')

        aleatoriosPorLinha()

        naTela()
    }

}

function limpa(){

    if(numeros[0] != 0){

        window.document.getElementsByTagName('div')[numeros[0]-1].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[1]-1].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[2]-1].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[3]-1].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[4]-1].style.backgroundColor = 'white' 
        window.document.getElementsByTagName('div')[numeros[5]-1].style.backgroundColor = 'white' 
    }

    
}

function aleatorios(){

    do{

        numerosAleatorios()

    }while(comparaNumeros() == false)




    function numerosAleatorios(){
    
        for (let index = 0; index < numeros.length; index++) {
            
            numeros [index] = Math.floor(Math.random() * (60 - 1 + 1) + 1) 
            
        }
        
    }



    function comparaNumeros(){
        
            
        if(numeros[0] == numeros[1] || numeros[0] == numeros[2] || numeros[0] == numeros[3] || numeros[0] == numeros[4] || numeros[0] == numeros[5]){

            return false

        }else if (numeros[1] == numeros[2] || numeros[1] == numeros[3] || numeros[1] == numeros[4] || numeros[1] == numeros[5]){
            
            return false

        }else if (numeros[2] == numeros[3] || numeros[2] == numeros[4] || numeros[2] == numeros[5]){
            
            return false

        }else if (numeros[3] == numeros[4] || numeros[3] == numeros[5]){
            
            return false

        }else if (numeros[4] == numeros[5]){
            
            return false

        }else{

            return true
        }
            
        
    }
    
}

function naTela(){
    
    window.document.getElementsByTagName('div')[numeros[0]-1].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[1]-1].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[2]-1].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[3]-1].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[4]-1].style.backgroundColor = 'red' 
    window.document.getElementsByTagName('div')[numeros[5]-1].style.backgroundColor = 'red'
}

function aleatoriosPorLinha(){
    
    numeros [0] = Math.floor(Math.random() * (10 - 1 + 1) +1) 
    numeros [1] = Math.floor(Math.random() * (20 - 11 + 1)) + 11
    numeros [2] = Math.floor(Math.random() * (30 - 21 + 1)) + 21
    numeros [3] = Math.floor(Math.random() * (40 - 31 + 1)) + 31
    numeros [4] = Math.floor(Math.random() * (50 - 41 + 1)) + 41
    numeros [5] = Math.floor(Math.random() * (60 - 50)) + 51  

    //console.log(numeros)

}

