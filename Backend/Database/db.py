""" Handles ORM with SqlAlchemy for all classes. """
from models import Base
from models.users import User
from models.organizations import Organization
from models.items import Item
from models.categories import Category
from models.purchases import Purchase
from models.sales import Sale
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session


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

    def register_user(self, **kwargs):
        """Registers a user to the database."""
        new_user = User(**kwargs)
        self.__session.add(new_user)
        self.__session.commit()
        return new_user

    def get_all_user(self):
        """Returns all users"""
        return self.__session.query(User).all()
