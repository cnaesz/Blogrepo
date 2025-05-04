let totalSpend = JSON.parse(localStorage.getItem('tSpend')) || { name = '', price = 0 };

let totalExpns = JSON.parse(localStorage.getItem('totalExpns')) || 0;

function dltBtn (){
  
}
function renderList() {
  let totalHtml = '';
  totalSpend.array.forEach(objectm {
    
  });
  for (let i = 0; i < totalSpend.length; i++) {
    const work = totalSpend[i];
    const { name, price } = work;
    const html = `
      <div>${name}</div>
      <div>$${price.toFixed(2)}</div> <!-- Ensuring price is formatted properly -->
      <button class="dlt-btn" onclick = "
        const removedPrice = totalSpend[${i}].price; // Store price before removal
        totalSpend.splice(${i}, 1); 
        totalExpns -= removedPrice; // Properly decrease totalExpns
        renderList();
        localStorage.setItem('totalExpns', JSON.stringify(totalExpns));
        localStorage.setItem('tSpend', JSON.stringify(totalSpend));
        ">delete</button>
      
    `;
  
    totalHtml += html;
  }


  document.querySelector('.js-totalexp').innerHTML = `<div>${totalExpns} $</div>`; 
  document.querySelector('.js-output').innerHTML = totalHtml;
}

function addToList(event) {

  event.preventDefault(); // Prevents the form from refreshing the page
  const inputName = document.querySelector('.js-input-name');
  const inputPrice = document.querySelector('.js-input-price');

  const name = inputName.value;
  const price = parseFloat(inputPrice.value);

  if (name && !isNaN(price)) {
    totalSpend.push({ name, price });
    totalExpns += price;
    renderList(); // Update the list after adding a new item
  }

  // Clear input fields for better user experience
  inputName.value = '';
  inputPrice.value = '';
}
