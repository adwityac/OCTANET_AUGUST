const taskInput = document.getElementById('taskInput');
const doItButton = document.getElementById('doItButton');
const taskList = document.getElementById('taskList');

doItButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const li = document.createElement('li');

    
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.classList.add('task-text');

    
    const checkButton = document.createElement('button');
    checkButton.textContent = '✔';
    checkButton.classList.add('check');
    checkButton.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDateTime = now.toLocaleDateString('en-US', options);

    const dateTimeSpan = document.createElement('span');
    dateTimeSpan.textContent = ` - Added on ${formattedDateTime}`;

    taskContainer.appendChild(taskTextSpan);
    taskContainer.appendChild(checkButton);
    taskContainer.appendChild(deleteButton);

    li.appendChild(taskContainer);
    li.appendChild(dateTimeSpan);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});




