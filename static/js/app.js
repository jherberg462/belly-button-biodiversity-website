var url = "samples.json"

//comment this out once debugging is complete
d3.json(url).then(function(data) {
    // console.log(data);
    // console.log(data.names)
  });

  //create the dropdown options
  //read in data from json file 
d3.json(url).then((jsonData) => {
    //the variable data will be the data from the above json file
    var data = jsonData

    d3.select("select")
    .selectAll("option")
    .data(data.names)
    .enter()
    .append('option')
    .text(function(d){return d})
    .attr("value", function(d){return d});

})




//the updateData function will run when there is a change to the selDataset element
d3.selectAll("#selDataset").on("change", updateData);

//create updateData function
function updateData(){
    d3.json(url).then(function(data) {
        // console.log(data);
   
    var selection = d3.select("#selDataset");
    var selectedData = selection.property('value');
    //todp -- select data based on the index
    function filterMetaData(abc){
        return abc.id == selectedData
    }
    //filters data based on filterData function
    var filteredID = data.metadata.filter(filterMetaData)
    //maps the ethnicity based on the filteredID
    var filteredEthnicity = filteredID.map(id => id.ethnicity)
    var filteredGender = filteredID.map(id => id.gender)
    var filteredAge = filteredID.map(id => id.age)
    var filteredLocation = filteredID.map(id => id.location)
    var filteredBBtype = filteredID.map(id => id.bbtype)
    var filteredWfreq = filteredID.map(id => id.wfreq)

    function filterSamplesData(sample){
        return data.samples.id == selectedData
    }
    var MetadataSection = d3.select("#sample-metadata")
    MetadataSection.append("p").text("Ethnicity: " + filteredEthnicity)
    MetadataSection.append("p").text("Gender: " + filteredGender)
    MetadataSection.append("p").text('Age: ' + filteredAge)
    MetadataSection.append('p').text('Location: ' + filteredLocation)
    MetadataSection.append('p').text("BBtype: " + filteredBBtype)
    MetadataSection.append('p').text('wfreq: ' + filteredWfreq)
    // console.log(filteredEthnicity)

});
}




