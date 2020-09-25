function buildRacesByClassBarChart() {
  const url = "/api/<area>";  

  d3.json(url).then(function(response) {

    console.log(response);
    const data = response;

//     var traces = Array();

//     grouped_data.forEach(element => {      
//       traces.push({
//         x: element.map(d => d.char_class),
//         y: element.map(d => d.total),
//         name: element[0].race,
//         type: 'bar'
//       });
//     });
    
//     var layout = {
//       barmode: 'stack',
//       height: 400,
//       width: 500
//     };
    
//     Plotly.newPlot('races-by-class-plot', traces, layout);
   });
  }
buildRacesByClassBarChart();

// let trace1 = {
//   x: [],
//   y: [],
//   mode: "lines"
// };

// data.forEach(function(val) {
//   trace1.x.push(val["bay_id"]);
//   trace1.y.push(val["durationminutes"]);
// });
// Plotly.newPlot('plot', [trace1]);