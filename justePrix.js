let prix = document.querySelector('#prix')
let instruction = document.querySelector('#instructions')
let nbrChoisi;
let formulaire = document.querySelector('#formulaire')
let error = document.querySelector('small')
let button = document.querySelector('button')

let coup = 0

error.style.display = 'none';

let nbrRandom = Math.floor(Math.random()*1001)

function verifier(nbr){
    let instructions = document.createElement('div')
    
    if(nbr>nbrRandom){
        instructions.textContent = 'Le nombre  c\'est plus' 
        instructions.className = 'instructions plus'
        document.body.insertBefore(instruction,instructions)
    }else if(nbr<nbrRandom){
        instructions.textContent = 'Le nombre c\'est moins'
        instructions.className = 'instructions moins'
        document.body.insertBefore(instruction,instructions)

    }
    else{
        instructions.textContent = 'Bravo vous avez trouvé le just prix.....'
        instructions.className = 'instructions fini'
        document.body.insertBefore(instruction,instructions)

    }

}

prix.addEventListener('keyup',()=>{
    if(isNaN(prix.value)){
        error.style.display = 'block';
    }else{
        error.style.display = 'none';
    }
})

formulaire.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(isNaN(prix.value) || prix.value==''){
        prix.style.borderColor = 'red'
    }else{
        coup++
        prix.style.borderColor = 'silver'
        nbrChoisi = prix.value
        prix.value = ''
        verifier(nbrChoisi)
    }
})