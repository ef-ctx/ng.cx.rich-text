describe('ng.cx.rich-text', function () {
    'use strict';

    beforeEach(module('ng.cx.rich-text'));
    beforeEach(module('ng.cx.rich-text.templates'));

    describe('cxRichTextProvider', function () {

        var cxRichTextProvider;
        beforeEach(module(function (_cxRichTextProvider_) {
            cxRichTextProvider = _cxRichTextProvider_;
        }));

        it('should store a configuration property.', inject(function (cxRichText) {

            var someProperty = 5;

            cxRichTextProvider.configure({
                someProperty: someProperty
            });

            expect(cxRichText.someProperty).toBe(someProperty);
        }));

    });

    describe('cxRichText', function () {

        var cxRichTextProvider;
        beforeEach(function () {
            // capture cxRichTextProvider
            module(function (_cxRichTextProvider_) {
                cxRichTextProvider = _cxRichTextProvider_;
            });
        });

        describe('someMethod()', function () {

            it('should return true.', inject(function (cxRichText)  {

                expect(cxRichText.someMethod()).toEqual(true);
            }));

        });
    });
});

