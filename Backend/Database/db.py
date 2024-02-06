#!/usr/bin/env python3
""" Handles ORM with SqlAlchemy for all classes. """
from Models import Base
from Models.users import User
from Models.organizations import Organization
from Models.items import Item
from Models.categories import Category
from Models.purchases import Purchase
from Models.sales import Sale
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
# from sqlalchemy.exc import NoResultFound


class Database:
    """Defines the SQL databse ORM"""

    def __init__(self) -> None:
        self.__engine = create_engine("sqlite:///a.db", echo=False)
        Base.metadata.create_all(self.__engine)
        self.__session = None

    def start_session(self):
        """Creates a session to manage ORM operations"""
        session_factory = sessionmaker(bind=self.__engine,
                                       expire_on_commit=True)
        self.__session = scoped_session(session_factory)
        return self.__session

    def register_user(self, email: str, hashed_password: str, firstname: str, lastname: str):
        """Registers a user to the database."""
        new_user = User(email=email, hashed_password=hashed_password, firstname=firstname, lastname=lastname)
        self.__session.add(new_user)
        self.__session.commit()
        return new_user

    def get_all_user(self):
        """Returns all users"""
        return self.__session.query(User).all()

    def get_a_user(self, **kwargs):
        """Gets a user"""
        SESSION = self.start_session()
        usr = SESSION.query(User).filter_by(**kwargs).first()
        if not usr:
            return None
        return usr
