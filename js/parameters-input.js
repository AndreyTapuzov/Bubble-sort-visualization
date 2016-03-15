var Input = {};
window.addEventListener("load", function () {

    Input.getUserChoice = function () {
        var radios = document.getElementsByName("items-number");
        var value = NaN;

        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked)
                value = radios[i].value;
        }
        return value;
    };

    Input.generateTexBox = function () {
        document.getElementById("input-numbers-wrapper").style.display = "block";
        document.getElementById("input-numbers").innerHTML = "";
        var numOfInputs = Input.getUserChoice();

        for (var i = 0; i < numOfInputs; i++) {
            var newTexBox = document.createElement("input");
            newTexBox.setAttribute("type", "text");
            newTexBox.setAttribute("placeholder", "" + (i + 1));
            newTexBox.style.textAlign = "center";
            newTexBox.className = "input-textbox";
            document.getElementById("input-numbers").appendChild(newTexBox);
        }
    };

    Input.isValidInput = function() {
        var result = true;
        var textBoxes = document.getElementsByClassName("input-textbox");
        for (var i = 0; i < textBoxes.length; i++) {
            if (!Input.isNumeric(textBoxes[i].value))
                result = false;
        }
        return result;
    };

    Input.isNumeric = function (n){
            return !isNaN(parseFloat(n)) && isFinite(n);
    };

    //Event handlers

    document.getElementById("start-button").addEventListener("click", function () {

        if (Input.isValidInput()) {
            var textBoxes = document.getElementsByClassName("input-textbox");

            Page.valuesArr = [];
            for (var i = 0; i < textBoxes.length; i++){
                Page.valuesArr[i] = parseInt(textBoxes[i].value);
            }

            document.getElementById("data-input-wrapper").style.display = "none";
            document.getElementById("main-visualization-wrapper").style.display = "block";

            Page.initializeComponents();

        } else
            alert("Please enter correct data!");
    });
    document.getElementById("reset-button").addEventListener("click", function () {
        document.getElementById("elements-container-inner").innerHTML = "";
        document.getElementById("data-input-wrapper").style.display = "block";
        document.getElementById("main-visualization-wrapper").style.display = "none";
        document.getElementById("input-parameters").style.border = "none";
    });

    for (var i = 0; i < document.getElementsByName("items-number").length; i++) {
        document.getElementsByName("items-number")[i].addEventListener("click", Input.generateTexBox);
    }

    document.getElementById("random-button").addEventListener("click", function () {
        var randValues = Page.generateValuesArr(Input.getUserChoice());
        var textBoxes = document.getElementsByClassName("input-textbox");
        for (var i = 0; i < textBoxes.length; i++) {
            textBoxes[i].value = randValues[i];
        }
    });

});

