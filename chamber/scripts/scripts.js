//Selecting the elements from HTML and adding const
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

//Adding Event listener
//This event will be able to make our hamburger button works.
hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

//Function for the current year in the footer
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

//Function for the last modified date
function getLastModified() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
}

///Function to display the visit message and the time between visits
function displayVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now(); // Get the current timestamp

    //If it's the user's first visit
    if (!lastVisit) {
        document.querySelector('#message-content p').textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        //Calculate the time difference in milliseconds
        const timeDiff = currentVisit - lastVisit;
        const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
        const daysAgo = Math.floor(timeDiff / oneDay);

        // Display appropriate message based on the time since the last visit
        if (daysAgo < 1) {
            document.querySelector('#message-content p').textContent = 'Back so soon! Awesome!';
        } else {
            const dayText = daysAgo === 1 ? 'day' : 'days';
            document.querySelector('#message-content p').textContent = `You last visited ${daysAgo} ${dayText} ago.`;
        }
    }

    // Store the current visit timestamp in localStorage
    localStorage.setItem('lastVisit', currentVisit);
}

// Function to get and update the visitor count
function updateVisitorCount() {
    let visitorCount = localStorage.getItem('visitorCount');

    // If no visitor count is stored, initialize it
    if (!visitorCount) {
        visitorCount = 0;
    }

    // Increment the visitor count
    visitorCount++;

    // Store the updated visitor count
    localStorage.setItem('visitorCount', visitorCount);

    // Display the visitor count
    const visitorCountElement = document.getElementById('visitor-count');
    visitorCountElement.textContent = `Visitors: ${visitorCount}`;
}

// Call the displayVisitMessage function to show the message
// Call the updateVisitorCount function to update and display the visitor count
window.onload = () => {
    displayVisitMessage();
    updateVisitorCount();
};


// Calling functions
getCurrentYear();
getLastModified();
