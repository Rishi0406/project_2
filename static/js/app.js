function populateFilter() {
  // Let's populate the <option> elements in 
  // our <select> from the database. 
  const url = "/filter";

  d3.json(url).then(function(response) {
    
    var filerOptions = ["All"];
    filerOptions = filerOptions.concat(response.map(d => d.area_name));
    console.log(filerOptions);

    d3.select("#sel-filter")
      .selectAll("option")
      .data(filerOptions)
      .enter()
      .append("option")
      .text(d => d);
    // Bind an event to refresh the data
    // when an option is selected.
    d3.select("#sel-filter").on("change", refreshCharts);
  });
}
function refreshCharts(event) {
  // event.target will refer tp the selector
  // from which we will get the selected option
  var selectedValue = d3.select(event.target).property('value');

  // With the selectedValue we can refresh the charts
  // filtering if needed. 
  buildRacesByClassBarChart(selectedValue);
}
function buildRacesByClassBarChart(selectedArea) {
  var url = "api/area";
  let xl = [];
  let yl = [];
  if (selectedArea != undefined) {
    url = `api/area?area=${selectedArea}`;
  }
    Plotly.d3.json(url, function (figure) {
      let data = figure;
      for (var i = 0; i < data.length; i++) {
        xl.push(data[i].bay_id).toString()
        yl.push(data[i].durationminutes)
        console.log(xl)
      }

      let trace = {
        x: xl,
        y: yl,
        marker: {
          color: '#37536D'
        },
        type: 'bar'
      };
      let layout = {
        title: 'Duration per parking space',
        yaxis: { title: 'Parking bay' },
        xaxis: { title: 'Duration' }
      };
      Plotly.plot('plot', [trace], layout, { displayModeBar: false });

  });
}
populateFilter();
buildRacesByClassBarChart();