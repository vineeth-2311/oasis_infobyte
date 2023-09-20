function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultElement = document.getElementById("result");

    if (!isNaN(temperatureInput.value)) {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (unit === "celsius") {
            const fahrenheit = (temperature * 9 / 5) + 32;
            resultElement.innerText = `Result: ${fahrenheit.toFixed(2)}°F`;
        } else if (unit === "fahrenheit") {
            const celsius = (temperature - 32) * 5 / 9;
            resultElement.innerText = `Result: ${celsius.toFixed(2)}°C`;
        }
    } else {
        resultElement.innerText = "Please enter a valid number.";
    }
}