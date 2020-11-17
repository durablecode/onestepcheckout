
define([
    'uiComponent',
    'Magento_Ui/js/lib/core/collection'
], function(
    Component,
    Collection
) {
    'use strict';

    return Component.extend({

        /**
         * @param string areaName
         * @returns array
         */
        getComponentsByAreaName: function(areaName) {
            var steps = this.getSteps(),
                arr = [];

            for(let step of this.elemsOfSteps()) {
                if(step.area == areaName) {
                    arr.push(step);
                }
            }

            steps.elems(arr);
            return [steps];
        },

        /**
         * @returns array
         */
        elemsOfSteps: function() {
            return this.getSteps()[0].elems();
        },

        /**
         * @returns Object
         */
        getSteps: function() {
            return Object.assign(Collection(), this.getRegion('steps')());
        }
    });
});
