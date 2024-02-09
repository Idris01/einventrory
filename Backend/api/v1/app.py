#!/usr/bin/python3
"""Main flask app"""
from flask import jsonify, Flask
from database import storage
from flask_cors import CORS
from api.v1.views import app_look
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret"
#app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(hours=12)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
jwt = JWTManager(app)
app.register_blueprint(app_look)


@app.teardown_appcontext
def closeDB(e=None):
    storage.end_session()


@app.errorhandler(404)
def notFound(err):
    return jsonify({'error': f'Not found {err}'}), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
