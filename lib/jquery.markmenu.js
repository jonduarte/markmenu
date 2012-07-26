/*!
 * markmenu - Simple jQuery plugin to mark menu links based on url
 * https://github.com/jhonnyquest/markmenu
 *
 * Copyright 2012 Jonathan Duarte
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
    var paths = MarkMenu.Locations.matching();

    $.each(links, function(i, link){
      var match = $(link).attr("data-mark");
      var href  = $(link).attr("href");

      for(var mark in paths){
        if(unescape(paths[mark]) == match){
          $(link).addClass(settings.class);
        }else{
          if(paths[0] == "" && MarkMenu.Locations.isIndex(match, href)){
            $(link).addClass(settings.class);
          }
        }
      }

    });
  }
})(jQuery);

var MarkMenu = {}
MarkMenu.Utils = {
  include : function(ary, value){
    for(var i = 0; i < ary.length; i++){
      if(ary[i] === value) return true;
    }
    return false;
  }
}

MarkMenu.Locations = {
  _url        : window.location.pathname,
  idxOptions  : ["/", ""],

  url : function(){
    if (arguments.length == 1){
      this._url = arguments[0]
    }else{
      return this._url;
    }
  },

  isIndex: function(match, href){
    var include = MarkMenu.Utils.include
    return include(this.idxOptions, match) || include(this.idxOptions, href)
  },

  matching: function(){
    var occurs = this.url().split("/");
    return occurs.slice(1, occurs.length);
  },

  match: function(value){
    return MarkMenu.Utils.include(this.matching(), value);
  }
}
