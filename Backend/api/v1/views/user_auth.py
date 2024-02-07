#!/usr/bin/python3
from auth import Auth
from flask import jsonify, request, redirect, abort
from api.v1.views import app_look
from emailVerification import Email

AUTH = Auth()
Mail = Email()

session = dict()
app_look.route('/signup', methods=['POST'], strict_slashes=False)
def reg_users():
    """Registers a user"""
    firstname = request.form.get('firstname')
    lastname = request.form.get('lastname')
    email = request.form.get('email')
    password = request.form.get('password')
    
    if email is None or password is None:
        return jsonify({'message': 'Email or password seems to be missing'}), 400
    try:
        AUTH.register_user(email, password, firstname, lastname)
        passW = Mail.generate_password()
        Mail.send_mail(email, passW)
        session['code'] = passW
        session['email'] = email
        return jsonify({"message": "Signup successful. Verification email sent."}), 200
    except ValueError:
        return jsonify({"message": "An error occured"}), 400

app_look.route('/verify-code', methods=['POST'], strict_slashes=False)
def get_code():
    """Gets the verification code"""
    code = request.form.get('code')

    try:
        if session.get('code') == code:
            print('Verification Successful')
        else:
            print('Verification failed')
        return jsonify({"message": "Verification failed. Please try again."}), 400
    except ValueError:
        return jsonify({"message": "An error occured"}), 400