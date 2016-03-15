var SortEngine = {};
window.addEventListener("load", function () {


    SortEngine.moveOn = function () {

            var valuesArr= Page.valuesArr;

        var curri = SortEngine.i, currj = SortEngine.j;

        if ((curri < valuesArr.length - 1) && (currj < valuesArr.length - 1 - curri)) {
            if (currj >= 1) {
                SortEngine.elemPickOutClear(currj);
                SortEngine.elemPickOutClear(currj - 1);
            }
            SortEngine.currElemPickOut(currj);
            SortEngine.currElemPickOut(currj + 1);

            if (valuesArr[currj] > valuesArr[currj + 1]) {

                SortEngine.swapDivElements(currj, currj + 1);
                SortEngine.swapArrElements(currj,currj +1 , valuesArr);

                SortEngine.pickOutSwappedElem(currj);
                SortEngine.pickOutSwappedElem(currj + 1);
            }
            if (currj == (valuesArr.length - 2 - curri)) {
                SortEngine.i++;
                SortEngine.j = 0;
                SortEngine.elemPickOutClear(currj);
                SortEngine.elemPickOutClear(currj + 1);
                SortEngine.pickOutSortedElem(valuesArr.length - 1 - curri);
            }
            else {
                SortEngine.j++;
            }

        }
        else {
            SortEngine.pickOutSortedElem(currj);
        }

        return valuesArr;
    };

    SortEngine.i = 0;
    SortEngine.j = 0;

    SortEngine.currElemPickOut = function (i) {
        Page.sortElements[i].style.backgroundColor = "rgba(189, 138, 1, 0.97)";
    };

    SortEngine.elemPickOutClear = function (i) {
        Page.sortElements[i].style.backgroundColor = "rgba(40, 23, 132, 0.64)";
    };

    SortEngine.pickOutSortedElem = function (i) {
        Page.sortElements[i].style.backgroundColor = "rgba(146, 212, 8, 0.97)";
    };

    SortEngine.pickOutSwappedElem = function (index1) {
        Page.sortElements[index1].style.backgroundColor = "rgba(185, 9, 0, 0.97)";
    };

    SortEngine.swapDivElements = function (index1, index2) {
        Page.sortElements[index1].getElementsByClassName("amount-signature")[0].innerHTML = Page.valuesArr[index2];
        Page.sortElements[index2].getElementsByClassName("amount-signature")[0].innerHTML = Page.valuesArr[index1];
        var temp = Page.sortElements[index1].style.height;
        Page.sortElements[index1].style.height = Page.sortElements[index2].style.height;
        Page.sortElements[index2].style.height = temp;
    };

    SortEngine.swapArrElements = function(index1, index2,arr)
    {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };

    //Event handlers
    document.getElementById("next-button").addEventListener("click", SortEngine.moveOn);

});
