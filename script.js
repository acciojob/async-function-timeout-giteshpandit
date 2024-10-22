//your JS code here. If required.
// Function to introduce a delay using async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function that handles the text display after a specified delay
async function displayTextAfterDelay() {
  // Get the input values from the form
  const text = document.getElementById("text").value;
  const delayTime = document.getElementById("delay").value;

  // Clear the output div before starting
  const output = document.getElementById("output");
  output.innerHTML = "";

  // Await the delay, and then display the text
  await delay(delayTime);

  // Display the user input text after the delay
  output.innerHTML = text;
}

// Attach event listener to the button
const btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission and page reload
  displayTextAfterDelay();
});

