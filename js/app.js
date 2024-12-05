// Select elements
const temperatureInput = document.getElementById("Temperature");
const inputUnit = document.getElementById("unit");
const outputUnit = document.getElementById("convert-to-unit");
const convertButton = document.querySelector(".conversion-box button");
const resultBox = document.getElementById("result");

// Temperature conversion function
function convertTemperature() {
    const inputTemperature = parseFloat(temperatureInput.value); // Get input value

    // Validate if input is a valid number
    if (isNaN(inputTemperature)) {
        resultBox.innerText = "Please enter a valid temperature!";
        resultBox.style.color = "red";
        return;
    }

    // Reset result color
    resultBox.style.color = "black";

    const fromUnit = inputUnit.value; // Source unit (C, F, K)
    const toUnit = outputUnit.value; // Target unit (C, F, K)

    let result; // Store the conversion result

    // Conversion logic
    if (fromUnit === toUnit) {
        result = inputTemperature; // No conversion needed
    } else if (fromUnit === "C") {
        // Celsius to other units
        if (toUnit === "F") {
            result = (inputTemperature * 9/5) + 32; // Celsius to Fahrenheit
        } else if (toUnit === "K") {
            result = inputTemperature + 273.15; // Celsius to Kelvin
        }
    } else if (fromUnit === "F") {
        // Fahrenheit to other units
        if (toUnit === "C") {
            result = (inputTemperature - 32) * 5/9; // Fahrenheit to Celsius
        } else if (toUnit === "K") {
            result = (inputTemperature - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
        }
    } else if (fromUnit === "K") {
        // Kelvin to other units
        if (toUnit === "C") {
            result = inputTemperature - 273.15; // Kelvin to Celsius
        } else if (toUnit === "F") {
            result = (inputTemperature - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
        }
    }

    // Display the result with the appropriate unit
    resultBox.innerText = `${result.toFixed(2)} °${toUnit}`;
}

// Add event listener to the convert button
convertButton.addEventListener("click", convertTemperature);
