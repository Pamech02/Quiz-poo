export class UI{
    constructor(){
    }

    showQuestion(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text
    }

    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML='';
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.innerText = choices[i];
            button.className = 'button'
            button.addEventListener('click', ()=> callback(choices[i]))

            choicesContainer.append(button)
            
        }
    }

    showScore(score){
        const container = document.getElementById('quiz')
        const endHTML = `
        <h1>Resultados</h1>
        <h2>Tu puntuacion final: ${score}</h2>
        `;
        container.innerHTML = endHTML;
    }

    showProgress(currentIndex, total){
        const element = document.getElementById('progress')
        element.innerHTML = `Preguta ${currentIndex} de ${total}`
    }
}