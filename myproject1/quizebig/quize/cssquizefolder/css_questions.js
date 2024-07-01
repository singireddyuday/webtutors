const questions = [
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false }
        ]
    },
    {
        question: "How do you make each word in a text start with a capital letter using CSS?",
        answers: [
            { text: "text-transform: capitalize;", correct: true },
            { text: "text-transform: uppercase;", correct: false },
            { text: "text-transform: lowercase;", correct: false },
            { text: "text-transform: initial;", correct: false }
        ]
    },    
    {
        question: "Which is the correct CSS syntax?",
        answers: [
            { text: "body {color: black;}", correct: true },
            { text: "{body:color=black;}", correct: false },
            { text: "body:color=black;", correct: false },
            { text: "{body;color:black;}", correct: false }
        ]
    },
    {
        question: "How do you select an element with the id 'header' in CSS?",
        answers: [
            { text: "#header", correct: true },
            { text: ".header", correct: false },
            { text: "header", correct: false },
            { text: "*header", correct: false }
        ]
    },
    {
        question: "Which property is used to change the background color?",
        answers: [
            { text: "background-color", correct: true },
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "bg-color", correct: false }
        ]
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        answers: [
            { text: "h1 {background-color: #FFFFFF;}", correct: true },
            { text: "h1.all {background-color: #FFFFFF;}", correct: false },
            { text: "all.h1 {background-color: #FFFFFF;}", correct: false },
            { text: "h1 {background-color: all;}", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "text-style", correct: false }
        ]
    },
    {
        question: "Which CSS property controls the text size?",
        answers: [
            { text: "font-size", correct: true },
            { text: "text-size", correct: false },
            { text: "font-style", correct: false },
            { text: "text-style", correct: false }
        ]
    },
    {
        question: "How do you display hyperlinks without an underline?",
        answers: [
            { text: "a {text-decoration: none;}", correct: true },
            { text: "a {underline: none;}", correct: false },
            { text: "a {decoration: no-underline;}", correct: false },
            { text: "a {text-decoration: no-underline;}", correct: false }
        ]
    },
    {
        question: "Which property is used to change the font of an element?",
        answers: [
            { text: "font-family", correct: true },
            { text: "font-weight", correct: false },
            { text: "font-style", correct: false },
            { text: "font-size", correct: false }
        ]
    }
];

export default questions;
