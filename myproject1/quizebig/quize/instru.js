document.addEventListener('DOMContentLoaded', function() {
    // Generate quiz rules dynamically
    const rulesList = document.getElementById('rules-list');
    const rules = [
        "Rule 1: Each quiz consists of 10 questions.",
        "Rule 2: Each correct answer awards 2 marks.",
        "Rule 3: Each incorrect answer results in a penalty of -1 mark.",
        "Rule 4: You have a total of 20 minutes to complete the quiz.",
        "Rule 5: You can skip questions, but unanswered questions will not affect your score.",
        "Rule 6: Review your answers before submitting the quiz.",
        "Rule 7: Once you submit the quiz, you cannot change your answers.",
        "Rule 8: Make sure to read each question carefully before answering.",
        "Rule 9: Use the process of elimination to narrow down your answer choices.",
        "Rule 10: Ensure a stable internet connection throughout the quiz to avoid disruptions."

    ];

    rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        rulesList.appendChild(li);
    });

    // Handle start button click
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', function() {
        const agreeCheckbox = document.getElementById('agreeCheckbox');
        if (agreeCheckbox.checked) {
            window.location.href = 'next_page.html'; // Replace with your next page URL
        } else {
            alert('Please agree to the quiz rules to proceed.');
        }
    });
});