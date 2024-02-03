"""This defines the User classs and it's mappingss to the DB"""
from . import Base
from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey,\
        Table, Boolean
from sqlalchemy.orm import relationship
import uuid


org_user_association = Table('org_user_association', Base.metadata,
    Column('organization_id', String, ForeignKey('organizations.id')),
    Column('user_id', Integer, ForeignKey('users.id')))


class User(Base):
    """defines User class"""
    __tablename__ = 'users'
    id = Column(String(128), primary_key=True)
    last_name = Column(String(128), nullable=False)
    first_name = Column(String(128), nullable=False)
    email = Column(String(128))
    created_at = Column(DateTime, default=datetime.utcnow)
    mobile = Column(String(60))
    user_role = Column(String(128), nullable=False)
    email_verified = Column(Boolean, default=False)
    mobile_verified = Column(Boolean, default=False)
    active_token = Column(String(128))
    token_expiry = Column(DateTime)
    image = Column(String(512))
    organizations = relationship("Organization",
                                 secondary='org_user_association',
                                 viewonly=False, back_populates="users")
    org_created = relationship('Organization', back_populates='creator')

    def __init__(self, **kwargs):
        """Constructor for the class"""
        self.id = uuid.uuid4()
        self.last_name = kwargs.get("last_name", None)
        self.first_name = kwargs.get("first_name", None)
        self.email = kwargs.get("email", None)
        self.created_at = kwargs.get("created_at", datetime.utcnow())
        self.mobile = kwargs.get("mobile", None)
        self.user_role = kwargs.get("user_role", None)
        self.email_verified = kwargs.get("email_verified", False)
        self.mobile_verified = kwargs.get("mobile_verified", False)
        self.image = kwargs.get("image", None)
