// Initial selection when page loads
let currentSelection = document.getElementById('landing');
let selectedButton = document.getElementById(`${currentSelection.id}-btn`);
selectedButton.style.color = 'yellow';

// Change the content are when a button is selected
onSelect = element => {
  hideCurrentSelection();
  showNewSelection(element);
};

// Hide what is currently showing
hideCurrentSelection = () => {
  console.log(currentSelection);
  currentSelection.classList.remove('selected');
  // Change the selected button's color back to default
  selectedButton.style.color = '#fff';
};

// Show the new selection
showNewSelection = element => {
  element.classList.add('selected');
  currentSelection = element;
  // Change the color of the newly selected button
  selectedButton = document.getElementById(`${currentSelection.id}-btn`);
  selectedButton.style.color = 'yellow';
};
