// Variable Declarations

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const maxScoreSpan = document.getElementById("max-score");
const finalScoreSpan = document.getElementById("final-score")
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const timerText = document.getElementById("timer-text");
const timerCircle = document.querySelector(".timer-circle");

const quizQuestions = [
  {
    question: "Which of the following is a string data type in SQL?",
    answers: [
      { text: "VARCHAR", correct: true },
      { text: "INT", correct: false },
      { text: "DATE", correct: false },
      { text: "BOOLEAN", correct: false }
    ]
  },
  {
    question: "What's the best data type for storing monetary values?",
    answers: [
      { text: "DECIMAL", correct: true },
      { text: "INT", correct: false },
      { text: "FLOAT", correct: false },
      { text: "VARCHAR", correct: false }
    ]
  },
  {
    question: "Which data type stores only the date (no time)?",
    answers: [
      { text: "DATE", correct: true },
      { text: "DATETIME", correct: false },
      { text: "TIMESTAMP", correct: false },
      { text: "TIME", correct: false }
    ]
  },
  {
    question: "Which operator is used to filter records in a SELECT statement?",
    answers: [
      { text: "WHERE", correct: true },
      { text: "FILTER", correct: false },
      { text: "IF", correct: false },
      { text: "WHEN", correct: false }
    ]
  },
  {
    question: "What does this query do? `SELECT * FROM products WHERE price > 50;`",
    answers: [
      { text: "Selects products with price greater than 50", correct: true },
      { text: "Selects products with price equal to 50", correct: false },
      { text: "Selects products with price less than 50", correct: false },
      { text: "Updates products with price 50", correct: false }
    ]
  },
  {
    question: "Which operator is used to select values within a range?",
    answers: [
      { text: "BETWEEN", correct: true },
      { text: "IN", correct: false },
      { text: "RANGE", correct: false },
      { text: "FROM-TO", correct: false }
    ]
  },
  {
    question: "What does the `%` wildcard represent in a LIKE pattern?",
    answers: [
      { text: "Any number of characters (including zero)", correct: true },
      { text: "Exactly one character", correct: false },
      { text: "A percentage value", correct: false },
      { text: "A special character", correct: false }
    ]
  },
  {
    question: "Which query finds all customers whose name starts with 'A'?",
    answers: [
      { text: "SELECT * FROM customers WHERE name LIKE 'A%';", correct: true },
      { text: "SELECT * FROM customers WHERE name = 'A%';", correct: false },
      { text: "SELECT * FROM customers WHERE name LIKE '%A';", correct: false },
      { text: "SELECT * FROM customers WHERE name STARTS 'A';", correct: false }
    ]
  },
  {
    question: "What does this query do? `SELECT * FROM users WHERE email LIKE '%@gmail.com';`",
    answers: [
      { text: "Finds emails that end with @gmail.com", correct: true },
      { text: "Finds emails that start with @gmail.com", correct: false },
      { text: "Finds emails that contain @gmail.com anywhere", correct: false },
      { text: "Finds emails equal to @gmail.com", correct: false }
    ]
  },
  {
    question: "Which keyword sorts data from highest to lowest?",
    answers: [
      { text: "DESC", correct: true },
      { text: "ASC", correct: false },
      { text: "HIGH", correct: false },
      { text: "REVERSE", correct: false }
    ]
  },
  {
    question: "What does this query do? `SELECT * FROM products ORDER BY price DESC LIMIT 5;`",
    answers: [
      { text: "Selects the 5 most expensive products", correct: true },
      { text: "Selects the 5 cheapest products", correct: false },
      { text: "Selects 5 random products", correct: false },
      { text: "Selects products under $5", correct: false }
    ]
  },
  {
    question: "Which clause is used to group rows that have the same values?",
    answers: [
      { text: "GROUP BY", correct: true },
      { text: "COMBINE", correct: false },
      { text: "MERGE", correct: false },
      { text: "CLUSTER", correct: false }
    ]
  },
  {
    question: "What's the difference between WHERE and HAVING?",
    answers: [
      { text: "WHERE filters before grouping, HAVING filters after grouping", correct: true },
      { text: "They are the same", correct: false },
      { text: "WHERE is for numbers, HAVING is for text", correct: false },
      { text: "HAVING is faster than WHERE", correct: false }
    ]
  },
  {
    question: "Which clause limits the number of results returned?",
    answers: [
      { text: "LIMIT", correct: true },
      { text: "TOP", correct: false },
      { text: "MAX", correct: false },
      { text: "FIRST", correct: false }
    ]
  },
  {
    question: "What does `LIMIT 10` do?",
    answers: [
      { text: "Returns only the first 10 rows", correct: true },
      { text: "Limits values to a maximum of 10", correct: false },
      { text: "Returns only 10 columns", correct: false },
      { text: "Limits query execution to 10 seconds", correct: false }
    ]
  },
  {
    question: "What's the difference between `DELETE FROM table_name;` and `DROP TABLE table_name;`?",
    answers: [
      { text: "DELETE removes rows but keeps the table, DROP removes the entire table", correct: true },
      { text: "They do the same thing", correct: false },
      { text: "DELETE is faster than DROP", correct: false },
      { text: "DROP removes rows but keeps the table, DELETE removes the entire table", correct: false }
    ]
  },
  {
    question: "Which aggregate function calculates the average?",
    answers: [
      { text: "AVG()", correct: true },
      { text: "MEAN()", correct: false },
      { text: "AVERAGE()", correct: false },
      { text: "CALC()", correct: false }
    ]
  },
  {
    question: "What does the COUNT() function return?",
    answers: [
      { text: "The number of rows", correct: true },
      { text: "The sum of all values", correct: false },
      { text: "The average of all values", correct: false },
      { text: "The maximum value", correct: false }
    ]
  },
  {
    question: "Which function returns the smallest value?",
    answers: [
      { text: "MIN()", correct: true },
      { text: "SMALL()", correct: false },
      { text: "LEAST()", correct: false },
      { text: "BOTTOM()", correct: false }
    ]
  },
  {
    question: "Which function returns the largest value?",
    answers: [
      { text: "MAX()", correct: true },
      { text: "LARGE()", correct: false },
      { text: "TOP()", correct: false },
      { text: "BIGGEST()", correct: false }
    ]
  },
  {
    question: "How many required parameters does the mail() function have?",
    answers: [
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "4", correct: false }
    ]
  },
  {
    question: "What is the correct order of parameters for mail()?",
    answers: [
      { text: "mail($to, $subject, $message);", correct: true },
      { text: "mail($message, $to, $subject);", correct: false },
      { text: "mail($subject, $to, $message);", correct: false },
      { text: "mail($to, $message, $subject);", correct: false }
    ]
  },
  {
    question: "Which parameter of mail() is optional?",
    answers: [
      { text: "$headers", correct: true },
      { text: "$to", correct: false },
      { text: "$subject", correct: false },
      { text: "$message", correct: false }
    ]
  },
  {
    question: "What is a PHP session?",
    answers: [
      { text: "A way to store information across multiple pages", correct: true },
      { text: "A single page load", correct: false },
      { text: "A database connection", correct: false },
      { text: "A user's browser", correct: false }
    ]
  },
  {
    question: "Which function must be called before using sessions?",
    answers: [
      { text: "session_start()", correct: true },
      { text: "start_session()", correct: false },
      { text: "session_begin()", correct: false },
      { text: "init_session()", correct: false }
    ]
  },
  {
    question: "Where must session_start() be placed in your PHP code?",
    answers: [
      { text: "Before any HTML output", correct: true },
      { text: "Anywhere in the file", correct: false },
      { text: "After the </html> tag", correct: false },
      { text: "Only on the first page", correct: false }
    ]
  },
  {
    question: "What type of variable is $_SESSION?",
    answers: [
      { text: "Superglobal array", correct: true },
      { text: "Local variable", correct: false },
      { text: "Global variable", correct: false },
      { text: "Constant", correct: false }
    ]
  },
  {
    question: "How does PHP track which session belongs to which user?",
    answers: [
      { text: "Session ID (typically in a cookie)", correct: true },
      { text: "IP address only", correct: false },
      { text: "Browser type", correct: false },
      { text: "Username", correct: false }
    ]
  },
  {
    question: "Which is the correct way to check if a session variable exists?",
    answers: [
      { text: "if (isset($_SESSION['user']))", correct: true },
      { text: "if ($_SESSION['user'])", correct: false },
      { text: "if (exists($_SESSION['user']))", correct: false },
      { text: "if (defined($_SESSION['user']))", correct: false }
    ]
  },
  {
    question: "What does session_unset() do?",
    answers: [
      { text: "Removes all session variables", correct: true },
      { text: "Destroys the session completely", correct: false },
      { text: "Restarts the session", correct: false },
      { text: "Nothing", correct: false }
    ]
  },
  {
    question: "What's the difference between session_unset() and session_destroy()?",
    answers: [
      { text: "session_unset() removes variables, session_destroy() removes the session file", correct: true },
      { text: "They do the same thing", correct: false },
      { text: "session_unset() is faster", correct: false },
      { text: "session_destroy() only works on login pages", correct: false }
    ]
  },
  {
    question: "What should you do after a header() redirect?",
    answers: [
      { text: "Call exit() or die()", correct: true },
      { text: "Nothing special", correct: false },
      { text: "Call session_start()", correct: false },
      { text: "Wait 5 seconds", correct: false }
    ]
  },
  {
    question: "Which is a common session variable used to track if a user is logged in?",
    answers: [
      { text: "$_SESSION['user_id']", correct: true },
      { text: "$_SESSION['password']", correct: false },
      { text: "$_SESSION['database']", correct: false },
      { text: "$_SESSION['browser']", correct: false }
    ]
  },
  {
    question: "What should you do to protect a page from unauthorized access?",
    answers: [
      { text: "Check if session variables exist and redirect if not", correct: true },
      { text: "Use a password in the URL", correct: false },
      { text: "Hide the page", correct: false },
      { text: "Use JavaScript only", correct: false }
    ]
  },
  {
    question: "Which function should you use to hash passwords in PHP?",
    answers: [
      { text: "password_hash()", correct: true },
      { text: "md5()", correct: false },
      { text: "sha1()", correct: false },
      { text: "encrypt()", correct: false }
    ]
  },
  {
    question: "What does PASSWORD_DEFAULT refer to in password_hash()?",
    answers: [
      { text: "The currently recommended hashing algorithm", correct: true },
      { text: "A weak encryption", correct: false },
      { text: "No encryption", correct: false },
      { text: "Base64 encoding", correct: false }
    ]
  },
  {
    question: "Which function verifies a password against its hash?",
    answers: [
      { text: "password_verify()", correct: true },
      { text: "password_check()", correct: false },
      { text: "verify_password()", correct: false },
      { text: "check_hash()", correct: false }
    ]
  },
  {
    question: "Why is md5() NOT recommended for passwords?",
    answers: [
      { text: "It's too fast and cryptographically broken", correct: true },
      { text: "It's too slow", correct: false },
      { text: "It only works on Windows", correct: false },
      { text: "It requires special server configuration", correct: false }
    ]
  },
  {
    question: "What is SQL injection?",
    answers: [
      { text: "A security attack using malicious SQL code in input", correct: true },
      { text: "A way to speed up queries", correct: false },
      { text: "A method to backup databases", correct: false },
      { text: "A type of database", correct: false }
    ]
  },
  {
    question: "Which function helps prevent SQL injection in MySQL?",
    answers: [
      { text: "mysqli_real_escape_string()", correct: true },
      { text: "mysql_clean()", correct: false },
      { text: "sanitize_input()", correct: false },
      { text: "clean_sql()", correct: false }
    ]
  },
  {
    question: "What's the best way to prevent SQL injection?",
    answers: [
      { text: "Use prepared statements with parameterized queries", correct: true },
      { text: "Use CAPTCHA", correct: false },
      { text: "Block all user input", correct: false },
      { text: "Use only GET requests", correct: false }
    ]
  },
  {
    question: "Which is MORE secure?",
    answers: [
      { text: "$query = \"SELECT * FROM users WHERE id = \" . mysqli_real_escape_string($conn, $_POST['id']);", correct: true },
      { text: "$query = \"SELECT * FROM users WHERE id = \" . $_POST['id'];", correct: false }
    ]
  },
  {
    question: "What happens if you forget to call exit() after a header() redirect?",
    answers: [
      { text: "Code after the redirect might still execute", correct: true },
      { text: "Nothing", correct: false },
      { text: "The redirect won't work", correct: false },
      { text: "The session is destroyed", correct: false }
    ]
  },
  {
    question: "What does SQL stand for?",
    answers: [
      { text: "Structured Query Language", correct: true },
      { text: "Simple Query Language", correct: false },
      { text: "Standard Question Language", correct: false },
      { text: "System Query Logic", correct: false }
    ]
  },
  {
    question: "What does RDBMS stand for?",
    answers: [
      { text: "Relational Database Management System", correct: true },
      { text: "Remote Database Monitoring Service", correct: false },
      { text: "Reliable Data Backup Management System", correct: false },
      { text: "Rapid Database Migration Software", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a component of a typical LAMP stack?",
    answers: [
      { text: "MongoDB", correct: true },
      { text: "Linux", correct: false },
      { text: "Apache", correct: false },
      { text: "PHP", correct: false }
    ]
  },
  {
    question: "Which category of SQL statements is used to define database structure?",
    answers: [
      { text: "DDL (Data Definition Language)", correct: true },
      { text: "DML (Data Manipulation Language)", correct: false },
      { text: "DCL (Data Control Language)", correct: false },
      { text: "DTL (Data Transaction Language)", correct: false }
    ]
  },
  {
    question: "Which of these is a DDL statement?",
    answers: [
      { text: "CREATE", correct: true },
      { text: "SELECT", correct: false },
      { text: "INSERT", correct: false },
      { text: "UPDATE", correct: false }
    ]
  },
  {
    question: "What symbol is used to terminate SQL statements?",
    answers: [
      { text: "Semicolon (;)", correct: true },
      { text: "Period (.)", correct: false },
      { text: "Comma (,)", correct: false },
      { text: "Colon (:)", correct: false }
    ]
  },
  {
    question: "Which is the correct syntax for a basic SELECT statement?",
    answers: [
      { text: "SELECT * FROM table_name;", correct: true },
      { text: "SELECT FROM table_name *;", correct: false },
      { text: "FROM table_name SELECT *;", correct: false },
      { text: "* SELECT FROM table_name;", correct: false }
    ]
  },
  {
    question: "What does the AUTO_INCREMENT keyword do?",
    answers: [
      { text: "Automatically generates a unique number for new records", correct: true },
      { text: "Automatically updates all records", correct: false },
      { text: "Speeds up query execution", correct: false },
      { text: "Automatically creates indexes", correct: false }
    ]
  },
  {
    question: "Which constraint ensures a column cannot contain NULL values?",
    answers: [
      { text: "NOT NULL", correct: true },
      { text: "UNIQUE", correct: false },
      { text: "PRIMARY KEY", correct: false },
      { text: "REQUIRED", correct: false }
    ]
  },
  {
    question: "Which data type is best for storing a person's email address?",
    answers: [
      { text: "VARCHAR", correct: true },
      { text: "INT", correct: false },
      { text: "DATE", correct: false },
      { text: "BOOLEAN", correct: false }
    ]
  },
  {
    question: "What data type would you use to store a price like $19.99?",
    answers: [
      { text: "DECIMAL", correct: true },
      { text: "INT", correct: false },
      { text: "VARCHAR", correct: false },
      { text: "TEXT", correct: false }
    ]
  },
  {
    question: "Which data type stores both date and time?",
    answers: [
      { text: "DATETIME", correct: true },
      { text: "DATE", correct: false },
      { text: "TIME", correct: false },
      { text: "YEAR", correct: false }
    ]
  },
  {
    question: "What does DML stand for?",
    answers: [
      { text: "Data Manipulation Language", correct: true },
      { text: "Data Management Logic", correct: false },
      { text: "Database Modification Language", correct: false },
      { text: "Data Migration Language", correct: false }
    ]
  },
  {
    question: "Which of these is a DML statement?",
    answers: [
      { text: "INSERT", correct: true },
      { text: "CREATE", correct: false },
      { text: "ALTER", correct: false },
      { text: "DROP", correct: false }
    ]
  },
  {
    question: "Which statement retrieves data from a database?",
    answers: [
      { text: "SELECT", correct: true },
      { text: "GET", correct: false },
      { text: "RETRIEVE", correct: false },
      { text: "FETCH", correct: false }
    ]
  },
  {
    question: "Which statement modifies existing data in a table?",
    answers: [
      { text: "UPDATE", correct: true },
      { text: "MODIFY", correct: false },
      { text: "CHANGE", correct: false },
      { text: "ALTER", correct: false }
    ]
  },
  {
    question: "What happens if you run `DELETE FROM customers;` without a WHERE clause?",
    answers: [
      { text: "It deletes all rows in the table", correct: true },
      { text: "It does nothing", correct: false },
      { text: "It deletes only the first row", correct: false },
      { text: "It causes an error", correct: false }
    ]
  },
  {
    question: "Which SQL statement would you use to create a new table?",
    answers: [
      { text: "CREATE TABLE", correct: true },
      { text: "NEW TABLE", correct: false },
      { text: "MAKE TABLE", correct: false },
      { text: "ADD TABLE", correct: false }
    ]
  },
  {
    question: "What is a primary key used for?",
    answers: [
      { text: "To uniquely identify each record", correct: true },
      { text: "To encrypt data", correct: false },
      { text: "To sort data alphabetically", correct: false },
      { text: "To speed up all queries", correct: false }
    ]
  },
  {
    question: "Which keyword makes column values unique across all rows?",
    answers: [
      { text: "UNIQUE", correct: true },
      { text: "DISTINCT", correct: false },
      { text: "DIFFERENT", correct: false },
      { text: "SPECIAL", correct: false }
    ]
  }
];

// Randomize answer order for every question
quizQuestions.forEach(q => shuffleArray(q.answers));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// QUIZ STATE
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let timerInterval = null;
let timeLeft = 60; // 60 seconds = 1 minute

const TIMER_DURATION = 60; // 1 minute per question
const CIRCLE_CIRCUMFERENCE = 220; // Matches the stroke-dasharray

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Timer Functions
const startTimer = () => {
    timeLeft = TIMER_DURATION;
    timerText.textContent = timeLeft;
    updateTimerCircle();
    
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;
        updateTimerCircle();
        
        // Change colors based on time remaining
        if (timeLeft <= 10) {
            timerCircle.classList.add("danger");
            timerCircle.classList.remove("warning");
            timerText.classList.add("danger");
            timerText.classList.remove("warning");
        } else if (timeLeft <= 20) {
            timerCircle.classList.add("warning");
            timerCircle.classList.remove("danger");
            timerText.classList.add("warning");
            timerText.classList.remove("danger");
        } else {
            timerCircle.classList.remove("warning", "danger");
            timerText.classList.remove("warning", "danger");
        }
        
        // Time's up!
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
};

const updateTimerCircle = () => {
    const progress = timeLeft / TIMER_DURATION;
    const offset = CIRCLE_CIRCUMFERENCE * (1 - progress);
    timerCircle.style.strokeDashoffset = offset;
};

const stopTimer = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
};

