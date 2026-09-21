const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

const result = document.getElementById("result");
const message = document.getElementById("message");

// For celsius to fahrenheit
const celsiusToFahrenheit = (celsius) =>
{
    return (celsius * 9/5) + 32
}

// For celsius to kelvin
const celsiusToKelvin = (celsius) =>
{
    return celsius + 273.15
}

// For fahrenheit to celsius
const fahrenheitToCelsius = (fahrenheit) =>
{
    return (fahrenheit-32)*5/9
}

// For fahrenheit to kelvin
const fahrenheitToKelvin = (fahrenheit) =>
{
    return (fahrenheit-32)*5/9 + 273.15
}

//For kelvin to celsius
const kelvinToCelsius = (kelvin) =>
{
    return kelvin-273.15
}

//For kelvin to fahrenheit
const kelvinToFahrenheit = (kelvin) =>
{
    return (kelvin-273.15)*9/5 +32
}

// For temperature conversion
const convertTemperature = ()=>
{
    const value = parseFloat(temperature.value)
    const from = fromUnit.value
    const to = toUnit.value

    //invalid input
    if(isNaN(value))
    {
        result.textContent= "-----"
        message.textContent = "Please enter a temperature"
        message.style.color = "red"
        return
    }

    //Same Unit
    if(from===to)
    {
        result.textContent = value.toFixed(2);
        message.textContent = "Same unit selected.";
        message.style.color = "green";
        return;
    }

    let convertedValue

   // Celsius conversions
    if (from === "celsius" && to === "fahrenheit") {
        convertedValue = celsiusToFahrenheit(value);
    }
    else if (from === "celsius" && to === "kelvin") {
        convertedValue = celsiusToKelvin(value);
    }

     // Fahrenheit conversions
    else if (from === "fahrenheit" && to === "celsius") {
        convertedValue = fahrenheitToCelsius(value);
    }
    else if (from === "fahrenheit" && to === "kelvin") {
        convertedValue = fahrenheitToKelvin(value);
    }

    // Kelvin conversions
    else if (from === "kelvin" && to === "celsius") {
        convertedValue = kelvinToCelsius(value);
    }
    else if (from === "kelvin" && to === "fahrenheit") {
        convertedValue = kelvinToFahrenheit(value);
    }

     result.textContent = convertedValue.toFixed(2);

    message.textContent = "Conversion successful!";
    message.style.color = "green";
}

// Convert when input changes
temperature.addEventListener("input", convertTemperature);
fromUnit.addEventListener("change", convertTemperature);
toUnit.addEventListener("change", convertTemperature);
