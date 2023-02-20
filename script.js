let mass = 0, height = 0, bmi = 0;
function clickSub() {
    mass = document.getElementById('mass').value;
    height = document.getElementById('height').value;
    height = height / 100;
    bmi = mass / (height * height);
    bmi = bmi.toFixed(2);
    document.getElementById('result').innerHTML = bmi;
    if ((bmi < 18.5) || (bmi > 25)) {
        document.body.style.background = "rgb(2,0,36)";
        document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,21,1) 35%, rgba(255,3,17,0.9643207624846813) 100%)";
        if (bmi < 18.5) {
            document.getElementsByClassName('bmistat').innerHTML = "Underweight";
        }
        if (bmi > 25) {
            document.getElementsByClassName('bmistat').innerHTML = "Overweight";
        }
    }
    else {
        document.body.style.background = "rgb(2,0,36)";
        document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,10,1) 35%, rgba(27,192,0,0.9643207624846813) 100%)";
        document.getElementsByClassName('bmistat').innerHTML = 'Healthy weight';
    }
}