const handleTimeout = () => {
    if (answersDisabled) return;
    
    answersDisabled = true;
    
    // Show correct answers
    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });
    
    // Don't increment score (timeout = wrong answer)
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1200);
};

// Event Listeners
const startQuiz = () => {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
};

const showQuestion = () => {
    // Reset state
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // Update the progress bar
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    // Clear previous answer buttons
    answersContainer.innerHTML = "";

    // Iterate through the answers array and create buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
    
    // Start the timer for this question
    startTimer();
};

const selectAnswer = (event) => {
    // Optimization check
    if (answersDisabled) return;

    answersDisabled = true;
    
    // Stop the timer when answer is selected
    stopTimer();

    const targetButton = event.target;
    const isCorrect = targetButton.dataset.correct == "true";

    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        // Check if we are at the end of the quiz
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1200);
};

const showResults = () => {
    // Stop timer if still running
    stopTimer();
    
    // Hide quiz screen
    quizScreen.classList.remove("active");

    // Show result screen
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect, you are a genius!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Great job, you did excellent!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good work, you passed!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad, but there's room for improvement.";
    } else if (percentage >= 20) {
        resultMessage.textContent = "You struggled, keep practicing!";
    } else {
        resultMessage.textContent = "Don't give up, try again!";
    }
};

const restartQuiz = () => {
    resultScreen.classList.remove("active");
    startQuiz();
};

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);