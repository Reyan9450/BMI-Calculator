const form = document.getElementById('bmiForm');

form.addEventListener('submit', function(e) {
     e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');
    console.log(weight, height);
    if (isNaN(height) || height <= 0) {
        result.innerHTML = 'Please enter a valid height';
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please enter a valid weight';
    } else {
        const bmi = (weight / (height * height)) * 10000; // Corrected BMI calculation
        result.innerHTML = `<span>${bmi}</span>`;
    }
});
