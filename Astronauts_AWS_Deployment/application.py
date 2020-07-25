from flask import Flask, jsonify, render_template


application = app = Flask(__name__)

@app.route("/")
def welcome():

    return render_template("index.html")

@app.route("/index.html")
def index():

    return render_template("index.html")


@app.route("/Dashboard.html")
def Dashboard():

    return render_template("Dashboard.html")

@app.route("/nasa.html")
def nasa():
    return render_template("nasa.html")

@app.route("/machine-learning.html")
def machinelearning():
    return render_template("machine-learning.html")


if __name__ == "__main__":
    application.run(debug=True)


