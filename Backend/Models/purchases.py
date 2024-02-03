"""This defines the purchase transaction class"""
from . import Base
from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.orm import relationship
import uuid


class Purchase(Base):
    """Records all item purchases or returns processed
       by the organization. """
    __tablename__ = "purchases"
    id = Column(String(128), primary_key=True)
    date = Column(DateTime, nullable=False)
    organization_id = Column(String(128), ForeignKey("organizations.id"),
                             nullable=False)
    user_id = Column(String(128), ForeignKey("users.id"), nullable=False)
    item_id = Column(String(128), ForeignKey("items.id"), nullable=False)
    quantity = Column(Integer, nullable=False)
    purchase_cost = Column(Float, nullable=False)
    total_items_in_store = Column(Integer)
    details = Column(String(256))
    organization = relationship("Organization", back_populates="purchases",
                                cascade="delete")
    item = relationship("Item", back_populates="purchase_history")

    def __init__(self, **kwargs):
        """Initializes the class"""
        self.id = uuid.uuid4()
        self.date = kwargs.get("date")
        self.organization_id = kwargs.get("organization_id")
        self.user_id = kwargs.get("user_id")
        self.item_id = kwargs.get("item_id")
        self.quantity = kwargs.get("quantity")
        self.total_items_in_store = kwargs.get("new_item_total")
        self.details = kwargs.get("details")
