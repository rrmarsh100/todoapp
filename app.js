function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
     event.preventDefault();



      let title = newToDoText.value;

      let newLi = document.createElement('li');

      let checkbox = document.createElement('input');

      checkbox.type = "checkbox";

      newLi.textContent = title;

      newLi.appendChild(checkbox);

      newLi.appendChild(checkbox);

      newToDoText.value = '';

  });

  addToDoForm.addEventListener('delete', (event) => {


});


window.onload = function() {
    onReady();
};
