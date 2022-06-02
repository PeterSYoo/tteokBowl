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

// Checked items adds to total price
function calcscore() {
  let sum = 0;
    let checked=$('.calc:checked').each(function(){
    sum = sum + parseInt($(this).val());
    });
    console.log(sum);
$('#price').text(sum.toFixed(2));
}
$(document).ready(function(){
$('.calc').change(function(){
 calcscore()
});
});

// Enable disabled child checkbox of toppings
$(function() {
  enableCheckbox();
  $('#parent-topping').on('click', enableCheckbox);
});
function enableCheckbox() {
  $('#child-topping').prop('disabled', !this.checked);
}

$(function() {
  enableCheckbox1();
  $('#parent-topping1').on('click', enableCheckbox1);
});
function enableCheckbox1() {
  $('#child-topping1').prop('disabled', !this.checked);
}

$(function() {
  enableCheckbox2();
  $('#parent-topping2').on('click', enableCheckbox2);
});
function enableCheckbox2() {
  $('#child-topping2').prop('disabled', !this.checked);
}

$(function() {
  enableCheckbox3();
  $('#parent-topping3').on('click', enableCheckbox3);
});
function enableCheckbox3() {
  $('#child-topping3').prop('disabled', !this.checked);
}

$(function() {
  enableCheckbox4();
  $('#parent-topping4').on('click', enableCheckbox4);
});
function enableCheckbox4() {
  $('#child-topping4').prop('disabled', !this.checked);
}

$(function() {
  enableCheckbox5();
  $('#parent-topping5').on('click', enableCheckbox5);
});
function enableCheckbox5() {
  $('#child-topping5').prop('disabled', !this.checked);
}

$(function() {
  enableCheckbox6();
  $('#parent-topping6').on('click', enableCheckbox6);
});
function enableCheckbox6() {
  $('#child-topping6').prop('disabled', !this.checked);
}

$(function() {
  enableCheckbox7();
  $('#parent-topping7').on('click', enableCheckbox7);
});
function enableCheckbox7() {
  $('#child-topping7').prop('disabled', !this.checked);
}



// Total Cart Price
// function sumCart(){
//   let sum = 0;
//   $('.calc-cart').each(function(){
//     sum = sum + parseInt($(this).val());
//     });
//     console.log(sum);
// $('#priceCart').text(score.toFixed(2));
// }
// sumCart()

