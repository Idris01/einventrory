#!/usr/bin/env python3
"""
Main file
"""
from database.db import Database

kwarg = { 'email' : 'dinobi022.com',
'password': '22',
'firstname': 'Dinobi',
'lastname': 'Udeh',
'mobile': '07066041638'
}
data = Database()

try:
    user = data.register_user(**kwarg)
    print("successfully created a new user!")
except ValueError as err:
    print("could not create a new user: {}".format(err))