/* global require, angular */

(function () {
    "use strict";
    
    var animatedQubitsDirective = require("./animatedQubitsDirective.js");

    angular.module('QuantumAnimation', [])
        .directive('animatedQubits', animatedQubitsDirective);

})();