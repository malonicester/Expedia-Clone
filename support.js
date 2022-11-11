document.addEventListener('click', (e) => {
    const isDropdown = e.target.matches('[data-dropdown-button]')
    if (!isDropdown && e.target.closest('[data-dropdown]')!=null) {
        return;
    }
    let currentDropdown;
    if (isDropdown) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }
    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown == currentDropdown) return;
        dropdown.classList.remove('active');
    })
})
console.log(document.querySelector('[data-dropdown-button]'))