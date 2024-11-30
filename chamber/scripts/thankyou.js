//Selecting the current URL of the page
const currentUrl = window.location.href; // Gets the full address of the current page.

//Splitting the URL into two parts at the "?" to identify the user's form data
const everything = currentUrl.split('?');

//Grabbing only the second half of the URL, which contains the user's form data
let formData = everything[1].split('&'); 
//everything[1]: Retrieves the second part containing the user's data (index 1 because indexing starts at 0).
//split('&'): The "&" symbol separates the data, so we use it to divide the data into an array of elements.

//Function to retrieve a specific key value from the form data
function show(key) { // The function takes the parameter 'key', which is the name of the data to be retrieved.
    
    //Iterating over each element in the 'formData' array
    formData.forEach((element) => { 
        
        //Checking if the element starts with the specified parameter (e.g., "first", "email")
        if (element.startsWith(key)) { 

            //Splitting the key-value pair and extracting the value
            //.replace('%40',"@") replaces '%40' with '@' in email addresses
            result = element.split('=')[1]
                .replace('%40', "@")
                .replace(/\+/g, " "); //Removes '+' symbols and replaces them with spaces.
        }
    });
    return result; //Returns the found value to whoever called the 'show' function.
}

//Function to format the current timestamp
function getFormattedTimestamp() {
    const now = new Date();// Gets the current date and time
    const year = now.getFullYear(); // Extracts the year
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Extracts the month (adds leading 0 if needed)
    const day = String(now.getDate()).padStart(2, '0'); // Extracts the day (adds leading 0 if needed)
    const hours = String(now.getHours()).padStart(2, '0'); // Extracts the hour (adds leading 0 if needed)
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Extracts the minutes (adds leading 0 if needed)
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Extracts the seconds (adds leading 0 if needed)

    // Returns the formatted timestamp in "YYYY-MM-DD HH:MM:SS" format
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Displaying the retrieved information inside the <div id="results"></div>
const showInfo = document.querySelector('#results'); // Selects the <div> with id="results" to display the user's data.
showInfo.innerHTML = `
  <p><strong>First Name:</strong> ${show('first')}</p>
  <p><strong>Last Name:</strong> ${show('last')}</p>
  <p><strong>Email:</strong> <a href="mailto:${show('email')}">${show('email')}</a></p>
  <p><strong>Mobile Number:</strong> ${show('phone')}</p>
  <p><strong>Business Name:</strong> ${show('business')}</p>
  <p><strong>Application Submitted:</strong> ${getFormattedTimestamp()}</p>
`;
