"""This defines the Sale transaction class"""
from . import Base
from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.orm import relationship
import uuid


class Sale(Base):
    """Records all item sales or removal processed
       by the organization. """
    __tablename__ = "sales"
    id = Column(String(60), primary_key=True)
    date = Column(DateTime, nullable=False)
    organization_id = Column(String(128), ForeignKey("organizations.id"),
                             nullable=False)
    done_by = Column(String(128), nullable=False)
    item_id = Column(String(128), ForeignKey("items.id"), nullable=False)
    quantity = Column(Integer, nullable=False)
    sale_total = Column(Float, nullable=False)
    items_left = Column(Integer)
    details = Column(String(256))
    organization = relationship("Organization", back_populates="sales",
                                cascade="delete")
    item = relationship("Item", back_populates="sale_history")

    def __init__(self, **kwargs):
        """Initializes the class"""
        self.id = str(uuid.uuid4())
        self.date = kwargs.get("date")
        self.organization_id = kwargs.get("organization_id")
        self.done_by = kwargs.get("user_name")
        self.item_id = kwargs.get("item_id")
        self.quantity = kwargs.get("quantity")
        self.sale_total = kwargs.get("total_cost")
        self.items_left = kwargs.get("new_item_total")
        self.details = kwargs.get("details")
