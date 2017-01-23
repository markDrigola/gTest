'use strict';
(function () {
    var array = [1,2,3,4,5,6],
        numSum = 4;
    function summer(ar,sum) {
        var stringOnMatch = ar.join(),
            countResult = 0;

        for(var i = 0; i < ar.length; i++) {
            var numberIn = sum - ar[i];

            if(numberIn < sum && numberIn > 0) {
                var regExpSum = new RegExp(numberIn);

                if(stringOnMatch.match(regExpSum)) {
                    countResult++;
                }
            }
        }
        return document.write('Совпадений: ' + countResult);
    }
    summer(array,numSum);
})();

// var array = [55,2,22,3,-4,5,-6,7,-448,129,4,33,2,1,2,3,555,32,12,342],