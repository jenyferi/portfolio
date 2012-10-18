var r = 400,
    format = d3.format(",d"),
    fill = d3.scale.category20c();

var bubble = d3.layout.pack()
    .sort(null)
    .size([r, r])
    .padding(1.5);

var vis = d3.select("#chart").append("svg")
    .attr("width", r)
    .attr("height", r)
    .attr("class", "bubble");

d3.json("./js/bubbledata.json", function(json) {
  var node = vis.selectAll("g.node")
      .data(bubble.nodes(classes(json))
      .filter(function(d) { return !d.children; }))
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.className + ": " + format(d.value); });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      //.style("fill", function(d) { return fill(d.packageName); });
      .style("fill", function(d) { 
        if (d.parent){
          return getFill(d); 
        }
      })
      .on("mouseover", makeMeBig)
      .on("mouseout", makeMeSmall);

  //addText();

  function addText(){
    node.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".3em")
      //.text(function(d) { return d.className.substring(0, d.r / 3); });
      .text(function(d) { return d.className; });
  }
});

function makeMeBig() {
  d3.select(this)
    .transition()
    .delay(0)
    .duration(1000)
    .attr("r", 80);
}

function makeMeSmall() {
  d3.select(this)
    .transition()
    .delay(0)
    .duration(1000)
    .attr("r", 10);
}

function fadeInMyText(n) {
  
}

function getFill(n) {
  /*0/6 = 9ec0bc //green
  1/6 = 9eb2b0
  2/6 = b0a8ad
  3/6 = c29da8
  4/6 = d593a5
  5/6 = e588a1
  6/6 = e98a9f //pink */

  if (n.packageName == "1"){
    return d3.rgb("#9ec0bc"); 
  }else if (n.packageName == "2"){
    return d3.rgb("#9eb2b0");
  }else if (n.packageName == "3"){
    return d3.rgb("#b0a8ad");
  }else if (n.packageName == "4"){
    return d3.rgb("#c29da8");
  }else if (n.packageName == "5"){
    return d3.rgb("#d593a5");
  }else if (n.packageName == "6"){
    return d3.rgb("#e588a1");
  }else if (n.packageName == "7"){
    return d3.rgb("#e98a9f");
  }else {
    return d3.rgb("#c29da8");
  }
}

// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size});
  }

  recurse(null, root);
  return {children: classes};
}
