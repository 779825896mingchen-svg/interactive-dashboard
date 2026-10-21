/* =========================================================
   WEEKLY GOAL CALCULATOR
   ========================================================= */
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
   
   document.addEventListener('DOMContentLoaded', function () {
   
       /* ================= Goal Calculator ================= */
       const button = document.getElementById('goal-btn');
   
       button.addEventListener('click', function (event) {
           event.preventDefault();
   
           const userName   = document.getElementById('user-name').value;
           const dailyGoal  = parseInt(document.getElementById('daily-goal').value);
           const bonusTasks = parseInt(document.getElementById('bonus-tasks').value);
   
           if (!userName || isNaN(dailyGoal) || isNaN(bonusTasks)) {
               document.getElementById('goal-message').innerHTML =
                   '<span style="color:rgb(253, 0, 0); font-size: 0.8em;">Please fill in all fields with valid values!! </span>';
               return;
           }
   
           weeklyGoal(userName, dailyGoal, bonusTasks);
       });
   
       document.getElementById('reset-btn').addEventListener('click', function () {
           document.getElementById('user-name').value = '';
           document.getElementById('daily-goal').value = '';
           document.getElementById('bonus-tasks').value = '';
           document.getElementById('goal-message').innerHTML = '';
       });
   
       /* =========================================================
          TASK MANAGER — object-based tasks
          ========================================================= */
       const tasks = [];   // array of task objects
   
       const taskRows       = document.getElementById('task-rows');
       const addTaskButton  = document.getElementById('add-task');
       const deleteListBtn  = document.getElementById('delete-list-btn');
       const taskNameInput  = document.getElementById('task-name');
       const prioritySelect = document.getElementById('task-priority');
       const importantBox   = document.getElementById('task-important');
   
       // Required logging helper
       function logTasks() {
           console.log(JSON.stringify(tasks));
       }
   
       /* ---------- Render ---------- */
       function renderTasks() {
           taskRows.innerHTML = '';
   
           tasks.forEach(task => {
               const row = document.createElement('div');
               row.classList.add('task-item');
   
               // Task name
               const nameEl = document.createElement('span');
               nameEl.textContent = task.name;
               nameEl.classList.add('task-name');
   
               // Important -> red
               if (task.isImportant) {
                   nameEl.style.color = 'red';
               }
               // Completed -> strikethrough
               if (task.isCompleted) {
                   nameEl.style.textDecoration = 'line-through';
               }
   
               // Priority badge
               const priorityEl = document.createElement('span');
               priorityEl.textContent = task.priority;
               priorityEl.classList.add('priority');
               if (task.priority === 'High') {
                   priorityEl.style.backgroundColor = '#e74c3c';
               } else if (task.priority === 'Medium') {
                   priorityEl.style.backgroundColor = '#f39c12';
               } else {
                   priorityEl.style.backgroundColor = '#2ecc71';
               }
   
               // Complete / Undo button
               const completeBtn = document.createElement('button');
               completeBtn.textContent = task.isCompleted ? 'Undo' : 'Complete';
               completeBtn.addEventListener('click', () => toggleComplete(task.id));
   
               // Delete button
               const deleteBtn = document.createElement('button');
               deleteBtn.textContent = 'Delete';
               deleteBtn.addEventListener('click', () => deleteTask(task.id));
   
               row.append(nameEl, priorityEl, completeBtn, deleteBtn);
               taskRows.appendChild(row);
           });
       }
   
       /* ---------- Add ---------- */
       function addTask() {
           const name = taskNameInput.value.trim();
           if (name === '') return;
   
           tasks.push({
               id: Date.now(),
               name: name,
               priority: prioritySelect.value,
               isImportant: importantBox.checked,
               isCompleted: false
           });
   
           logTasks();
           renderTasks();
   
           // Reset form
           taskNameInput.value = '';
           importantBox.checked = false;
           prioritySelect.value = 'High';
           taskNameInput.focus();
       }
   
       /* ---------- Toggle Complete ---------- */
       function toggleComplete(id) {
           const task = tasks.find(t => t.id === id);
           if (task) task.isCompleted = !task.isCompleted;
           logTasks();
           renderTasks();
       }
   
       /* ---------- Delete One ---------- */
       function deleteTask(id) {
           const index = tasks.findIndex(t => t.id === id);
           if (index > -1) tasks.splice(index, 1);
           logTasks();
           renderTasks();
       }
   
       /* ---------- Delete Entire List ---------- */
       function deleteTaskList() {
           tasks.length = 0;
           logTasks();
           renderTasks();
       }
   
       /* ---------- Wire up events ---------- */
       addTaskButton.addEventListener('click', function (e) {
           e.preventDefault();
           addTask();
       });
   
       deleteListBtn.addEventListener('click', function (e) {
           e.preventDefault();
           deleteTaskList();
       });
   
       taskNameInput.addEventListener('keydown', function (e) {
           if (e.key === 'Enter') {
               e.preventDefault();
               addTask();
           }
       });
   
       // Initial console log
       logTasks();
   });