document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentQuestionIndex = 0;
    const totalQuestions = examData.questions.length;
    let userAnswers = new Array(totalQuestions).fill(null);
    let isSubmitted = false;

    // DOM Elements
    const elements = {
        title: document.getElementById('exam-title'),
        currentNum: document.getElementById('current-question-num'),
        totalNum: document.getElementById('total-questions-num'),
        progressBar: document.getElementById('progress-bar'),
        
        readingContainer: document.getElementById('reading-container'),
        readingTitle: document.getElementById('reading-title'),
        readingAuthor: document.getElementById('reading-author'),
        readingContent: document.getElementById('reading-content'),
        
        questionFadeTarget: document.getElementById('question-fade-target'),
        questionCategory: document.getElementById('question-category'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        
        btnPrev: document.getElementById('btn-prev'),
        btnNext: document.getElementById('btn-next'),
        btnSubmit: document.getElementById('btn-submit'),
        
        resultScreen: document.getElementById('result-screen'),
        resultScore: document.getElementById('result-score'),
        btnReview: document.getElementById('btn-review')
    };

    // Initialization
    function init() {
        elements.title.textContent = examData.title;
        elements.totalNum.textContent = totalQuestions;
        
        // Event Listeners
        elements.btnPrev.addEventListener('click', navigatePrev);
        elements.btnNext.addEventListener('click', navigateNext);
        elements.btnSubmit.addEventListener('click', submitExam);
        elements.btnReview.addEventListener('click', closeResultScreen);
        
        renderQuestion(currentQuestionIndex);
    }

    // Rendering
    function renderQuestion(index) {
        const question = examData.questions[index];
        
        // Update Progress
        elements.currentNum.textContent = index + 1;
        const progressPercentage = ((index + 1) / totalQuestions) * 100;
        elements.progressBar.style.width = `${progressPercentage}%`;

        // Update Reading Material
        if (question.textId && examData.texts[question.textId]) {
            const textData = examData.texts[question.textId];
            elements.readingTitle.textContent = textData.title;
            elements.readingAuthor.textContent = textData.author || '';
            elements.readingContent.innerHTML = textData.content;
            elements.readingContainer.classList.add('active');
        } else {
            elements.readingContainer.classList.remove('active');
        }

        // Trigger animation
        elements.questionFadeTarget.classList.remove('fade-in');
        void elements.questionFadeTarget.offsetWidth; // trigger reflow
        elements.questionFadeTarget.classList.add('fade-in');

        // Update Question
        elements.questionCategory.textContent = question.type;
        // Fix string interpolation bug in raw text where A: B: isn't handled correctly
        elements.questionText.textContent = `${question.id}. ${question.text}`;

        // Update Options
        elements.optionsContainer.innerHTML = '';
        question.options.forEach((optionStr, optionIndex) => {
            // Option string is like "A: something", extract letter and text
            const splitIndex = optionStr.indexOf(':');
            let letter = '';
            let text = optionStr;
            
            if (splitIndex !== -1) {
                letter = optionStr.substring(0, splitIndex).trim();
                text = optionStr.substring(splitIndex + 1).trim();
            } else {
                // Fallback for options without explicit letter
                const letters = ['A', 'B', 'C', 'D', 'E'];
                letter = letters[optionIndex];
            }

            const label = document.createElement('label');
            label.className = 'option-label';
            label.classList.add('fade-in');
            label.style.animationDelay = `${optionIndex * 0.1}s`;

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${question.id}`;
            input.value = letter;
            
            // Check if already answered
            if (userAnswers[index] === letter) {
                input.checked = true;
                label.classList.add('selected');
            }

            // Disable input if exam is submitted
            if (isSubmitted) {
                input.disabled = true;
                
                // Show correct/incorrect states
                if (letter === question.correctAnswer) {
                    label.classList.add('correct');
                } else if (userAnswers[index] === letter && letter !== question.correctAnswer) {
                    label.classList.add('incorrect');
                }
            } else {
                input.addEventListener('change', (e) => {
                    handleAnswerSelection(index, e.target.value);
                    
                    // Update visual styling of selected option
                    document.querySelectorAll('.option-label').forEach(lbl => lbl.classList.remove('selected'));
                    label.classList.add('selected');
                });
            }

            const customRadio = document.createElement('div');
            customRadio.className = 'custom-radio';

            const optionText = document.createElement('span');
            optionText.className = 'option-text';
            optionText.innerHTML = `<strong>${letter}</strong>: ${text}`;

            label.appendChild(input);
            label.appendChild(customRadio);
            label.appendChild(optionText);

            elements.optionsContainer.appendChild(label);
        });

        // Update Navigation Buttons
        elements.btnPrev.disabled = index === 0;
        
        if (index === totalQuestions - 1) {
            elements.btnNext.style.display = 'none';
            if (!isSubmitted) {
                elements.btnSubmit.style.display = 'flex';
            } else {
                elements.btnSubmit.style.display = 'none';
            }
        } else {
            elements.btnNext.style.display = 'flex';
            elements.btnSubmit.style.display = 'none';
        }
    }

    // Event Handlers
    function handleAnswerSelection(index, selectedLetter) {
        userAnswers[index] = selectedLetter;
    }

    function navigateNext() {
        if (currentQuestionIndex < totalQuestions - 1) {
            currentQuestionIndex++;
            renderQuestion(currentQuestionIndex);
        }
    }

    function navigatePrev() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion(currentQuestionIndex);
        }
    }

    function submitExam() {
        // Calculate Score
        let correctCount = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === examData.questions[index].correctAnswer) {
                correctCount++;
            }
        });

        isSubmitted = true;
        
        // Show Result Screen
        elements.resultScore.textContent = `${correctCount} / ${totalQuestions}`;
        elements.resultScreen.classList.add('active');
        
        // Render the current question again to show correct/incorrect styling
        renderQuestion(currentQuestionIndex);
    }

    function closeResultScreen() {
        elements.resultScreen.classList.remove('active');
        // Go back to the first question so user can review
        currentQuestionIndex = 0;
        renderQuestion(currentQuestionIndex);
    }

    // Start App
    init();
});
