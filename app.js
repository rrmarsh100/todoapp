function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('event', event);

<<<<<<< HEAD

=======
>>>>>>> seven

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let deleteButton = document.createElement('button');

    checkbox.type = "checkbox";

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click' , (event) => {
      console.log('delete button clicked', event.target.parentElement);
      event.target.parentElement.remove();
    });

    newLi.textContent = title;

    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);

    // newLi.appendChild(checkbox);
    // console.log('newLi', newLi);
    toDoList.appendChild(newLi);
    newToDoText.value = '';

  });

<<<<<<< HEAD
  addToDoForm.addEventListener('delete', (event) => {


});


window.onload = function() {
    onReady();
=======
};


window.onload = function() {
  onReady();
>>>>>>> seven
};
