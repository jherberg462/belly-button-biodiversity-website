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

    //add "OTU to the Otu_id for the y axis value"
    var slicedOtu_ids = []
    for (i = 0; i < slicedOtu_id.length; i++){
        slicedOtu_ids.push("OTU " + slicedOtu_id[i])
    }
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


//add "OTU" to the Out_id for the hover text of bubble chart
var filteredOtu_ids = []
for (i = 0; i < filteredOtu_label[0].length; i++){
    filteredOtu_ids.push("OTU " + filteredOtu_label[0][i])
}
//create bubble chart
var trace1 = {
    x: filteredOtu_id[0],
    y: filteredSample_value[0],
    text: filteredOtu_ids,
    mode: 'markers',
    marker: {
        color: filteredOtu_id[0],
        size: filteredSample_value[0]
    },
    

};
var data2 = [trace1]
Plotly.newPlot('bubble', data2)

var trace2 = {
    domain: {x: [0, 1], y: [0, 1]},
    value: filteredWfreq[0], 
    title: {text: "Belly Button Washing Frequency - per Week"},
    type: 'indicator',
    mode: 'gauge+number',
    gauge: {
        axis: {
            range: [null, 9]
        }
    }
}
var data3 = [trace2]
Plotly.newPlot('gauge', data3)

});
}





//create updateData function
function init(){
    d3.json(url).then(function(data) {
        // console.log(data);
   
    var selection = d3.select("#selDataset");
    var selectedData = selection.property('value');
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

    //add "OTU to the Otu_id for the y axis value"
    var slicedOtu_ids = []
    for (i = 0; i < slicedOtu_id.length; i++){
        slicedOtu_ids.push("OTU " + slicedOtu_id[i])
    }
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


//add "OTU" to the Out_id for the hover text of bubble chart
var filteredOtu_ids = []
for (i = 0; i < filteredOtu_label[0].length; i++){
    filteredOtu_ids.push("OTU " + filteredOtu_label[0][i])
}
//create bubble chart
var trace1 = {
    x: filteredOtu_id[0],
    y: filteredSample_value[0],
    text: filteredOtu_ids,
    mode: 'markers',
    marker: {
        color: filteredOtu_id[0],
        size: filteredSample_value[0]
    },
    

};
var data2 = [trace1]
Plotly.newPlot('bubble', data2)

var trace2 = {
    domain: {x: [0, 1], y: [0, 1]},
    value: filteredWfreq[0], 
    title: {text: "Belly Button Washing Frequency - per Week"},
    type: 'indicator',
    mode: 'gauge+number',
    gauge: {
        axis: {
            range: [null, 9]
        }
    }
}
var data3 = [trace2]
Plotly.newPlot('gauge', data3)

});
}

init()