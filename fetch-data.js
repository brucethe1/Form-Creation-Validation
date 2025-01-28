
// Asynchronous function to fetch user data
async function fetchUserData() {
  // Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select the container element for displaying data
  const dataContainer = document.getElementById('api-data');

  try {
    // Fetch the data from the API
    const response = await fetch(apiUrl);

    // Check if the response status is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response to JSON
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = '';

    // Create a <ul> element to display user names
    const userList = document.createElement('ul');

    // Loop through the users and create <li> elements for each name
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the <ul> to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors and display an error message
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
