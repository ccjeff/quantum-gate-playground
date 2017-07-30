/* exported animatedQubitsDirective */

function animatedQubitsDirective() {
  "use strict";

    return {
       scope: {
            animatedQubitsContainer: '=animatedQubits'
        },

        link: function postLink(scope, element) {
            function updateDisplay() {
                scope.animatedQubitsContainer.animatedQubits.display(element[0]);
                var naturalDimensions = scope.animatedQubitsContainer.animatedQubits.getNaturalDimensions();
                element.attr("height", naturalDimensions.height);
            }

            updateDisplay();

            scope.animatedQubitsContainer.reset = function reset() {
                element.empty();
                updateDisplay();
            };
        }
    };

}
