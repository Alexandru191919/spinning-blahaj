let spinSpeed = 0;  // Initial speed is 0 (no rotation)
let clickCount = 0;  // Track the number of clicks

// Function to increase the speed of spinning on click
function increaseSpeed() {
    const image = document.querySelector(".spin-blahaj");

    // Start spinning on the first click
    if (spinSpeed === 0) {
        spinSpeed = 8;  // Set initial speed to 8 seconds for a full rotation
    } else {
        spinSpeed *= 0.8;  // Decrease the duration to speed up the spin (make it faster)
    }

    // Apply the new spinning speed with the CSS animation property
    image.style.animation = `spin ${spinSpeed}s infinite linear`;

    // Increment the click count
    clickCount++;

    // If the user clicks 21 times, make the blåhaj explode
    if (clickCount === 18) {
        explodeBlahaj();
    }
}

function explodeBlahaj() {
    // Replace the image with an explosion GIF
    const imageContainer = document.getElementById("image-container");
    
    // Create the explosion image element
    const explosionGif = document.createElement("img");
    explosionGif.src = "https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif";  // Example explosion GIF
    explosionGif.alt = "It is dead.";
    explosionGif.classList.add("explosion-gif");
    
    // Create an audio element for the explosion sound
    const explosionSound = new Audio("beep-07.wav"); // Example sound file
    
    // Play the explosion sound
    explosionSound.play();
    
    // Replace the current image with the explosion GIF
    imageContainer.innerHTML = "";
    imageContainer.appendChild(explosionGif);

    // After the GIF has finished playing, remove it from the page
    explosionGif.addEventListener("load", function() {
        setTimeout(function() {
            imageContainer.innerHTML = ""; // Remove the GIF after it finishes
        }, 750); // Adjust the timeout duration to the length of the GIF (5 seconds here)
    });
}