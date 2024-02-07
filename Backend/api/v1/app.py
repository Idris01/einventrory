#!/usr/bin/python3
"""Main flask app"""
from api.v1 import create_app
from flask import jsonify
from database import storage

app = create_app()


@app.teardown_appcontext
def closeDB(e=None):
    storage.end_session()


@app.errorhandler(404)
def notFound(err):
    return jsonify({'error': 'Not found'}), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
