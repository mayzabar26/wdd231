//Selecting the elements from HTML and adding const
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

//Adding Event listener
//This event will be able to make our hamburger button works.
hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Function for the current year in the footer
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

// Function for the last modified date
function getLastModified() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
}

// Calling functions
getCurrentYear();
getLastModified();