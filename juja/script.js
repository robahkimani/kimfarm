// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Toggle dropdown visibility for cards
function toggleDropdown(section) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => dropdown.style.display = 'none'); // Hide all dropdowns

    const dropdown = document.getElementById(`${section}-dropdown`);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Show popup with details
function showPopup(section, functionality) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const description = document.getElementById("popup-description");

    title.textContent = `${functionality} for ${section}`;
    description.textContent = `Here you can manage the ${functionality} functionality for ${section}.`;

    popup.style.display = "flex";
}

// Close popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Close dropdown when clicking outside
window.addEventListener("click", function(event) {
    if (!event.target.matches('.card') && !event.target.matches('.dropdown')) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => dropdown.style.display = 'none');
    }
});
