function calculateOutput() {
    // get all relevant stakeholders
    value = document.getElementById("value").value;
    valueUnit = document.getElementById("value-unit").value;
    scale = document.getElementById("scale").value;
    outputUnit = document.getElementById("output-unit").value;

    outputText = document.getElementById("output");

    // do the calculations
    var result = ((value * valueUnit) / scale) / outputUnit;

    // output the result
    outputText.value = result;
}