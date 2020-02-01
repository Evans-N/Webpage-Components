function displayDropdown() {
    const menuButton = document.getElementsByClassName('dropdown-icon');
    const dropdownMenu = document.getElementById('dropdown-nav-links');

    console.log('HERE IS THE FUNCTION')
    if (dropdownMenu.style.display === 'grid') {
        dropdownMenu.style.display = 'none'
    } else {
        dropdownMenu.style.display = 'grid'
    }
}