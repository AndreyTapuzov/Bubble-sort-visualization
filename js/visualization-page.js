var Page = {};

Page.initializeComponents = function () {

    SortEngine.i=0;
    SortEngine.j=0;

    var number = Input.getUserChoice();
    Page.sortElements = [];
    var valuesArr = Page.valuesArr;

    var maxElem = this.findMax(valuesArr);

    for (var i = 0; i < valuesArr.length; i++) {

        //Creating div columns
        var elem = document.createElement('div');
        elem.className += "sort-element";
        var containerStyle = getComputedStyle(document.getElementById("elements-container-inner"), null);

        //Calculation of relative height of columns
        var elemWidth = (((parseInt(containerStyle.width) - number * 6) / number)) + "px";
        var elemHeight = ((parseInt(containerStyle.height)) / maxElem * valuesArr[i]) + "px";

        elem.style.width = elemWidth;
        elem.style.height = elemHeight;

        //Creating inner spans
        var span = document.createElement("span");
        span.className = "amount-signature";

        span.innerHTML = valuesArr[i];

        //Appending elements on page
        elem.appendChild(span);
        document.getElementById("elements-container-inner").appendChild(elem);

        Page.sortElements.push(elem);
    }
};

Page.generateValuesArr = function (size) {
    var valuesArr = [];

    if (size > 0)
        for (var i = 0; i < size; i++) {
            valuesArr[i] = ~~(Math.random() * 45 + 5);
        }

    return valuesArr;
};

Page.findMax = function (valuesArr) {
    var max = 0;
    for (var i = 0; i < valuesArr.length; i++) {
        if (valuesArr[i] > max)
            max = valuesArr[i];
    }
    return max;
};