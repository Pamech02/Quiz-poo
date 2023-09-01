

export class Quiz {

    questionIndex = 0;
    playerScore= 0;
    constructor(questions){
        this.questions = questions
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }

    isEnded(){
        return this.questions.length === this.questionIndex
    }

    guess(answer){
        console.log(answer)
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.playerScore++
        }
        this.questionIndex++;
    }
}