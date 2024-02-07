from flask import Flask, jsonify
from flask_cors import CORS
from api import jwt
from api.v1.views import app_look


def create_app():
    """Creates the Flask app with desired config"""
    app = Flask(__name__)
    app.config["JWT_SECRET_KEY"] = "super-secret"
    cors = CORS(app, resources={r"/*": {"origins": "*"}})
    jwt.init_app(app)
    app.register_blueprint(app_look)
    return app
