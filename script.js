// --- 1. QUIZ DATA (50 Questions) ---
// Structure: question, options (array), correct answer index (0-3)
const ALL_QUESTIONS = [
    { q: "What is the capital of France?", opts: ["Berlin", "Madrid", "Paris", "Rome"], a: 2 },
    { q: "Which programming language is often used for web development?", opts: ["Python", "Java", "C++", "JavaScript"], a: 3 },
    { q: "What is the largest planet in our solar system?", opts: ["Mars", "Jupiter", "Earth", "Saturn"], a: 1 },
    { q: "The process of converting code into machine instructions is called:", opts: ["Compiling", "Debugging", "Linking", "Executing"], a: 0 },
    { q: "What does HTML stand for?", opts: ["HyperText Markup Language", "High-Level Text Management", "Hyperlink and Text Management", "Home Tool Markup Language"], a: 0 },
    { q: "What is the main function of CSS?", opts: ["Data processing", "Database management", "Styling web pages", "Server-side logic"], a: 2 },
    { q: "Which element is used to insert a line break?", opts: ["<lb>", "<br>", "<break>", "<line>"], a: 1 },
    { q: "What is 7 divided by 0?", opts: ["0", "7", "1", "Undefined"], a: 3 },
    { q: "Which tag is used for an unordered list?", opts: ["<ol>", "<ul>", "<list>", "<li>"], a: 1 },
    { q: "In JavaScript, which keyword is used to declare a variable?", opts: ["var", "string", "variable", "int"], a: 0 },
    { q: "The brain of the computer is the:", opts: ["RAM", "Monitor", "CPU", "Motherboard"], a: 2 },
    { q: "What is the result of 2 + '2' in JavaScript?", opts: ["4", "22", "Error", "NaN"], a: 1 },
    { q: "Which data structure operates on a LIFO principle?", opts: ["Queue", "Stack", "Array", "Linked List"], a: 1 },
    { q: "What is a 'bug' in programming?", opts: ["A type of insect", "An error in the code", "A feature of a software", "A hardware component"], a: 1 },
    { q: "Which company developed the Android operating system?", opts: ["Apple", "Microsoft", "Google", "Samsung"], a: 2 },
    { q: "What is the purpose of a 'for' loop?", opts: ["To define a function", "To execute a block of code repeatedly", "To check a condition", "To declare a variable"], a: 1 },
    { q: "Which operator is used for strict equality in JavaScript?", opts: ["==", "=", "===", "!="], a: 2 },
    { q: "What does a Boolean variable represent?", opts: ["Text", "Numbers", "True or False", "Dates"], a: 2 },
    { q: "Which protocol is used to send email?", opts: ["HTTP", "FTP", "SMTP", "POP3"], a: 2 },
    { q: "What is a primary key in a database?", opts: ["A key to lock the data", "A column that uniquely identifies each row", "A key for data encryption", "A foreign key"], a: 1 },
    { q: "What is the binary representation of the decimal number 5?", opts: ["100", "011", "101", "110"], a: 2 },
    { q: "The full form of WAN is:", opts: ["Wireless Area Network", "World Access Network", "Wide Area Network", "Web Application Network"], a: 2 },
    { q: "What is recursion?", opts: ["A loop that never ends", "A function calling itself", "A method for debugging", "A type of data sorting"], a: 1 },
    { q: "Which software manages computer hardware and software resources?", opts: ["Application Software", "Utility Software", "Operating System", "Middleware"], a: 2 },
    { q: "Which of the following is an example of an input device?", opts: ["Printer", "Monitor", "Speaker", "Keyboard"], a: 3 },
    // 25 more similar questions for a total of 50
    { q: "What does SQL stand for?", opts: ["Structured Query Language", "Standard Question Language", "Simple Query Logic", "Sequential Unordered List"], a: 0 },
    { q: "What does the 'A' in ASCII stand for?", opts: ["American", "Algorithm", "Array", "Arithmetic"], a: 0 },
    { q: "Which programming paradigm focuses on 'objects'?", opts: ["Procedural", "Functional", "Object-Oriented", "Declarative"], a: 2 },
    { q: "In networking, what is a firewall?", opts: ["A physical barrier", "A network security system", "A type of browser", "A cable management tool"], a: 1 },
    { q: "What is the hexadecimal equivalent of decimal 10?", opts: ["A", "B", "10", "F"], a: 0 },
    { q: "Which command is used to add content to a git repository?", opts: ["git commit", "git push", "git pull", "git add"], a: 3 },
    { q: "What is polymorphism?", opts: ["Having many forms", "A single class", "Data hiding", "Code repetition"], a: 0 },
    { q: "What is a CDN?", opts: ["Content Delivery Network", "Code Development Node", "Central Data Normalization", "Computer Display Network"], a: 0 },
    { q: "Which CSS property controls the text size?", opts: ["text-size", "font-style", "font-weight", "font-size"], a: 3 },
    { q: "Which HTML tag is used to define a hyperlink?", opts: ["<link>", "<a>", "<href>", "<nav>"], a: 1 },
    { q: "What is the default port for HTTP?", opts: ["21", "80", "443", "23"], a: 1 },
    { q: "Which type of memory is volatile (loses data when power is off)?", opts: ["ROM", "Hard Disk", "RAM", "Flash Memory"], a: 2 },
    { q: "What is an algorithm?", opts: ["A computer program", "A step-by-step procedure to solve a problem", "A type of variable", "A database entry"], a: 1 },
    { q: "Which symbol denotes a class selector in CSS?", opts: [".", "#", "*", ">"], a: 0 },
    { q: "In JavaScript, what is a closure?", opts: ["A type of loop", "A function bundled with its lexical environment", "An error handling block", "A way to close the browser window"], a: 1 },
    { q: "What does LAN stand for?", opts: ["Local Access Network", "Large Area Network", "Local Area Network", "Light Access Node"], a: 2 },
    { q: "Which data type can store whole numbers?", opts: ["Float", "String", "Boolean", "Integer"], a: 3 },
    { q: "What is normalization in database design?", opts: ["Storing redundant data", "Organizing data to minimize redundancy", "Creating backups", "Encrypting data"], a: 1 },
    { q: "Which protocol is used to retrieve email?", opts: ["SMTP", "FTP", "POP3", "HTTP"], a: 2 },
    { q: "What is abstraction in OOP?", opts: ["Showing complex details", "Hiding complexity and showing essential information", "Data duplication", "Creating multiple instances"], a: 1 },
    { q: "What is a compiler?", opts: ["A program that executes code line by line", "A program that translates source code into machine code", "A text editor", "A debugging tool"], a: 1 },
    { q: "What is the purpose of the 'break' statement in a loop?", opts: ["To skip the current iteration", "To exit the loop entirely", "To continue to the next loop", "To pause the program"], a: 1 },
    { q: "Which programming language is interpreted?", opts: ["C", "C++", "Java", "Python"], a: 3 },
    { q: "What is a virtual machine?", opts: ["A physical computer", "An emulation of a computer system", "A type of network router", "A programming framework"], a: 1 },
    { q: "Which layer in the OSI model is responsible for routing?", opts: ["Application Layer", "Transport Layer", "Network Layer", "Data Link Layer"], a: 2 },
];

