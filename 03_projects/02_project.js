document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bmi-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const height = Number(document.getElementById("height").value);
        const weight = Number(document.getElementById("weight").value);
        const results = document.getElementById("results");

        if (!height || height <= 0) {
            results.innerHTML = "❌ Please enter a valid height";
            return;
        }

        if (!weight || weight <= 0) {
            results.innerHTML = "❌ Please enter a valid weight";
            return;
        }

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        results.innerHTML = `✅ Your BMI is <strong>${bmi}</strong>`;
    });

});
