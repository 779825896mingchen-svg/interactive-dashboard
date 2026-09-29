let myTasks = [];

/**
 * @param {string} userName
 * @param {number} dailyGoal
 * @param {number} bonusTasks
 */
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    const weeklyGoal = dailyGoal * 5;
    const totalGoal = weeklyGoal + bonusTasks;

    const output = `
        ${userName}'s Weekly Task Goals:<br>
        - Weekly Goal (5 days): ${weeklyGoal} tasks<br>
        - Bonus Tasks: ${bonusTasks} tasks<br>
        - Total Weekly Goal: ${totalGoal} tasks
    `;

    document.getElementById('goal-message').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('goal-form');
    const button = document.getElementById('goal-btn');

    button.addEventListener('click', function(event) {
        event.preventDefault();

        const userName = document.getElementById('user-name').value;
        const dailyGoal = parseInt(document.getElementById('daily-goal').value);
        const bonusTasks = parseInt(document.getElementById('bonus-tasks').value);

        if (!userName || isNaN(dailyGoal) || isNaN(bonusTasks)) {
            document.getElementById('goal-message').innerHTML =
                '<span style="color:rgb(253, 0, 0); font-size: 0.8em;">Please fill in all fields with valid values!! </span>';
            return;
        }

        weeklyGoal(userName, dailyGoal, bonusTasks);
    });

    document.getElementById('reset-btn').addEventListener('click', function() {
        document.getElementById('user-name').value = '';
        document.getElementById('daily-goal').value = '';
        document.getElementById('bonus-tasks').value = '';
        document.getElementById('goal-message').innerHTML = '';
    });

    const taskListDiv = document.getElementById('task-list');
    const userTasks = document.createElement('ul');
    userTasks.id = 'user-tasks';
    taskListDiv.appendChild(userTasks);

    const addTaskButton = document.getElementById('add-task');
    const taskNameInput = document.getElementById('task-name');

    addTaskButton.addEventListener('click', function(event) {
        event.preventDefault();

        const taskText = taskNameInput.value.trim();
        if (taskText === '') return;

        myTasks.push(taskText);

        const li = document.createElement('li');
        li.textContent = taskText;
        userTasks.appendChild(li);

        taskNameInput.value = '';
        taskNameInput.focus();
    });
});