from sqlalchemy import Column, Integer, String, VARCHAR, Boolean, TIMESTAMP
from sqlalchemy.orm import relationship
from . import base

class User(base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(VARCHAR(255), unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(VARCHAR(255))
    status = Column(Boolean, default=True)
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    