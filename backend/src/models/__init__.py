from flask import Blueprint

models = Blueprint('models', __name__)
from . import User, Product, ShoppingList