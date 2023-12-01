// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    const genderSelect = document.getElementById("gender");
    const ageInput = document.getElementById("age");
    const ageMinusBtn = document.getElementById("age-minus");
    const agePlusBtn = document.getElementById("age-plus");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const bmiOutput = document.getElementById("bmi");
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("resultText");

    // Add event listeners
    ageMinusBtn.addEventListener("click", decreaseAge);
    agePlusBtn.addEventListener("click", increaseAge);
    calculateBtn.addEventListener("click", calculateBMI);

    // Function to decrease age
    function decreaseAge() {
        if (parseInt(ageInput.value) > 1) {
            ageInput.value = parseInt(ageInput.value) - 1;
        }
    }

    // Function to increase age
    function increaseAge() {
        if (parseInt(ageInput.value) < 120) {
            ageInput.value = parseInt(ageInput.value) + 1;
        }
    }

    // Function to calculate BMI
    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

        if (weight && height) {
            const bmi = weight / (height * height);
            bmiOutput.textContent = bmi.toFixed(2);

            // Display result
            let result = "";
            if (isNaN(bmi)) {
                result = "Please enter valid values for height and weight.";
            } else if (bmi < 18.5) {
                result += `"Underweight"<br>`;
                resultDiv.style.color = "red";
                resultDiv.style.backgroundColor = "yellow";
                resultDiv.style.padding = "10px";
            } else if (bmi < 25) {
                result += `"Normal Weight"<br>`;
                resultDiv.style.color = "green";
                resultDiv.style.backgroundColor = "white";
                resultDiv.style.padding = "10px";
            } else if (bmi < 30) {
                result += `"Overweight"<br>`;
                resultDiv.style.color = "red";
                resultDiv.style.backgroundColor = "yellow";
                resultDiv.style.padding
            } else {
                result += `"Obese"<br>`;
                resultDiv.style.color = "red";
                resultDiv.style.backgroundColor = "yellow";
                resultDiv.style.padding
            }

            resultDiv.innerHTML = result;
        }
    }
});
