//creating new element and appending it

const newDiv=document.createElement('div');
newDiv.className='new-div';
newDiv.textContent='New Content';

const parent =document.getElementById('parent');
parent.appendChild(newDiv);