// Function to generate Gradient
const generateGradient = (
  code = codeP, // Element in which to put the Generated Code
  gradient = gradientP // Element in which to put Generated Gradient
) => {
  let first = "#";
  let second = "#";

  // First and SECOND HEX CODE:
  for (let i = 0; i < 6; i++) {
    first += generateHexCode();
    second += generateHexCode();
  }

  // What to ADD in Content and Gradient Styles
  let toADD = `linear-gradient(45deg, ${first}, ${second})`;
  gradient.style.background = toADD;
  code.textContent = toADD;
};

// Function to Copy Generated Code
const copyCode = (
  e = null, // Event
  code = codeP // Element in which the generated Code is
) => {
  navigator.clipboard.writeText(code.textContent);
  try {
    // Targeted Element Toggle Classes to show the function works
    e.target.textContent = "✓ Copied";
    e.target.classList.toggle("bg-slate-300");
    e.target.classList.toggle("text-slate-700");
    e.target.classList.toggle("hover:bg-slate-900");
    e.target.classList.toggle("pointer-events-none");
    setTimeout(() => {
      e.target.classList.toggle("bg-slate-300");
      e.target.classList.toggle("text-slate-700");
      e.target.classList.toggle("hover:bg-slate-900");
      e.target.classList.toggle("pointer-events-none");
      e.target.textContent = "Copy Code";
    }, 800);
  } catch {
    // If e is null
    console.log("No Event Triggered this Function!");
  }
};

// Function for Generating Random Hex Code
const generateHexCode = () =>
  forHexCode[Math.floor(Math.random() * forHexCode.length)];

// ID of Element where to show code;
let codeP = document.getElementById("code");

// ID of Element where to show Gradient
let gradientP = document.getElementById("gradient");

// ID of Element on which the click event is applied so that the Gradient function Runs
let btnGenerate = document.getElementById("generateCode");

// ID of Element on which Copy Code Function Runs
let btnCopy = document.getElementById("copyCode");

// Hex Code Array
let forHexCode = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// Add Event Listeners to both Elements
btnGenerate.addEventListener("click", () => generateGradient(codeP, gradientP)); // Generate Code Element 
btnCopy.addEventListener("click", (e) => copyCode(e, codeP)); // Copy Code Element

// Start by Generating Random Gradient
generateGradient();
