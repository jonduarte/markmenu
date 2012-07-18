$(document).ready(function(){
  module("Utils")
  test("include", function(){
    ok(MarkMenu.Utils.include([1, 2], 1));
    equal(false, MarkMenu.Utils.include([1, 2], 3));
  });

  module("Locations");
  test("can retrieve location", function() {
    MarkMenu.Locations.url("/bar");
    result = MarkMenu.Locations.url();
    equal(result, "/bar");
  });

  test("build array matches", function() {
    MarkMenu.Locations.url("/bar/nothing");
    result = MarkMenu.Locations.matching();
    expected = ["bar", "nothing"];
    deepEqual(result, expected);
  });

  test("match", function(){
    MarkMenu.Locations.url("/bar/nothing");
    ok(MarkMenu.Locations.match("bar"));
    equal(MarkMenu.Locations.match("foo"), false);
  });

  module("Plugin")
  test("attach class when data attribute", function(){
    MarkMenu.Locations.url("/data/projects");
    $("#data-menu").markmenu();
    el = $("#data-menu .marked");
    equal($(el).text(), "Projects");
  });

  test("attach class to / index", function(){
    MarkMenu.Locations.url("/");
    $("#index-menu").markmenu();
    el = $("#index-menu .marked");
    equal($(el).length, 3);
  });
});
