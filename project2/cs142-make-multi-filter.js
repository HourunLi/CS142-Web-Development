'use strict';
function cs142MakeMultiFilter(originArray) {
    var currentArray = originArray;
    function arrayFilter(filterCriteria, callback) {
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }
        currentArray = currentArray.filter(filterCriteria);
        if (typeof callback === 'function') {
            callback.call(originArray, currentArray);
        }
        return arrayFilter;
    }
    return arrayFilter;
}