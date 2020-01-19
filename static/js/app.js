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
    MetadataSection.html('')
    MetadataSection.append("p").text("Ethnicity: " + filteredEthnicity)
    MetadataSection.append("p").text("Gender: " + filteredGender)
    MetadataSection.append("p").text('Age: ' + filteredAge)
    MetadataSection.append('p').text('Location: ' + filteredLocation)
    MetadataSection.append('p').text("BBtype: " + filteredBBtype)
    MetadataSection.append('p').text('wfreq: ' + filteredWfreq)
    // console.log(filteredEthnicity)
    //filter sample data for only the filteredID
    var filteredSampleId = data.samples.filter(filterMetaData)
    var filteredOtu_id = filteredSampleId.map(id => id.otu_ids)
    var filteredSample_value = filteredSampleId.map(id => id.sample_values)
    var filteredOtu_label = filteredSampleId.map(id => id.otu_labels)

    //slice sample data to get only top 10 
    //it appears the sample values are already in decending order
    var slicedOtu_id = filteredOtu_id[0].slice(0,10)
    var slicedSample_value = filteredSample_value[0].slice(0, 10)
    var slicedOtu_label = filteredOtu_label[0].slice(0, 10)

    var slicedOtu_ids = []
    for (i = 0; i < slicedOtu_id.length; i++){
        slicedOtu_ids.push("OTU " + slicedOtu_id[i])
    }
    console.log(slicedOtu_ids)
    //create bar chart

    //data
var trace = {
    y: slicedOtu_ids,
    x: slicedSample_value,
    type: 'bar',
    text: slicedOtu_label, 
    orientation: 'h'
}
var data1 = [trace]
Plotly.newPlot('bar', data1)
// console.log(slicedSample_value)

});
}



//create updateData function
function init(){ // consider copying update function after it is done
    //be sure to change the filterMetaData function to be == to 940
    d3.json(url).then(function(data) {
        // console.log(data);
   
    var selection = d3.select("#selDataset");
    var selectedData = selection.property('value');
    //todp -- select data based on the index
    function filterMetaData(abc){
        return abc.id == 940
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
    // ("#sample-metadata").empty()
    MetadataSection.append("p").text("Ethnicity: " + filteredEthnicity)
    MetadataSection.append("p").text("Gender: " + filteredGender)
    MetadataSection.append("p").text('Age: ' + filteredAge)
    MetadataSection.append('p').text('Location: ' + filteredLocation)
    MetadataSection.append('p').text("BBtype: " + filteredBBtype)
    MetadataSection.append('p').text('wfreq: ' + filteredWfreq)
    // console.log(filteredEthnicity)

});
}

init()