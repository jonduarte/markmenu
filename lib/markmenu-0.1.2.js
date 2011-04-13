/*!
 * markmenu - Simple jQuery plugin to mark menu v0.1.2
 * https://github.com/jhonnyquest
 *
 * Copyright 2011, Jonathan Duarte
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 **/
(function($){

    $.fn.markmenu = function(options){
        var settings = {
            class       : "marked"
        };

        if(options){
            $.extend(settings, options);
        }

        var links = this.find("a");
        var paths = location.href.split("/");


        $.each(links, function(i, link){
            var id = $(link).attr("id");
            for(var k in paths){
                if(unescape(paths[k]) == id){
                    $(link).addClass(settings.class);
                }
            }
        });

    }

})(jQuery);

