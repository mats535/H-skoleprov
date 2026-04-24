document.addEventListener('DOMContentLoaded', () => {
    // Application State
    const appState = {
        currentExamId: null,
        currentQuestionIndex: 0,
        examProgress: {} // { examId: { answers: [], isSubmitted: false, score: 0 } }
    };

    // Initialize progress for each exam
    examData.forEach(exam => {
        appState.examProgress[exam.id] = {
            answers: new Array(exam.questions.length).fill(null),
            isSubmitted: false,
            score: 0
        };
    });

    // DOM Elements
    const elements = {
        homeScreen: document.getElementById('home-screen'),
        provpassGrid: document.getElementById('provpass-grid'),
        examScreen: document.getElementById('exam-screen'),
        examHeader: document.getElementById('exam-header'),
        
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
        btnReview: document.getElementById('btn-review'),
        btnHome: document.getElementById('btn-home')
    };

    // Initialization
    function init() {
        renderHomeScreen();
        
        // Event Listeners
        elements.btnPrev.addEventListener('click', navigatePrev);
        elements.btnNext.addEventListener('click', navigateNext);
        elements.btnSubmit.addEventListener('click', submitExam);
        elements.btnReview.addEventListener('click', () => {
            elements.resultScreen.classList.remove('active');
            appState.currentQuestionIndex = 0;
            renderQuestion(appState.currentQuestionIndex);
        });
        elements.btnHome.addEventListener('click', () => {
            elements.resultScreen.classList.remove('active');
            showHomeScreen();
        });
    }

    // --- Home Screen Logic ---
    function renderHomeScreen() {
        elements.provpassGrid.innerHTML = '';
        examData.forEach(exam => {
            const progress = appState.examProgress[exam.id];
            const isCompleted = progress.isSubmitted;
            
            const card = document.createElement('div');
            card.className = 'provpass-card fade-in';
            card.onclick = () => startExam(exam.id);
            
            const badgeClass = isCompleted ? 'completed' : 'pending';
            const badgeText = isCompleted ? `${progress.score} / ${exam.questions.length} Rätt` : 'Ej startad';
            
            card.innerHTML = `
                <h2>${exam.title}</h2>
                <p>Tid: ${exam.totalTimeInMinutes} minuter</p>
                <span class="status-badge ${badgeClass}">${badgeText}</span>
            `;
            elements.provpassGrid.appendChild(card);
        });
    }

    function showHomeScreen() {
        elements.examScreen.style.display = 'none';
        elements.examHeader.style.display = 'none';
        elements.homeScreen.style.display = 'flex';
        renderHomeScreen();
    }

    // --- Exam Logic ---
    function startExam(examId) {
        appState.currentExamId = examId;
        appState.currentQuestionIndex = 0;
        
        elements.homeScreen.style.display = 'none';
        elements.examScreen.style.display = 'flex';
        elements.examHeader.style.display = 'flex';
        
        const exam = getActiveExam();
        elements.title.textContent = exam.title;
        elements.totalNum.textContent = exam.questions.length;
        
        renderQuestion(appState.currentQuestionIndex);
    }

    function getActiveExam() {
        return examData.find(e => e.id === appState.currentExamId);
    }

    function getActiveProgress() {
        return appState.examProgress[appState.currentExamId];
    }

    // Rendering Questions
    function renderQuestion(index) {
        const exam = getActiveExam();
        const progress = getActiveProgress();
        const question = exam.questions[index];
        const totalQs = exam.questions.length;
        
        // Update Progress
        elements.currentNum.textContent = index + 1;
        const progressPercentage = ((index + 1) / totalQs) * 100;
        elements.progressBar.style.width = `${progressPercentage}%`;

        // Update Reading Material (Handle both textId and textRef)
        const textKey = question.textId || question.textRef;
        if (textKey && exam.texts[textKey]) {
            const textData = exam.texts[textKey];
            elements.readingTitle.textContent = textData.title;
            elements.readingAuthor.textContent = textData.author || '';
            elements.readingContent.innerHTML = textData.content.replace(/\n/g, '<br>');
            elements.readingContainer.classList.add('active');
        } else {
            elements.readingContainer.classList.remove('active');
        }

        // Trigger animation
        elements.questionFadeTarget.classList.remove('fade-in');
        void elements.questionFadeTarget.offsetWidth; // trigger reflow
        elements.questionFadeTarget.classList.add('fade-in');

        // Update Question
        elements.questionCategory.textContent = question.category || question.type;
        // Text is already formatted as "X. text" in most cases, but we can ensure it
        let qText = question.text;
        if (!qText.startsWith(`${question.id}.`)) {
            qText = `${question.id}. ${qText}`;
        }
        elements.questionText.textContent = qText;

        // Update Options
        elements.optionsContainer.innerHTML = '';
        question.options.forEach((optionStr, optionIndex) => {
            // Parse option string (e.g., "A: slutfasen" or "A besked")
            const match = optionStr.match(/^([A-E])[:\s]+(.*)$/);
            let letter = '';
            let text = optionStr;
            
            if (match) {
                letter = match[1];
                text = match[2];
            } else {
                // Fallback
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
            
            const hasAnswered = progress.answers[index] !== null;

            // Check if already answered
            if (progress.answers[index] === letter) {
                input.checked = true;
                label.classList.add('selected');
            }

            // Disable input if already answered or exam is submitted
            if (hasAnswered || progress.isSubmitted) {
                input.disabled = true;
                
                // Show correct/incorrect states
                if (letter === question.correctAnswer) {
                    label.classList.add('correct');
                } else if (progress.answers[index] === letter && letter !== question.correctAnswer) {
                    label.classList.add('incorrect');
                }
            } else {
                input.addEventListener('change', (e) => {
                    handleAnswerSelection(index, e.target.value);
                    // Re-render question to immediately show feedback and lock options
                    renderQuestion(index);
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
        
        if (index === totalQs - 1) {
            elements.btnNext.style.display = 'none';
            if (!progress.isSubmitted) {
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
        const progress = getActiveProgress();
        progress.answers[index] = selectedLetter;
    }

    function navigateNext() {
        const exam = getActiveExam();
        if (appState.currentQuestionIndex < exam.questions.length - 1) {
            appState.currentQuestionIndex++;
            renderQuestion(appState.currentQuestionIndex);
        }
    }

    function navigatePrev() {
        if (appState.currentQuestionIndex > 0) {
            appState.currentQuestionIndex--;
            renderQuestion(appState.currentQuestionIndex);
        }
    }

    function submitExam() {
        const exam = getActiveExam();
        const progress = getActiveProgress();
        
        // Calculate Score
        let correctCount = 0;
        progress.answers.forEach((answer, index) => {
            if (answer === exam.questions[index].correctAnswer) {
                correctCount++;
            }
        });

        progress.isSubmitted = true;
        progress.score = correctCount;
        
        // Show Result Screen
        elements.resultScore.textContent = `${correctCount} / ${exam.questions.length}`;
        elements.resultScreen.classList.add('active');
        
        // Render the current question again to show correct/incorrect styling
        renderQuestion(appState.currentQuestionIndex);
    }

    // Start App
    init();
});
