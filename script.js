const addTaskBtn = document.querySelector('button');
const resetBtn = document.getElementById('reset-btn');
const userInput = document.querySelector('input');


function addTask () {
    const item = document.querySelector('ul');
    const newListItem = document.createElement('li');

    // Prevent users from adding empty tasks
    if (userInput.value.trim() !=="") {
        newListItem.textContent = userInput.value;
    item.append(newListItem);
    userInput.value = '';
    }
    
}

function reset() {
    const allItems = document.querySelectorAll('li');
    allItems.forEach(item => item.remove());
}

addTaskBtn.addEventListener('click', () => {
    addTask();
})

resetBtn.addEventListener('click', () => {
    reset();
})

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
})
