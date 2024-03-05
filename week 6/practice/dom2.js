// Function to generate a random hexadecimal color
function generateHex() {
    // Generate a random hexadecimal color
    const characters = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += characters[Math.floor(Math.random() * 16)];
    }
    return hex;
}

// Function to create a colored ball and append it to the container
function createBall() {
    const container = document.getElementById("container");

    // Creating a new div element
    const col = document.createElement("div");
    col.className = "col";
    col.style.backgroundColor = generateHex(); // Setting background color

    // Appending the created <div> element to the container
    container.appendChild(col);
}

// Adding an event listener to the button to trigger the creation of a new ball
const dropButton = document.getElementById("dropButton");
dropButton.addEventListener("click", createBall);

