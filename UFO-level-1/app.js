// from data.js
const tableData = data;
console.log(data);
const tbody = d3.select("tbody");

function buildTable (data) { 
  tbody.html("");
  data.forEach(function(UFOReport) {
    console.log(UFOReport);
    const row = tbody.append("tr"); 
    Object.entries(UFOReport).forEach(function([key, value]) {
      console.log(key, value);
      let cell = row.append("td");
      cell.text(value)
    });
  });
}

buildTable(tableData);
function runEnter() {
  d3.event.preventDefault();
  let filterdata=tableData;
  const inputValue = d3.select("#datetime").property("value");

  console.log(inputValue);
  console.log(tableData);

  if (inputValue) {
  filtereddata =filterdata.filter(row => row.datetime === inputValue);
  console.log(filtereddata);
  }
  buildTable(filtereddata);
}

d3.selectAll("#filter-btn").on("click", runEnter); 
