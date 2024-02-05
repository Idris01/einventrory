#!/usr/bin/env python3
"""Authentication File"""
import bcrypt

from Database.db import Database
from Models.users import User
from sqlalchemy.orm.exc import NoResultFound
from uuid import uuid4
import jwt

def _hash_password(password: str) -> bytes:
    """Hashes the password and returns it bytes
    Args:
        Passwords"""
    data = password.encode('utf-8')
    hashed_passwd = bcrypt.hashpw(data, bcrypt.gensalt())
    return hashed_passwd

def _generate_uuid() -> str:
    """Generates a UUID for session authentication"""
    uuid = str(uuid4())
    return uuid

class Auth:
    """Authentication class that interacts with the
    authentication database"""

    def __init__(self):
        self._db = Database()

    def register_user(self, email: str, password: str,
                      firstname: str, lastname: str):
        """Registers a user to the database"""
        if password is None:
            raise ValueError("Password cannot be None")
        user = self._db.get_a_user(email=email)
        if user:
            raise ValueError(f"User {email} already exists")
        return self._db.register_user(email, _hash_password(password), firstname, lastname)
        
    def valid_login(self, email: str, password: str):
        """Validates the password"""
        user = self._db.get_all_user(email=email)
        if not user:
            return False
        
        hashed_password = user.hashed_password
        if not hashed_password:
            return False
        return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode())
    
    def create_session(self, email: str) -> str:
        """Creates a session"""
        user = self._db.get_user(email=email)
        if not user:
            return None
        session_id = _generate_uuid()
        self._db.update_user(user.id, session_id=session_id)
        return session_id
    
    def destroy_session(self, user_id):
        """Destroys the session"""
        try:
            self._db.update_user(user_id, session_id=None)
        except ValueError:
            return None
        return None

    def get_user_from_session_id(self, session_id: str):
        """Gets a user from a session id"""
        session_user = self._db.get_a_user(session_id=session_id)
        if not session_user:
            return None
        return session_user