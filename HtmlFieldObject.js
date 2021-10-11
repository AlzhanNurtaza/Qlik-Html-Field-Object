define([
    "jquery",
    "qlik",
    "css!./css/root.css",
    "./initialproperties",
    "./properties",
    "text!./template.html",
    "./js/bootstrap/bootstrap.bundle.min",
],
    function ($, qlik, css, initprops, propfile, template, bootjs) {
        "use strict";
        return {
            template: template,
            initialProperties: initprops,
            definition: propfile,
            support: {
                snapshot: true,
                export: true,
                exportData: true
            },

            paint: function ($element, layout) {
                var margin = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };

                var width = $element.width() - margin.left - margin.right;
                var height = $element.height() - margin.top - margin.bottom;
                //Assign a unique ID to the $element wrapper
                var id = "ID_DBTC_" + layout.qInfo.qId;
                var idCss = '#' + id;
                $element.attr("id", id);




                return qlik.Promise.resolve();
            }
        };
    });