# Belly Button Biodiversity

The goal of this project was to use JavaScript, and JavaScript libraries Plotly and D3 to create a webpage that presents interactive visualizations of belly button biodiversity data. The data was provided as a JSON array separate the file containing JavaScript code. D3 was used to read in the data into my JavaScript scripts, and Python flask endpoints were used to access the data.

## Analysis Questions

1. What are the demographics of each person whose belly button is sampled? 

2. How frequently does each person wash their belly button? 

3. What are the top ten concentrations of Operational Taxonomic Units (OTUs) and their associated OTU for each person?

4. What are all the concentrations of OTUs in each sample?

## Tasks

1. Create an HTML file with bootstrap rows/columns that match the desired layout and div tags that my JavaScript code can reference. Use script tags to read in JavaScript code.

2. Within JavaScript, use D3 to read in the file containing the JSON array, and create a function.

Within the function referenced in step 2 above:

3. Use D3 to append each person's sample ID to a drop-down by selecting a 'select' tag in the HTML with a specific ID.

4. Create an event listener that will call a function when the selection dropdown referenced in step 3 above is changed.

5. Create a function that will be called in step 4 above that filters the data based on the selection, will append HTML to a specific div that will display the demographic information of the person whose belly button sample is associated with the sample ID, obtain the top ten concentrations of OTUs, graph the top ten OTUs to a bar chart, and graph all the OTUs associated with the person being sampled to a bubble chart. 

6. Create a second function described in steps 2-5 above that will display graphs of a static default sample.

7. Call the function referenced in step 6 above. 

## Datasets used:

https://github.com/jherberg462/belly-button-biodiversity-website/blob/master/templates/samples.json 

## Deployment/Results

My website is deployed at https://belly-button-biodiversity-jh.herokuapp.com


