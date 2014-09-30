colorsForWidget = colors: [
  "blue"
  "white"
  "red"
]
ColorsWidget = (->
  template = Handlebars.compile($("#template").html())
  result = template(colorsForWidget)
  $("ul.color_blocks").append result
  return
)()