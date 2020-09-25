const url = "/api/docklands";
let xl = [];
let yl = [];
Plotly.d3.json(url, function (figure) {
  let data = figure;
 console.log(data);
  for (var i = 0; i < data.length; i++) {
    xl.push(data[i].bay_id)
    yl.push(data[i].durationminutes)
  }
  console.log(xl,yl);
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
})
