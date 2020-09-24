# import necessary libraries
import os
import numpy as np
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Yas.123@localhost:5432/Parking_db'
# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/hi")
def hi():
    return "hello"

# Query the database and send the jsonified results
@app.route("/api/sensor")
def pals():
    results = db.engine.execute("SELECT * from \"Area\"")
    return jsonify([dict(row) for row in results])



if __name__ == "__main__":
    app.run(debug=True)