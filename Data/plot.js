/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
  
  buildPlot();
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
  
  // Submit Button handler
  function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var stock = d3.select("#selDataset").node().value;
    console.log(stock);

    // Build the plot with the new stock
    buildPlot(area);
  }
  
  function buildPlot(area) {
    const url = "/api/pals";
  
    d3.json(url).then(function(results) {
  
      // Grab values from the response json object to build the plots
      var areaname = area.area_id;
      var bay = data.dataset.dataset_code;
      var startDate = data.dataset.start_date;
      var endDate = data.dataset.end_date;
      var dates = unpack(data.dataset.data, 0);
      var openingPrices = unpack(data.dataset.data, 1);
      var highPrices = unpack(data.dataset.data, 2);
      var lowPrices = unpack(data.dataset.data, 3);
      var closingPrices = unpack(data.dataset.data, 4);
  
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: areaname,
        x: dates,
        y: closingPrices,
        line: {
          color: "#17BECF"
        }
      };
  
      // Candlestick Trace
      var trace2 = {
        type: "candlestick",
        x: dates,
        high: highPrices,
        low: lowPrices,
        open: openingPrices,
        close: closingPrices
      };
  
      var data = [trace1, trace2];
  
      var layout = {
        title: `${stock} closing prices`,
        xaxis: {
          range: [startDate, endDate],
          type: "date"
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };
  
      Plotly.newPlot("plot", data, layout);
    });
  }
  
  // Add event listener for submit button
  d3.select("#submit").on("click", handleSubmit);
  