document.addEventListener('click', e => {
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
});

console.log('dropdown js works');

