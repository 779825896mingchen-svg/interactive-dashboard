// Wait for the DOM to be ready (defer guarantees this, but be safe)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("converter-form");
    const output = document.getElementById("output");
  
    // Conversion factors: value * factor = converted value
    const conversions = {
      "in-cm": { factor: 2.54,    from: "inches",      to: "centimeters" },
      "ft-m":  { factor: 0.3048,  from: "feet",        to: "meters" },
      "yd-m":  { factor: 0.9144,  from: "yards",       to: "meters" },
      "mi-km": { factor: 1.60934, from: "miles",       to: "kilometers" },
      "cm-in": { factor: 1 / 2.54,    from: "centimeters", to: "inches" },
      "m-ft":  { factor: 1 / 0.3048,  from: "meters",      to: "feet" },
      "km-mi": { factor: 1 / 1.60934, from: "kilometers",  to: "miles" }
    };
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page reload
  
      // 1. Capture the numeric input
      const inputField = document.getElementById("input-value");
      let inputValue = inputField.value;
  
      // 2. Convert to numeric value
      inputValue = parseFloat(inputValue);
  
      // 3. Get the selected index from the select element
      const selectElement = document.getElementById("conversion-type");
      const selectedIndex = selectElement.selectedIndex;
      const selectedOption = selectElement.options[selectedIndex];
      const conversionKey = selectedOption.value;
  
      // 4. Validate
      if (isNaN(inputValue)) {
        output.innerHTML = "Please enter a valid number.";
        return;
      }
  
      // 5. Perform conversion
      const { factor, from, to } = conversions[conversionKey];
      const result = (inputValue * factor).toFixed(2);
  
      // 6. Display result
      output.innerHTML = `${inputValue} ${from} is ${result} ${to}.`;
    });
  });