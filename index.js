// Function to generate random outcomes
function getRandomOutcome() {
    const outcomes = ['Outcome A', 'Outcome B', 'Outcome C', 'Outcome D', 'Outcome E'];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

// Function to print multiple outcomes
function printOutcomes(count) {
    for (let i = 0; i < count; i++) {
        console.log(`Outcome ${i + 1}: ${getRandomOutcome()}`);
    }
}

// Let's print 5 random outcomes
printOutcomes(5);
