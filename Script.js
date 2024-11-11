// Toggle dropdown menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = 'none';
    }
});

// Display current date
function displayDate() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerText = currentDate.toLocaleDateString(undefined, options);
}

// Initialize date on page load
window.onload = displayDate;
