class UnitOptionElement {

    id;
    htmlElement = null;
    unitAsString;
    isSelected = false;

    constructor(id, htmlElement, unitAsString, isSelected) {

        this.id = id;
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

        if (this.isSelected) {
            this.htmlElement.classList.add("selected");
        } else {
            this.htmlElement.classList.remove("selected");
        }
    }

}

var valueUnitOptionElements = [];
var outputUnitOptionElements = [];

var valueUnit = 0;
var outputUnit = 0;

function initElements() {

    for (let i = 1; i < 5; i++) {

        let id = "cso-v-" + i.toString();
        let htmlElement = document.getElementById(id);
        let isSelected = htmlElement.classList.contains("selected");
        let newValueUnitOptionElement = new UnitOptionElement(id, htmlElement, htmlElement.innerHTML, isSelected);
        valueUnitOptionElements.push(newValueUnitOptionElement);
    }

    for (let i = 1; i < 5; i++) {

        let id = "cso-o-" + i.toString();
        let htmlElement = document.getElementById(id);
        let isSelected = htmlElement.classList.contains("selected");
        let newOutputUnitOptionElement = new UnitOptionElement(id, htmlElement, htmlElement.innerHTML, isSelected);
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
        e.changeSelectionStatus(false);
        if (e.id == id) {

            e.changeSelectionStatus(true);
        }
    });

    getUnits();
}

function changeOutputUnitSelection(id) {

    outputUnitOptionElements.forEach(e => {
        e.changeSelectionStatus(false);
        if (e.id == id) {

            e.changeSelectionStatus(true);
        }
    });

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