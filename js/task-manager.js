/**
 * Weekly Goal Calculator
 * This function calculates a user's weekly task goals based on daily targets and weekly bonuses
 * 
 * @param {string} userName - The user's name
 * @param {number} dailyGoal - Number of tasks per day
 * @param {number} bonusTasks - Additional weekly bonus tasks
 */
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Calculate weekly goal (5 workdays)
    const weeklyGoal = dailyGoal * 5;
    
    // Calculate total goal (weekly goal + bonus tasks)
    const totalGoal = weeklyGoal + bonusTasks;
    
    // Create output message
    const output = `
        ${userName}'s Weekly Task Goals:<br>
        - Weekly Goal (5 days): ${weeklyGoal} tasks<br>
        - Bonus Tasks: ${bonusTasks} tasks<br>
        - Total Weekly Goal: ${totalGoal} tasks
    `;
    
    // Display the result in the goal-message element
    document.getElementById('goal-message').innerHTML = output;
}

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and button elements
    const form = document.getElementById('goal-form');
    const button = document.getElementById('goal-btn');
    
    // Add click event listener to the Calculate button
    button.addEventListener('click', function(event) {
        // Prevent the form from being submitted (page refresh)
        event.preventDefault();
        
        // Get user input values from the form fields
        const userName = document.getElementById('user-name').value;
        const dailyGoal = parseInt(document.getElementById('daily-goal').value);
        const bonusTasks = parseInt(document.getElementById('bonus-tasks').value);
        
        // Validate input (optional but recommended)
        if (!userName || isNaN(dailyGoal) || isNaN(bonusTasks)) {
            document.getElementById('goal-message').innerHTML = 
                '<span style="color:rgb(253, 0, 0); font-size: 0.8em;">Please fill in all fields with valid values!! </span>';
            return;
        }
        
        // Call the weeklyGoal function with the user's input values
        weeklyGoal(userName, dailyGoal, bonusTasks);
    });

    //  RESET BUTTON - moved OUTSIDE the calculate button's click handler
    document.getElementById('reset-btn').addEventListener('click', function() {
        document.getElementById('user-name').value = '';
        document.getElementById('daily-goal').value = '';
        document.getElementById('bonus-tasks').value = '';
        document.getElementById('goal-message').innerHTML = '';
    });
});