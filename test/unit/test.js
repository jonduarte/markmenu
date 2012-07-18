$(document).ready(function(){
  module("Locations");

  test("can retrieve location", function() {
    MarkMenu.Locations._url = "/bar"
    result = MarkMenu.Locations.url();
    equal("/bar", result);
  });

  test("build array matches", function() {
    MarkMenu.Locations._url = "/bar/nothing"
    result = MarkMenu.Locations.matching();
    expected = ["bar", "nothing"];
    equal(expected, result);
  });

});
