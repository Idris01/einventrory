from flask import Flask, jsonify
from flask_cors import CORS
from flask import Blueprint
from api import jwt

app_look = Blueprint('app_look', __name__, url_prefix='/api/v1')


def create_app():
    """Creates the Flask app with desired config"""
    app = Flask(__name__)
    app.config["JWT_SECRET_KEY"] = "super-secret"
    cors = CORS(app, resources={r"/*": {"origins": "*"}})
    jwt.init_app(app)
    app.register_blueprint(app_look)
    return app
