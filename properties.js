define([], function () {
    'use strict';
    return {
        type: "items",
        component: "accordion",
        items: {
            htmlText: {
                type: "string",
                label: "Html code",
                ref: "html",
                expression: "always",
                defaultValue: "<p>This is my HTML</p>"
            },
            appearance: {
                uses: "settings",
            }
        }
    };
});