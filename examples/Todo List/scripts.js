let todoList = [];


function renderlist(){
  let todoHtml = '';


  todoList.forEach((value, index) => {
    const {name, dueDate} = value;
    
    const html = `
    <div>${index+1}-${name}</div>
    <div>${dueDate}</div>

    <button class="dlt-btn" >delete</button>

    `;
  todoHtml += html;

  })
  document.querySelector('.js-output').innerHTML = todoHtml;
  document.querySelectorAll('.dlt-btn')
    .forEach((value, index) => {
      value.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderlist();
      });
  });


}

document.querySelector('.btn').addEventListener('click', () => {
  addtodo()
})

function addtodo(){
  const inputElement = document.querySelector('.js-input');
  const dateInput = document.querySelector('.js-date-input');
  const dueDate = dateInput.value;

  const name = inputElement.value;
  if (!dueDate || !name) {
    alert('All fields are required!');
    return;
  }

  if (name) {
    todoList.push({
      name,
      dueDate});
    inputElement.value = '';
    renderlist();

  
}



}

