const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ]
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        answers: [
            { text: "h1", correct: true },
            { text: "head", correct: false },
            { text: "heading", correct: false },
            { text: "h6", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        answers: [
            { text: "a href='url'>link text</a", correct: true },
            { text: "link href='url'>link text</link", correct: false },
            { text: "href='url'>link text</", correct: false },
            { text: "hyperlink>link text</hyperlink", correct: false }
        ]
    },
    {
        question: "Which character is used to indicate an end tag in HTML?",
        answers: [
            { text: "/", correct: true },
            { text: ">", correct: false },
            { text: "<", correct: false },
            { text: "*", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for inserting an image?",
        answers: [
            { text: "img src='image.jpg' alt='description'", correct: true },
            { text: "image src='image.jpg' alt='description'", correct: false },
            { text: "img alt='description'>image.jpg</img", correct: false },
            { text: "src='image.jpg' alt='description'", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: [
            { text: "alt", correct: true },
            { text: "title", correct: false },
            { text: "src", correct: false },
            { text: "href", correct: false }
        ]
    },
    {
        question: "What is the correct HTML for adding a background color?",
        answers: [
            { text: "body style='background-color:yellow;'", correct: true },
            { text: "background>yellow</background", correct: false },
            { text: "bgcolor=yellow", correct: false },
            { text: "color>yellow</color", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        answers: [
            { text: "header", correct: true },
            { text: "heading", correct: false },
            { text: "section", correct: false },
            { text: "head", correct: false }
        ]
    },
    {
        question: "Which HTML element defines the title of a document?",
        answers: [
            { text: "title", correct: true },
            { text: "head", correct: false },
            { text: "meta", correct: false },
            { text: "body", correct: false }
        ]
    },
    {
        question: "What does the br tag represent in HTML?",
        answers: [
            { text: "A line break", correct: true },
            { text: "A page break", correct: false },
            { text: "A bold text", correct: false },
            { text: "A paragraph break", correct: false }
        ]
    }
];

export default questions;
