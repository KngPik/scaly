var valueUnitOptionElements = []
var outputUnitOptionElements = []

function initElements() {

    for (let i = 1; i < 4; i++) {
        valueUnitOptionElements.push(document.getElementById("cso-v-" + i.toString()));
    }

    for (let i = 1; i < 4; i++) {
        outputUnitOptionElements.push(document.getElementById("cso-o-" + i.toString()));
    }

}

function calculateOutput() {
    // get all relevant stakeholders
    value = document.getElementById("value").value;
    scale = document.getElementById("scale").value;

    outputText = document.getElementById("output");

    // do the calculations
    var result = ((value * valueUnit) / scale) / outputUnit;

    // output the result
    outputText.value = result;
}

function changeUnitSelection(id) {

    valueUnitOptionElements.forEach(e => {
        e.classList.remove("selected");
    });

    document.getElementById(id).classList.add("selected");

}

initElements();