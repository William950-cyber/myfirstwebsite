// Homepage Alert
function showAlert() {
    alert('Thank you for visiting My Portfolio!');
}

// Update Skills Alert
function updateSkills() {
    alert('Skills updated successfully!');
}

// Highlight Project
function highlightProject(projectName) {
    alert(`Project selected: ${projectName}`); // Corrected string template usage
}

// Play Video
function playVideo() {
    const video = document.getElementById('myVideo');
    if (video) { // Check if the video element exists
        video.play();
    } else {
        alert('Video element not found!');
    }
}

// Validate Form
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) { // Corrected logical OR operator usage
        alert('All fields are required!');
        return false;
    }
    alert('Thank you for your feedback!');
    return true;
}
