function addItem() {
    const getInputElement = document.getElementById('newItemText');
    
    const newListItem = document.createElement('li');
    newListItem.textContent = getInputElement.value;
    const ulList = document.querySelector('#items')
    ulList.appendChild(newListItem);


    getInputElement.value = "";
}