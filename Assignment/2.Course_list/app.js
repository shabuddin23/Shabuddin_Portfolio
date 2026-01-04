

document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#course-list ul');

    
    const forms = document.forms;

    console.log(forms)


    // add courses

    const addForm = forms['add-course'];

    console.log(addForm);

    addForm.addEventListener('submit', function(e){

      e.preventDefault();

  

      // create elements

      const value = addForm.querySelector('input[type="text"]').value;

      const li = document.createElement('li');

      const courseName = document.createElement('span');

      const deleteBtn = document.createElement('span');

  

      // add text content

      courseName.textContent = value;

      deleteBtn.textContent = 'Delete';

  

      // add classes

      courseName.classList.add('name');

      deleteBtn.classList.add('delete');

  

      // append to DOM

      li.appendChild(courseName);

      li.appendChild(deleteBtn);

      list.appendChild(li);

    });

    // delete courses

    list.addEventListener('click', (e) => {

      if(e.target.className == 'delete'){

        const li = e.target.parentElement;

        console.log(li);

        li.parentNode.removeChild(li);

      }

    });
  

  })