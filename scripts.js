    function calculateResults() {
        const questions = document.querySelectorAll('.question');
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let allAnswered = true;

        questions.forEach((question) => {
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');
            if (selectedAnswer) {
                if (selectedAnswer.value === 'correct') {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                }
            } else {
                allAnswered = false;
            }
        });

        if (!allAnswered) {
            alert('Please answer all questions before submitting.');
            return;
        }

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Correct Answers: ${correctAnswers} <br>Wrong Answers: ${wrongAnswers}`;

        document.querySelector('button[onclick="calculateResults()"]').style.display = 'none';

        document.getElementById('retakeBtn').style.display = 'block';
    }

    function retakeQuiz() {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question) => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');
        if (selectedAnswer) {
            selectedAnswer.checked = false;
        }
    });
    const  resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    document.querySelector('button[onclick="calculateResults()"]').style.display = 'block';
    document.getElementById('retakeBtn').style.display = 'none';
    }
