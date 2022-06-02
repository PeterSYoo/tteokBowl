// Login dropdown
$(document).on('click', (e) => {
  const isDropdownbutton = e.target.matches('[data-dropdown-button]');
  if (!isDropdownbutton && e.target.closest('[data-dropdown]') != null) return;

  let currentDropdown;
  if (isDropdownbutton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  };
  
  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  })
})

console.log('JS file is loaded');

// Radio buttons
$(function () {
  $('input[type=radio]').on('change', function() {
      // When any radio button on the page is selected,
      // then deselect all other radio buttons.
      $('input[type=radio]:checked').not(this).prop('checked', false);
  })
})

// Total price
function calcscore(){
  let score = 0;
    let checked=$('.calc:checked ~ 	 input[type=hidden]').each(function(){
    score+=parseInt($(this).val());
    });
    console.log(score);
$('#price').text(score.toFixed(2));
}
$(document).ready(function(){
$('.calc').change(function(){
 calcscore()
});
});
