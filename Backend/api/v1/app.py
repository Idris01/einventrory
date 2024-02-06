#!/usr/bin/python3
from flask import Flask, jsonify
from flask_cors import CORS
from Database.db import Database
from api.v1.views import app_look

app = Flask(__name__)
app.register_blueprint(app_look)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# @app.teardown_appcontext()
# def closeDB(e):
#     return Database.close()

@app.errorhandler(404)
def notFound(err):
    return jsonify({'error': 'Not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