// --- 2. GLOBAL VARIABLES ---
const QUIZ_SIZE = 15; // The required number of questions for the quiz
let selectedQuestions = []; // Array to hold the 15 random questions
let currentQuestionIndex = 0;
let studentAnswers = []; // Array to store student's selected option index for each question
let studentName = '';
let studentClass = '';

// --- 3. DOM ELEMENT REFERENCES ---
const loginContainer = document.getElementById('login-container');
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');

const loginForm = document.getElementById('login-form');
const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

// --- 4. CORE FUNCTIONS ---

/**
 * Selects 15 random questions from the ALL_QUESTIONS array.
 */
function selectRandomQuestions() {
    // 1. Shuffle the array using the Fisher-Yates (Knuth) algorithm
    for (let i = ALL_QUESTIONS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ALL_QUESTIONS[i], ALL_QUESTIONS[j]] = [ALL_QUESTIONS[j], ALL_QUESTIONS[i]]; // Swap
    }
    // 2. Take the first QUIZ_SIZE (15) questions
    selectedQuestions = ALL_QUESTIONS.slice(0, QUIZ_SIZE);

    // 3. Initialize the studentAnswers array with null for skipped/unanswered state
    studentAnswers = new Array(QUIZ_SIZE).fill(null);
}

/**
 * Renders the current question and options to the screen.
 */
function renderQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    
    // Update question counter
    questionCounter.innerHTML = `Question **${currentQuestionIndex + 1}** of **${QUIZ_SIZE}**`;
    
    // Update question text
    questionText.textContent = `${currentQuestionIndex + 1}. ${question.q}`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';

    // Create and display new options
    question.opts.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="answer" value="${index}" 
                   ${studentAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
            ${option}
        `;
        optionsContainer.appendChild(label);
    });

    // Add event listeners to the new radio buttons to save the answer immediately
    optionsContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (event) => {
            studentAnswers[currentQuestionIndex] = parseInt(event.target.value);
        });
    });

    // Update button states
    updateNavigationButtons();
}

/**
 * Updates the disabled and hidden states of the navigation buttons.
 */
function updateNavigationButtons() {
    // 'Previous' button logic
    prevBtn.disabled = currentQuestionIndex === 0;

    // 'Next' button logic
    nextBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');
    if (currentQuestionIndex === QUIZ_SIZE - 1) {
        nextBtn.classList.add('hidden'); // Hide Next on the last question
        submitBtn.classList.remove('hidden'); // Show Submit on the last question
    }
}

/**
 * Calculates and displays the final score and statistics.
 */
function showResults() {
    let correctCount = 0;
    let attemptedCount = 0;
    
    // Calculate results
    for (let i = 0; i < QUIZ_SIZE; i++) {
        const studentAnswerIndex = studentAnswers[i];
        const correctAnswerIndex = selectedQuestions[i].a;
        
        if (studentAnswerIndex !== null) {
            attemptedCount++;
            if (studentAnswerIndex === correctAnswerIndex) {
                correctCount++;
            }
        }
    }

    const incorrectCount = attemptedCount - correctCount;
    const skippedCount = QUIZ_SIZE - attemptedCount;

    // Display alert at the top
    document.getElementById('final-alert').textContent = `Congratulations, ${studentName}! You have successfully completed the quiz.`;

    // Populate score details
    document.getElementById('score-name').textContent = studentName;
    document.getElementById('score-class').textContent = studentClass;
    document.getElementById('stats-attempted').textContent = attemptedCount;
    document.getElementById('stats-skipped').textContent = skippedCount;
    document.getElementById('stats-correct').textContent = correctCount;
    document.getElementById('stats-incorrect').textContent = incorrectCount;
    document.getElementById('final-score').textContent = correctCount;

    // Switch views
    quizContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
}


// --- 5. EVENT LISTENERS ---

// 5.1. Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get student details
    studentName = document.getElementById('student-name').value;
    studentClass = document.getElementById('student-class').value;

    // Switch view
    loginContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    
    // Set welcome message
    document.getElementById('welcome-message').textContent = `Welcome, ${studentName} (${studentClass})`;

    // Start the quiz
    selectRandomQuestions();
    currentQuestionIndex = 0;
    renderQuestion();
});

// 5.2. Next Button
nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < QUIZ_SIZE - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
});

// 5.3. Previous Button
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
});

// 5.4. Submit Button
submitBtn.addEventListener('click', () => {
    // Show a confirmation before submitting
    if (confirm("Are you sure you want to submit the quiz? You cannot change your answers after submission.")) {
        showResults();
    }
});