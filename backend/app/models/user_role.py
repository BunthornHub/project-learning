from sqlalchemy import Column, Integer, Table, Boolean, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from .base import Base

users_roles = Table(
    'users_roles',
    Base.metadata,
    Column("user_id", Integer, ForeignKey('users.id')),
    Column("role_id", Integer, ForeignKey('roles.id')),
    Column("created_at", TIMESTAMP),
    Column("updated_at", TIMESTAMP)
)

    
    