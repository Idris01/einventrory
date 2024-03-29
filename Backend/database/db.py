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

    def end_session(self):
        """Ends the current session"""
        self.__session.remove()

    def add(self, obj: object):
        """Adds an object to the session"""
        self.__session.add(obj)

    def save(self):
        """Saves all saved transaction"""
        self.__session.commit()

    def register_user(self, **kwargs):
        """Registers a user to the database."""
        new_user = User(**kwargs)
        self.__session.add(new_user)
        self.__session.commit()
        return new_user

    def get_all_user(self):
        """Returns all users"""
        return self.__session.query(User).all()

    def get_user_by_id(self, user_id: str) -> User:
        """returns a user based on the id"""
        user = self.__session.query(User).filter(User.id == user_id).all()
        if len(user) == 1:
            return user[0]
        else:
            return None

    def create_organization(self,  **kwargs) -> Organization:
        """Creates an organization by an admin user"""
        user = self.get_user_by_id(kwargs.get("user_id"))
        org = Organization(**kwargs)
        self.__session.add(org)
        user.organizations.append(org, {'user_role': "Admin"})
        self.__session.commit()
        return org

    def get_org_by_id(self, org_id: str) -> Organization:
        """returns an organization based on the id"""
        user = self.__session.query(Organization).filter(
            Organization.id == org_id).all()
        if len(user) == 1:
            return user[0]
        else:
            return None

    def get_org_by_name(self, name: str) -> Organization:
        """returns an organization based on the name"""
        user = self.__session.query(Organization).filter(
            Organization.name == name).all()
        if len(user) >= 1:
            return user
        else:
            return None

    def get_user_by_email(self, email: str) -> User:
        """returns a user based on the image"""
        user = self.__session.query(User).filter(User.email == email).all()
        if len(user) == 1:
            return user[0]
        else:
            return None

    def get_user_by_mobile(self, mobile: str) -> User:
        """returns a user based on the mobile"""
        user = self.__session.query(User).filter(User.mobile == mobile).all()
        if len(user) == 1:
            return user[0]
        else:
            return None
