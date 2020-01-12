var url = "samples.json"

d3.json(url).then(function(data) {
    console.log(data);
  });

//the updateData function will run when there is a change to the selDataset element
  d3.selectAll("#selDataset").on("change", updateData);

//create updateData function
function updateData(){
    var selection = d3.select("#selDataset");
    var selectedData = selection.property('value');

    //todp -- select data based on the index
}



