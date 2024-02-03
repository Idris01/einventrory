"""This defines the items class which represent a product"""
from . import Base
from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float,\
    Boolean
from sqlalchemy.orm import relationship
import uuid


class Item(Base):
    """Defines the Item class"""
    __tablename__ = "items"
    id = Column(String(128), primary_key=True)
    name = Column(String(128), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)
    Category_id = Column(String(128), ForeignKey("categories.id"))
    created_by = Column(String(128))
    image = Column(String(512))
    unit = Column(String(128))
    cost_price = Column(Float)
    sale_price = Column(Float, nullable=False)
    quantity = Column(Integer, default=0)
    discount = Column(Float, default=0)
    alert_level = Column(Integer, default=0)
    organization_id = Column(String(128), ForeignKey("organizations.id"),
                             nullable=False)
    obsolete = Column(Boolean, default=False)
    organization = relationship("Organization", back_populates="items",
                                cascade="delete")
    category = relationship("Category", back_populates="items")
    purchase_history = relationship("Purchase", back_populates="item")
    sale_history = relationship("Sale", back_populates="item")

    def __init__(self, **kwargs):
        """Initializes the class """
        self.id = uuid.uuid4()
        self.name = kwargs.get("name", None)
        self.Category_id = kwargs.get("Category_id", None)
        self.created_by = kwargs.get("username", None)
        self.image = kwargs.get("image", None)
        self.unit = kwargs.get("unit", None)
        self.cost_price = kwargs.get("cost_price", None)
        self.sale_price = kwargs.get("sale_price", None)
        self.quantity = kwargs.get("quantity", None)
        self.alert_level = kwargs.get("alert_level", None)
        self.organization_id = kwargs.get("organization_id", None)
