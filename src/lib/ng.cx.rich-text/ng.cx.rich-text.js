(function (angular) {
    'use strict';

    var module = angular.module('ng.cx.rich-text', ['ng.cx.rich-text.templates']);

    /**
     * @ngdoc object
     * @name ng.cx.rich-text.cxRichTextProvider
     *
     * @description
     * Allows the {@link ng.cx.rich-text.cxRichText} service to be configured.
     */
    module.provider('cxRichText', [

        function cxRichTextProvider() {

            /**
             * @type {Object} provider configuration.
             */
            var serviceConfig = {};

            /**
             * @ngdoc function
             * @name configure
             * @methodOf ng.cx.rich-text.cxRichTextProvider
             *
             * @description
             * Configures the {@link ng.cx.rich-text.cxRichText} service.
             *
             * @param {Object} config Object with configuration options, extends base configuration.
             * - someProperty {number}
             */
            this.configure = function (config) {
                angular.extend(serviceConfig, config);
            };

            /**
             * @ngdoc object
             * @name ng.cx.rich-text.cxRichText
             *
             * @description
             * An example service.
             *
             * @property {number} someProperty **Number** *Read-only* Some property.
             */
            this.$get = [
                '$q',
                function cxRichText($q) {

                    var serviceApi = {

                        /**
                         * @ngdoc function
                         * @name someMethod
                         * @methodOf ng.cx.rich-text.cxRichText
                         *
                         * @description
                         * Performs something.
                         *
                         * @param {number} value Some number.
                         * @returns {boolean} Some result.
                         */
                        someMethod: function (value) {
                            return true;
                        }
                    };

                    Object.defineProperty(serviceApi, 'someProperty', {
                        get: function () {
                            return serviceConfig.someProperty;
                        }
                    });

                    return serviceApi;
                }
            ];
        }
    ]);

})(angular);

