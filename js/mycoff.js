(function() {
  var ColorsWidget, colorsForWidget;

  colorsForWidget = {
    colors: ["blue", "white", "red"]
  };

  ColorsWidget = (function() {
    var result, template;
    template = Handlebars.compile($("#template").html());
    result = template(colorsForWidget);
    $("ul.color_blocks").append(result);
  })();

}).call(this);
