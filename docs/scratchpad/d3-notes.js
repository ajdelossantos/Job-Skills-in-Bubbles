const data = [1, 2, 3, 4, 5]

const scale = d3.scale.linear()
  // maps data range to a pixel space
  .domain([1, 5]) // Data space
  .range([0, 200]); // Pixel Space

const svg = d3.select("div").append("svg") // creates an svg element of specified dimensions
  .attr("width", 250)
  .attr("height", 250);

const svg.selectAll("rect")
  .data(data) // data binding in d3 => pass in data
  .enter().append("rect") // enter virtual selection, executes for when no rectangle, but there is data
  .attr("x", (d) => { return scale(d); }) // ("x",scale) ok too!
  .attr("y", 50)
  .attr("width", 20)
  .attr("height", 20)

// refactor
// allows data to change
const render(data, color) {
let rects = svg.selectAll("rect").data(data);

rects.enter().append("rect") //only fires when theres more data than DOM elements
  .attr("x", scale)
  .attr("y", 50)
  .attr("width", 20)
  .attr("height", 20)
  .attr("fill", color);
}

// enter doesn't handle new data...

//refactor for enter, update, and exit

const render(data, color) {
let rects = svg.selectAll("rect").data(data);

//Enter
rects.enter().append("rect") //static props
  .attr("y", 50)
  .attr("width", 20)
  .attr("height", 20); 

//Update
rects
  .attr("x", scale)
  .attr("fill", color);

//Exit
rects.exit().remove(); // triggers when less data than DOM elements
}