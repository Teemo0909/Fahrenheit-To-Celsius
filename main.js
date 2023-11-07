let Fa = document.getElementById("Fahrenheit");
console.log(Fa);
let Re = document.getElementById("result")


function computerData() {
    let F1 = parseFloat(Fa.value);
    console.log("F1 = " , F1)
    console.log(typeof(F1));
    let F2 = F1-32.0;
    console.log("F2 = " , F2)
    console.log(typeof(F2))
    let C1 = 5.0/9.0;
    console.log(C1);
    let Celsius = C1*F2;
    console.log("Celsius = " , Celsius)
    Re.innerHTML = "เซสเซียส = "+Celsius
}

function resetData(){
    Fa.value = "";
    Re.innerHTML = "";

}