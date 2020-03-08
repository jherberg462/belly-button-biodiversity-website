#Import Dependencies
from flask import Flask, render_template
import os
import warnings
warnings.filterwarnings('ignore')


#Create Instance of Flask App
app = Flask(__name__)

#main route
@app.route("/")
def index():

    # return index.html file in templates folder
    return render_template("index.html")

#route for js file
@app.route('/app.js')
def js():
    return render_template('app.js')

#route to return json data that is read in
@app.route('/samples.json')
def js_data():
    return render_template('samples.json')

#route to return bonus.js file (not actually needed)
@app.route("/bonus.js")
def css():
    return render_template('bonus.js')


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)