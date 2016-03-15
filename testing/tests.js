describe("isNumeric", function () {

    describe("Return true if parameter is number", function () {

        it("23 - число", function () {
            assert.equal(Input.isNumeric(23), true);
        });
        it("-2.3 - число", function () {
            assert.equal(Input.isNumeric(-2.3), true);
        });
        it("word - не число", function () {
            assert.equal(Input.isNumeric("word"), false);
        });
    });


});

describe("findMax", function () {
    describe("Find max element in array", function () {
        it("In array [1,56,2,4,5] max element is 56", function () {
            assert.equal(Page.findMax([1, 56, 2, 4, 5]), 56);
        });
        it("In array [1,5,2,4,5] max element is 5", function () {
            assert.equal(Page.findMax([1, 5, 2, 4, 5]), 5);
        });
    });
});

describe("swapArrElements", function() {
    describe("Swapping elements in array",function(){
        it("Array before swapping [2] and [3] elements: " +
            "[1,2,4,3,5]; array after swapping: [1,2,3,4,5]",function(){
            var arr = [1,2,4,3,5];
            SortEngine.swapArrElements(2,3,arr);
            assert(isEqualArr(arr, [1,2,3,4,5]));
        });

        function isEqualArr(arr1,arr2)
        {
            var result = true;
            for(var i = 0; i<  arr1.length; i++)
            {
                if(arr1[i] !== arr2[i])
                    result = false;
            }
            return result;
        }
    });
});