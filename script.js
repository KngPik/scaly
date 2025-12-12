class UnitOptionElement {

    htmlElement;
    unitAsString;
    isSelected = false;

    UnitElement(htmlElement, unitAsString, isSelected) {

        this.htmlElement = htmlElement;
        this.unitAsString = unitAsString;
        this.isSelected = isSelected;
    }

    getValue() {

        if (this.unitAsString == "mm") return 1;
        if (this.unitAsString == "cm") return 10;
        if (this.unitAsString == "m") return 1000;
        if (this.unitAsString == "km") return 1000000;
    }

    changeSelectionStatus(newStatus) {

        this.isSelected = newStatus;
    }

}

var valueUnitOptionElements = [];
var outputUnitOptionElements = [];

var valueUnit = 0;
var outputUnit = 0;

function initElements() {

    for (let i = 1; i < 5; i++) {

        var htmlElement = document.getElementById("cso-v-" + i.toString());
        var isSelected = htmlElement.classList.contains("selected");
        var newValueUnitOptionElement = UnitOptionElement(htmlElement, htmlElement.innerHTML, isSelected);
        valueUnitOptionElements.push(newValueUnitOptionElement);
    }

    for (let i = 1; i < 5; i++) {

        var htmlElement = document.getElementById("cso-o-" + i.toString());
        var isSelected = htmlElement.classList.contains("selected");
        var newOutputUnitOptionElement = UnitOptionElement(htmlElement, htmlElement.innerHTML, isSelected);
        outputUnitOptionElements.push(newOutputUnitOptionElement);
    }

    getUnits();
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

function changeValueUnitSelection(id) {

    valueUnitOptionElements.forEach(e => {
        e.classList.remove("selected");
    });

    document.getElementById(id).classList.add("selected");

    getUnits();
}

function changeOutputUnitSelection(id) {

    outputUnitOptionElements.forEach(e => {
        e.classList.remove("selected");
    });

    document.getElementById(id).classList.add("selected");

    getUnits();
}

function getUnits() {

    valueUnitOptionElements.forEach(e => {
        
        if (e.isSelected) valueUnit = e.getValue();
    });

    outputUnitOptionElements.forEach(e => {
        
        if (e.isSelected) outputUnit = e.getValue();
    });

    calculateOutput();
}

initElements();