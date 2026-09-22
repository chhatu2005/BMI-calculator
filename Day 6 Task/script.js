const calculateBMI = () => {
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value

    if (height == "" || weight == "") {
        document.getElementById("result").innerHTML = "Please enter height and weight"
        return
    }

    if (height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML = "Height and Weight must be greater than 0"
        return
    }

    height = height/100
    var bmi = weight / (height * height)
    var category

    if (bmi < 18.5) {
        category = "UnderWeight"
    }
    else if (bmi < 25) {
        category = "Normal Weight"
    }
    else if (bmi < 30) {
        category = "Over Weight"
    }
    else {
        category = "Obesity"
    }

    document.getElementById("result").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>category :" + category

}

const resetBMI = ()=>
{
    document.getElementById("height").value = ""
    document.getElementById("weight").value = ""
    document.getElementById("result").innerHTML = ""
}