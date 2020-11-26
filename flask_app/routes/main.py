from flask import Blueprint, Flask, render_template


main = Blueprint('main', __name__)

@main.route("/", methods = ['GET'])
def home():
    return render_template("prototype.html")

@main.route("/favicon.ico", methods = ['GET'])
def fav():
    return render_template("prototype.html")


    
