#!/usr/bin/env python3
from flask import Flask, jsonify
from flask_cors import CORS
from Models.users import User
from Database.db import Database

app = Flask(__name__)
# cors = CORS

@app.errorhandler(404)
def notFound(err):
    return jsonify({'error': 'Not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
