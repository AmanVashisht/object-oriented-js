// Create a Temperature class in JavaScript that manages both Celsius and Fahrenheit temperatures with 
// getters and setters for each unit, allowing for automatic conversion between the two scales. The class 
// should have an initial state of 0°C and 32°F, and it should validate input values for temperature updates, 
// ensuring they are numeric. When setting the temperature in either Celsius or Fahrenheit, the class should 
// correctly update the corresponding value in the other scale. For example, setting the Celsius temperature to 
// 25°C should automatically update the Fahrenheit temperature to 77°F. Your challenge is to implement the 
// Temperature class following the provided code structure and requirements while ensuring that it handles 
// conversions and input validation accurately

class Temperature {
    constructor() {
        this._celsius = 0;
        this._fahrenheit = 32;
    }

    get getCelsius() {
        return this._celsius;
    }

    set setCelsius(value) {
        if (this.isValidTemperature(value)) {
            this._celsius = parseFloat(value);
            this._fahrenheit = this.celsiusToFahrenheit(this._celsius);
        } else {
            console.log("Invalid temperature input. Please enter a numeric value.");
        }
    }

    get getFahrenheit() {
        return this._fahrenheit;
    }

    set setFahrenheit(value) {
        if (this.isValidTemperature(value)) {
            this._fahrenheit = parseFloat(value);
            this._celsius = this.fahrenheitToCelsius(this._fahrenheit);
        } else {
            console.log("Invalid temperature input. Please enter a numeric value.");
        }
    }

    celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    isValidTemperature(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
}

const temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}°C`);
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`);

temperature.setCelsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);

temperature.setFahrenheit = 68;
console.log(`Celsius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);
