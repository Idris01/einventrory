"""This defines the Organization class and it's mappingss to the DB"""
from . import Base
from datetime import datetime
from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
import uuid


class Organization(Base):
    """Defines the organization class"""
    __tablename__ = "organizations"
    id = Column(String(128), primary_key=True)
    name = Column(String(128), nullable=False)
    country = Column(String(128), nullable=False)
    address = Column(String(128))
    creator_id = Column(String(128), ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    description = Column(String(128))
    time_zone = Column(String(128), nullable=False)
    mobile = Column(String(60))
    image = Column(String(512))
    creator = relationship("User", back_populates='org_created')
    users = relationship("User", secondary='org_user_association',
                         viewonly=False, back_populates="organizations")
    categories = relationship("Category", back_populates="organization")
    
    def __init__(self, **kwargs):
        """Initializes the class"""
        self.id = uuid.uuid4()
        self.name = kwargs.get("name", None)
        self.country = kwargs.get("country", None)
        self.address = kwargs.get("address", None)
        self.creator_id = kwargs.get("creator_id", None)
        self.description = kwargs.get("description", None)
        self.time_zone = kwargs.get("timezone", None)
        self.mobile = kwargs.get("mobile", None)
        self.image = kwargs.get("image", None)
