function addItem() {
    const getInputElement = document.getElementById('newItemText');
    
    const newListItem = document.createElement('li');
    newListItem.textContent = getInputElement.value;


    const deleteLink = document.createElement('a');
    deleteLink.href = "#";
    deleteLink.textContent = "[Delete]";

    newListItem.appendChild(deleteLink);

    deleteLink.addEventListener('click', deleteItem);   

    const ulList = document.querySelector('#items')
    ulList.appendChild(newListItem);

    

    getInputElement.value = "";


    function deleteItem(e){
        const row = e.currentTarget.parentNode;
        row.remove();
    }
}