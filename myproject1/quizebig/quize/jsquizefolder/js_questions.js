const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: true },
            { text: "int", correct: false },
            { text: "float", correct: false },
            { text: "string", correct: false }
        ]
    },
    {
        question: "What method is used to add an element to the end of an array in JavaScript?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Netscape", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "Apple", correct: false }
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        answers: [
            { text: "script src='script.js'", correct: true },
            { text: "script href='script.js'", correct: false },
            { text: "script ref='script.js'", correct: false },
            { text: "script link='script.js'", correct: false }
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: "alert('Hello World');", correct: true },
            { text: "msg('Hello World');", correct: false },
            { text: "msgBox('Hello World');", correct: false },
            { text: "alertBox('Hello World');", correct: false }
        ]
    },
    {
        question: "Which built-in method returns the character at the specified index?",
        answers: [
            { text: "charAt()", correct: true },
            { text: "getCharAt()", correct: false },
            { text: "characterAt()", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        answers: [
            { text: "concat()", correct: true },
            { text: "append()", correct: false },
            { text: "attach()", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: [
            { text: "forEach()", correct: true },
            { text: "forEvery()", correct: false },
            { text: "each()", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which of the following is a JavaScript data type?",
        answers: [
            { text: "String", correct: true },
            { text: "Boolean", correct: true },
            { text: "Undefined", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which method removes the last element from an array and returns that element?",
        answers: [
            { text: "pop()", correct: true },
            { text: "push()", correct: false },
            { text: "last()", correct: false },
            { text: "None of the above", correct: false }
        ]
    }
];

export default questions;
