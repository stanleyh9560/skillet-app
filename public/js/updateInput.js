'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$('#addIng').click(addIngredient);
  $(document).on('click', '#removeIng', removeIngredient);

  $('#addInstr').click(addInstruction);
  $(document).on('click', '#removeInstr', removeInstruction);

	$(function () {
  	$('[data-toggle="popover"]').popover()
	})

	$('#recipeForm').submit(handleSubmit);
}

function addIngredient() {
  var html = '';
  html += '<div id="inputFormRow">';
  html += '<div class="input-group">';
  html += '<input required type="text" name="ingredients" class="form-control" placeholder="Enter measurement and ingredient">';
  html += '<div class="input-group-btn">';
  html += '<button id="removeIng" class="btn btn-outline" type="button">X</button>';
  html += '</div>';
  html += '</div>';

  $('#newIng').append(html);
}

function removeIngredient(){
  $(this).closest('#inputFormRow').remove();
}

function addInstruction(e) {
  e.preventDefault();
  // Get the field name
  var quantity = parseInt($('#quantity').data('value'));
  // If is not undefined
  if(quantity>0){
    quantity += 1;
    $('#quantity').data('value', quantity);
  }

  var html = '';
  html += '<div id="inputFormRow2">';
  html += '<div class="input-group">';
  html = html + '<span class="input-group-addon">' + quantity + '</span>';
  html += '<input required type="text" name="instructions" class="form-control" placeholder="Enter instruction">';
  html += '<div class="input-group-btn">';
  html += '<button id="removeInstr" class="btn btn-outline" type="button">X</button>';
  html += '</div>';
  html += '</div>';

  $('#newInstr').append(html);
}

function removeInstruction(e){
  // Stop acting like a button
  e.preventDefault();
  // Get the field name
  var quantity = parseInt($('#quantity').data('value'));
  // If is not undefined
      // Decrement
      if(quantity>0){
        $('#quantity').data('value', quantity - 1);
      }
  $(this).closest('#inputFormRow2').remove();
}

function handleSubmit(e) {
	//e.preventDefault();

	var createData = new FormData(e.target);
	var name = createData.get('name');
	var ingredients = createData.getAll('ingredients');
	var instructions = createData.getAll('instructions');

	var newRecipe = {
    "name": name,
    "ingredients": ingredients,
    "instructions": instructions,
    "imageURL": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    }

	//console.log(newRecipe);
	$.post('createRecipe', newRecipe);
}
